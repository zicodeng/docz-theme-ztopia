import React from 'react';
import PropTypes from 'prop-types';

class Pet {}
const dog = new Pet();

/**
 * This component is used to showcase all possible prop types
 */
const MyComponent = () => {
  return <div>MyComponent</div>;
};

MyComponent.propTypes = {
  /** PropTypes.string */
  string: PropTypes.string,
  /** PropTypes.number */
  number: PropTypes.number,
  /** PropTypes.bool */
  boolean: PropTypes.bool,
  /** PropTypes.symbol */
  symbol: PropTypes.symbol,
  /** PropTypes.object */
  object: PropTypes.object,
  /** PropTypes.func */
  function: PropTypes.func,
  /** PropTypes.array */
  array: PropTypes.array,
  /** PropTypes.node: numbers, strings, elements or an array (or fragment) containing these types */
  node: PropTypes.node,
  /** PropTypes.element: a React element */
  element: PropTypes.element,
  /** PropTypes.instanceOf: an instance of a class */
  instance: PropTypes.instanceOf(Pet),
  /** PropTypes.enum: prop is limited to specific values */
  enum: PropTypes.oneOf([
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'black',
    'white',
  ]),
  /** PropTypes.oneOfType: an object that could be one of many types */
  union: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Pet),
  ]),
  /** PropTypes.arrayOf: an array of a certain type */
  arrayOf: PropTypes.arrayOf(PropTypes.number),
  /** PropTypes.objectOf: an object with property values of a certain type */
  objectOf: PropTypes.objectOf(PropTypes.string),
  /** PropTypes.shape: an object taking on a particular shape */
  objectWithShape: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.number,
  }),
};

MyComponent.defaultProps = {
  string: 'Hello, Ztopia!',
  number: 100,
  boolean: true,
  symbol: Symbol('symbol'),
  object: {},
  function: () => {},
  array: [],
  node: 'Anything that can be rendered',
  element: <MyComponent />,
  instance: dog,
  enum: 'red',
  union: 100,
  arrayOf: [1, 2, 3],
  objectOf: { firstName: 'Zico', lastName: 'Deng' },
  objectWithShape: { firstName: 'Zico', lastName: 'Deng' },
};

export default MyComponent;
