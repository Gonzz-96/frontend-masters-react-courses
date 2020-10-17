// mostly code from react.js/docs/error-boundaries.html

import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

// error boundaries are not possible with hooks
// they always need to be a class cpomonents.
class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    // the error should be also sent to the logging service
    console.error('ErrorBoundary caught an error', error, info);
  }

  // will run everytime it gets new state or new props
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(
        () =>
          this.setState({
            redirect: true,
          }),
        5000
      );
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{' '}
          to go back to the home page or wait five seconds
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
