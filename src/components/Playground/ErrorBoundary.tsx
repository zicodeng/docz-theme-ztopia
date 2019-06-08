import React, { PureComponent, FunctionComponent } from 'react';

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
  return <div>{error}</div>;
};

export default ErrorBoundary;
