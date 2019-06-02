import React, { FunctionComponent } from 'react';
import className from 'classnames/bind';
import { useConfig } from 'docz';

import Brand from './components/Brand';
import Search from './components/Search';
import styles from './Header.css';

const cx = className.bind(styles);

const Header: FunctionComponent = () => {
  const {
    themeConfig: { colors },
  } = useConfig();
  return (
    <header
      className={cx('container')}
      style={{
        backgroundColor: colors.whiteDark,
      }}
    >
      <Brand />
      <Search />
    </header>
  );
};

export default Header;
