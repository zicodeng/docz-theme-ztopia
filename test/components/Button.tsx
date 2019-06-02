import * as React from 'react';

interface Props {
  text: string;
}

const Button: React.FunctionComponent<Props> = React.memo(({ text }: Props) => (
  <div>{text}</div>
));

export default Button;
