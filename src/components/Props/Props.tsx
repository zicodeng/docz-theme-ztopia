import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { PropsComponentProps, useConfig } from 'docz';
import prettier from 'prettier/standalone';
import parserTS from 'prettier/parser-typescript';

import { useTheme } from '../../theme';
import InlineCode from '../InlineCode';

import Tooltip from './Tooltip';
import styles from './Props.css';

const cx = classNames.bind(styles);

const parseShape = value => {
  let code = 'interface Value {';
  Object.entries(value).forEach(([key, { required, name }]: [string, any]) => {
    // Use TypeScript way to express un/required prop
    // For example:
    // If required,     name: string
    // If not required, name?: string,
    code += `${key}${required ? '' : '?'}: ${name};`;
  });
  code += '}';
  const formattedCode = prettier.format(code, {
    parser: 'typescript',
    plugins: [parserTS],
  });
  return formattedCode;
};

const Props: FunctionComponent<PropsComponentProps> = ({ props }) => {
  const {
    themeConfig: { fonts, colors },
  } = useConfig();
  const { theme } = useTheme();

  console.log(props);

  const renderType = type => {
    const { name, value } = type;
    if (!value) {
      return name;
    }
    if (name === 'instanceOf') {
      return value;
    }
    if (name === 'enum') {
      return value.map(({ value }) => value).join(' | ');
    }
    if (name === 'union') {
      return value.map(prop => renderType(prop)).join(' | ');
    }
    if (name === 'arrayOf') {
      return `[${value.name}]`;
    }
    if (name === 'objectOf') {
      return `{key: ${value.name}}`;
    }
    if (name === 'shape') {
      return <Tooltip label="Shape" value={parseShape(value)} />;
    }
  };

  const renderDefaultValue = (type, defaultValue) => {
    if (!defaultValue) {
      return '-';
    }
    const { value } = defaultValue;
    return <InlineCode>{value}</InlineCode>;
  };

  return (
    <table
      className={cx('table')}
      style={{
        fontFamily: fonts.body,
      }}
    >
      <thead>
        <tr
          style={{
            backgroundColor:
              theme === 'light' ? colors.whiteDark : colors.blackLight,
          }}
        >
          <th>Property</th>
          <th>Type</th>
          <th>Default</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(props).map(
          ([name, { type, defaultValue, required, description }], i) => (
            <tr
              key={i}
              style={{
                borderBottom: `1px solid ${colors.grey}`,
              }}
            >
              <td style={{ color: colors.primary }}>{name}</td>
              <td className={cx('type')}>{renderType(type)}</td>
              <td className={cx('default-value')}>
                {renderDefaultValue(type.name, defaultValue)}
              </td>
              <td>{required ? 'true' : 'false'}</td>
              <td className={cx('desc')}>{description}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default Props;
