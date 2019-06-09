import React, { PureComponent, FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import styles from './ErrorBoundary.css';

const cx = classNames.bind(styles);

export const withErrorBoundary = (Element, errorCallback) => () => {
  return class ErrorBoundary extends PureComponent {
    render() {
      return Element && (typeof Element === 'function' ? <Element /> : Element);
    }
    componentDidCatch(error) {
      errorCallback(error);
    }
  };
};

interface Props {
  error: string;
}

const ErrorBoundary: FunctionComponent<Props> = ({ error }) => {
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
    >
      {error}
    </div>
  );
};

export default ErrorBoundary;
