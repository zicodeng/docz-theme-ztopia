import * as React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.css';

const cx = classNames.bind(styles);

interface Props {
  /** Light and dark mode */
  theme?: 'light' | 'dark';
}

const Button: React.FunctionComponent<Props> = ({
  theme = 'light',
  ...restProps
}) => <button className={cx('btn', `btn--${theme}`)} {...restProps} />;

Button.defaultProps = {
  theme: 'light',
};

export default Button;
