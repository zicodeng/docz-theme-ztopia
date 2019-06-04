import React, { FunctionComponent } from 'react';
import { PropsComponentProps } from 'docz';

const Props: FunctionComponent<PropsComponentProps> = props => {
  console.log(props);
  const result = props.getPropType(props.props.theme);
  console.log(result);
  return <div>props</div>;
};

export default Props;
