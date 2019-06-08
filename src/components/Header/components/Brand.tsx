import React from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import { H3 } from '../../Headings';

import styles from './Brand.css';

const cx = classNames.bind(styles);

const Brand = () => {
  const {
    title,
    version,
    themeConfig: { logo, colors, fonts },
  } = useConfig();
  return (
    <div
      className={cx('container')}
      style={{
        background: `linear-gradient(to left, ${colors.primary}, ${
          colors.secondary
        })`,
        color: colors.whiteLight,
        fontFamily: fonts.body,
      }}
    >
      <img
        src={logo.src}
        className={cx('logo')}
        style={{ width: logo.width }}
      />
      <div className={cx('title-container')}>
        <H3>{title}</H3>
        <span className={cx('version')}>v{version}</span>
      </div>
    </div>
  );
};

export default Brand;
