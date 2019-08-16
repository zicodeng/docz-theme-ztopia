import React from 'react';
import PropTypes from 'prop-types';

class Pet {}
const dog = new Pet();

/**
 * This component is used to showcase all possible prop types
 */
const MyComponent = ({ children }) => {
  return (
    <div
      style={{
        color: 'red',
      }}
    >
      {children}
    </div>
  );
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
  arrayOfShape: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      geolocation: PropTypes.shape({
        longitude: PropTypes.number,
        latitude: PropTypes.number,
      }),
      zipCode: PropTypes.number,
      state: PropTypes.string,
      country: PropTypes.string,
    }),
  ),
  /** PropTypes.objectOf: an object with property values of a certain type */
  objectOf: PropTypes.objectOf(PropTypes.string),
  /** PropTypes.shape: an object taking on a particular shape */
  objectWithShape: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.number,
  }),
  /** Complex shape: nested shape */
  objectWithComplexShape: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['organization', 'company']).isRequired,
    members: PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.shape({
          name: PropTypes.string,
          geolocation: PropTypes.shape({
            longitude: PropTypes.number,
            latitude: PropTypes.number,
          }),
          zipCode: PropTypes.number,
          state: PropTypes.string,
          country: PropTypes.string,
        }),
        name: PropTypes.string,
        age: PropTypes.number,
        gender: PropTypes.oneOf(['male', 'female', 'neutral']),
      }),
    ),
  }),
  /** PropTypes.any:  A value of any data type */
  any: PropTypes.any,
  /** Description can have inline code like this: `Hello, World!` or `() => void` */
  descriptionWithInlineCode: PropTypes.string,
  /**
   * <@default=`'docz-theme-ztopia'`>
   *
   * This is especially useful when your components are written in TypeScript,
   * and Docz is not able to parse `MyComponent.defaultProps`
   */
  customDefault: PropTypes.string,
  /**
   * <@internal>
   *
   * Use this special syntax when your prop is only used internally
   * by other components and should not be displayed in props table
   */
  internalProp: PropTypes.string,
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
  arrayOfShape: null,
  objectOf: { firstName: 'Zico', lastName: 'Deng' },
  objectWithShape: { firstName: 'Zico', lastName: 'Deng' },
  objectWithComplexShape: null,
  any: 'I can be anything :)',
  descriptionWithInlineCode:
    'Look right, my description field, it has inline code',
  undefinedType: undefined,
};

export default MyComponent;
