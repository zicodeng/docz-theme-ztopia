import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Button.css';

const cx = classNames.bind(styles);

const Button = memo(({ responsive, theme, style, children, ...restProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={cx('btn', {
        [`btn--responsive`]: responsive,
      })}
      style={{
        ...style,
        color:
          theme === 'light'
            ? isHovered
              ? 'black'
              : 'white'
            : isHovered
            ? 'white'
            : 'black',
        backgroundColor:
          theme === 'light'
            ? isHovered
              ? 'white'
              : 'black'
            : isHovered
            ? 'black'
            : 'white',
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      {...restProps}
    >{`${
      responsive ? 'RESPONSIVE' : ''
    } ${theme.toUpperCase()} ${children}`}</button>
  );
});

Button.propTypes = {
  /** If true, button border color will change based on viewport size */
  responsive: PropTypes.bool,
  theme: PropTypes.oneOf(['light', 'dark']),
  style: PropTypes.object,
};

Button.defaultProps = {
  responsive: false,
  theme: 'light',
  style: {},
};

export default Button;
