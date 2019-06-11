import React, { FunctionComponent, memo } from 'react';
import prettier from 'prettier/standalone';
import parserTS from 'prettier/parser-typescript';
import { useConfig } from 'docz';

import { parseType } from './utils';
import Tooltip from './Tooltip';
import { PropType } from './interfaces';

interface Props {
  type: PropType;
}

const convertTypeToCode = (type: PropType) => {
  const code = `interface Shape ${parseType(type)}`;
  const formattedCode = prettier.format(code, {
    parser: 'typescript',
    plugins: [parserTS],
  });
  return formattedCode;
};

const Type: FunctionComponent<Props> = memo(({ type }) => {
  const {
    themeConfig: { colors },
  } = useConfig();

  if (!type) {
    return <span style={{ color: colors.error }}>Undefined</span>;
  }
  if (type.name === 'shape') {
    return <Tooltip label="Shape" value={convertTypeToCode(type)} />;
  }
  if (type.name === 'arrayOf' && type.value && type.value.name === 'shape') {
    return <Tooltip label="shape[]" value={convertTypeToCode(type.value)} />;
  }
  return <React.Fragment>{parseType(type)}</React.Fragment>;
});

export default Type;
