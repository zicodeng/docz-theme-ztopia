import { PropValue, PropType } from './interfaces';

const parseShape = (value: PropValue): string => {
  let parsed = '{';
  Object.entries(value).forEach(([key, type]) => {
    const { required, name, value } = type;
    // Use TypeScript way to express un/required prop
    // For example:
    // If required,     name: string
    // If not required, name?: string,
    parsed += `${key}${required ? '' : '?'}: ${
      value ? parseType(type) : name
    };`;
  });
  parsed += '}';
  return parsed;
};

export const parseType = (type: PropType): string => {
  const { name, value } = type;
  if (!value) {
    return name;
  }
  if (name === 'instanceOf') {
    return value;
  }
  if (name === 'enum') {
    return value.map(({ value }) => value).join(' | ');
  }
  if (name === 'union') {
    return value.map(prop => parseType(prop)).join(' | ');
  }
  if (name === 'arrayOf') {
    return `${value ? parseType(value) : value.name}[]`;
  }
  if (name === 'objectOf') {
    return `{key: ${value.name}}`;
  }
  if (name === 'shape') {
    return parseShape(value);
  }
  return '';
};
