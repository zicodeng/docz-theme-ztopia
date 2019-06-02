import React from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import { useTheme } from '../../theme';

import Menu from './components/Menu';
import styles from './Sidebar.css';

const cx = classNames.bind(styles);

const Sidebar = () => {
  const {
    themeConfig: { colors },
  } = useConfig();
  const { theme } = useTheme();
  return (
    <aside
      className={cx('container')}
      style={{
        backgroundColor:
          theme === 'light' ? colors.whiteDark : colors.blackLight,
      }}
    >
      <Menu />
    </aside>
  );
};

export default Sidebar;
