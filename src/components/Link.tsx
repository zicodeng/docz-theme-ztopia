import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import styles from './Link.css';

const cx = classNames.bind(styles);

const Link: FunctionComponent = props => {
  const [isHovered, setIsHovered] = useState();
  const {
    themeConfig: { colors },
  } = useConfig();
  return (
    <a
      {...props}
      className={cx('link')}
      style={{
        color: isHovered ? colors.primaryDark : colors.primary,
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    />
  );
};

export default Link;
