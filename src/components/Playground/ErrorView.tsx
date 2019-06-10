import React, { FunctionComponent, memo } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import styles from './ErrorView.css';

const cx = classNames.bind(styles);

interface Props {
  errorType: 'runtime' | 'transpile';
}

const ErrorView: FunctionComponent<Props> = memo(({ errorType, children }) => {
  const {
    themeConfig: { colors, fonts },
  } = useConfig();
  return (
    <div
      className={cx('container')}
      style={{
        backgroundColor: colors.error,
        fontFamily: fonts.body,
        color: colors.whiteLight,
      }}
    >
      <p>
        Oops! Your code seems to have a&nbsp;
        <span
          style={{
            color: colors.primary,
          }}
        >
          {errorType}
        </span>
        &nbsp;error. See details below to help you debug
      </p>
      <p>{children}</p>
    </div>
  );
});

export default ErrorView;
