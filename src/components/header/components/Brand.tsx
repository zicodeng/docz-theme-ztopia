import React from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import styles from './Brand.css';

const cx = classNames.bind(styles);

const Brand = () => {
  const {
    title,
    themeConfig: { logo, colors },
  } = useConfig();

  return (
    <div
      className={cx('container')}
      style={{
        background: `linear-gradient(to left, ${colors.primary}, ${
          colors.secondary
        })`,
        color: colors.whiteLight,
      }}
    >
      <img
        src={logo.src}
        className={cx('logo')}
        style={{ width: logo.width }}
      />
      <h3>{title}</h3>
    </div>
  );
};

export default Brand;
