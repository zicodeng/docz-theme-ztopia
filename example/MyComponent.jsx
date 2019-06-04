import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component is used to showcase all possible prop types
 */
const MyComponent = () => {
  return <div>MyComponent</div>;
};

MyComponent.propTypes = {
  /** Optional string */
  string: PropTypes.string,
  /** Optional number */
  number: PropTypes.number,
};

export default MyComponent;
