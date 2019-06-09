import React, { Component } from 'react';

import ErrorView from './ErrorView';

interface State {
  error: string;
}

/**
 * ErrorBoundary only handles runtime errors,
 * transpile errors are handled separately in Playground
 */
class ErrorBoundary extends Component<{}, State> {
  state = {
    error: '',
  };

  render() {
    const { children } = this.props;
    const { error } = this.state;
    return error ? <ErrorView>{error}</ErrorView> : children;
  }

  static getDerivedStateFromError(error) {
    return { error: error.toString() };
  }
}

export default ErrorBoundary;
