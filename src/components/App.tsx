import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { PageProps, useConfig } from 'docz';

import { useTheme } from '../theme';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import styles from './App.css';

const cx = classNames.bind(styles);

const App: FunctionComponent<PageProps> = ({ children }) => {
  const {
    themeConfig: { colors },
  } = useConfig();
  const { theme } = useTheme();
  return (
    <div
      className={cx('container')}
      style={{
        color: theme === 'light' ? colors.blackDark : colors.whiteLight,
      }}
    >
      <Header />
      <Sidebar />
      <main
        className={cx('content')}
        style={{
          backgroundColor: theme === 'light' ? colors.white : colors.black,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default App;
