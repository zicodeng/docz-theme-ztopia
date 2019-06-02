import React from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import Menu from './components/Menu';
import styles from './Sidebar.css';

const cx = classNames.bind(styles);

const Sidebar = () => {
  const {
    themeConfig: { colors },
  } = useConfig();
  return (
    <aside
      className={cx('container')}
      style={{
        backgroundColor: colors.whiteDark,
      }}
    >
      <Menu />
    </aside>
  );
};

export default Sidebar;
