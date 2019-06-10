import React, { PureComponent, ReactNode } from 'react';

import ErrorView from './ErrorView';

interface State {
  error: string;
  goodChildren: ReactNode;
}

/**
 * ErrorBoundary only handles runtime errors,
 * transpile errors are handled separately in Playground
 */
class ErrorBoundary extends PureComponent<{}, State> {
  state = {
    error: '',
    goodChildren: null,
  };

  render() {
    const { children } = this.props;
    const { error } = this.state;
    return error ? (
      <ErrorView errorType="runtime">{error}</ErrorView>
    ) : (
      children
    );
  }

  componentDidCatch(error) {
    this.setState({
      error: error.toString(),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { children } = this.props;
    const { error } = this.state;
    if (prevState !== error && prevProps.children !== children) {
      this.setState({
        error: '',
      });
    }
  }
}

export default ErrorBoundary;
