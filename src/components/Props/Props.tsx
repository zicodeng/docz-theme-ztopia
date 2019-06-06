import React, { FunctionComponent, Fragment } from 'react';
import classNames from 'classnames/bind';
import { PropsComponentProps, useConfig } from 'docz';

import { useTheme } from '../../theme';
import InlineCode from '../InlineCode';

import Type from './Type';
import styles from './Props.css';

const cx = classNames.bind(styles);

const renderDesc = (desc?: string): JSX.Element[] | string => {
  if (!desc) {
    return '';
  }

  const regex = /`.*?`/g;
  const fragments = desc.split(regex).filter(text => text.length);
  const matched = desc.match(regex);

  if (!matched) {
    return desc;
  }

  return fragments.map((fragment, i) => (
    <Fragment key={i}>
      {fragment}
      <InlineCode>{matched[i].replace(/`/g, '')}</InlineCode>
    </Fragment>
  ));
};

const Props: FunctionComponent<PropsComponentProps> = ({ props }) => {
  const {
    themeConfig: { fonts, colors },
  } = useConfig();
  const { theme } = useTheme();

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
              <td className={cx('type')}>
                <Type type={type} />
              </td>
              <td className={cx('default-value')}>
                {defaultValue ? (
                  <InlineCode>{defaultValue.value}</InlineCode>
                ) : (
                  '-'
                )}
              </td>
              <td>{required ? 'true' : 'false'}</td>
              <td className={cx('desc')}>{renderDesc(description)}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
};

export default Props;
