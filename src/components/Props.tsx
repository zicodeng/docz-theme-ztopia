import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { PropsComponentProps, useConfig } from 'docz';

import styles from './Props.css';
import { useTheme } from 'src/theme';

const cx = classNames.bind(styles);

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
              <td>{type.name}</td>
              <td>{defaultValue ? defaultValue : '-'}</td>
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
