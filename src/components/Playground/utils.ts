import React from 'react';
import { transform } from 'buble';
import assign from 'core-js/fn/object/assign';

import { withErrorBoundary } from './ErrorBoundary';

const _poly = { assign };

const evalCode = (code, scope) => {
  const scopeKeys = Object.keys(scope);
  const scopeValues = scopeKeys.map(key => scope[key]);
  const res = new Function('_poly', 'React', ...scopeKeys, code);
  return res(_poly, React, ...scopeValues);
};

/**
 * Transpile code string to React element in runtime
 */
const transpile = (code: string, scope) => {
  // Handle adjacent elements without parent container
  if (!code.startsWith('()') && !code.startsWith('class')) {
    code = `<React.Fragment>${code}</React.Fragment>`;
  }

  //  Remove trailing semicolon to get an actual expression
  const trimmedCode = code.trim().replace(/;$/, '');

  // Workaround for classes and arrow functions
  const transformedCode = transform(`(${trimmedCode})`, {
    objectAssign: '_poly.assign',
    transforms: {
      dangerousForOf: true,
      dangerousTaggedTemplateString: true,
    },
  }).code.trim();

  return evalCode(`return ${transformedCode}`, scope);
};

export const generateElement = (
  code: string,
  scope,
  errorCallback,
): [Function | null, string | null] => {
  // Handle transpile error
  try {
    const element = transpile(code, scope);
    return [withErrorBoundary(element, errorCallback), null];
  } catch (error) {
    return [null, error.toString()];
  }
};
