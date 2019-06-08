import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import { useTheme } from '../../theme';

import styles from './Handles.css';

const cx = classNames.bind(styles);

interface HandleProps {
  position: 'bottom' | 'right';
}

const Handle: FunctionComponent<HandleProps> = ({ position, children }) => {
  const {
    themeConfig: { colors },
  } = useConfig();
  const { theme } = useTheme();

  return (
    <div
      className={cx('container')}
      style={{
        backgroundColor:
          theme === 'light' ? colors.whiteDark : colors.blackLight,
        borderColor: colors.grey,
        borderRightWidth: position === 'right' ? 1 : 0,
        borderLeftWidth: position === 'right' ? 1 : 0,
        borderTopWidth: position === 'bottom' ? 1 : 0,
      }}
    >
      <div className={cx('bars', `bars--${position}`)}>
        <div
          className={cx('bar', `bar--${position}`)}
          style={{
            backgroundColor: colors.grey,
          }}
        />
        <div
          className={cx('bar', `bar--${position}`)}
          style={{
            backgroundColor: colors.grey,
          }}
        />
      </div>
      {children}
    </div>
  );
};

export const HandleRight = props => {
  return <Handle position="right" {...props} />;
};

export const HandleBottom = props => {
  return <Handle position="bottom" {...props} />;
};
