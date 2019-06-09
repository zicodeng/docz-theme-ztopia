import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import styles from './ErrorView.css';

const cx = classNames.bind(styles);

const ErrorView: FunctionComponent = props => {
  const {
    themeConfig: { colors, fonts },
  } = useConfig();
  return (
    <div
      className={cx('container')}
      style={{
        backgroundColor: colors.error,
        fontFamily: fonts.body,
        color: colors.blackDark,
      }}
      {...props}
    />
  );
};

export default ErrorView;
