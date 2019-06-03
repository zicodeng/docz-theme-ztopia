import * as React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.css';

const cx = classNames.bind(styles);

interface Props {
  theme: 'light' | 'dark';
}

const Button: React.FunctionComponent<Props> = React.memo(
  ({ theme = 'light', ...restProps }: Props) => (
    <button className={cx('btn', `btn--${theme}`)} {...restProps} />
  ),
);

export default Button;
