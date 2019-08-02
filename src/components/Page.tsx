import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { PageProps, useConfig } from 'docz';

import { useTheme } from '../helpers';

import Header from './Header';
import Sidebar from './Sidebar';
import styles from './Page.css';

const cx = classNames.bind(styles);

const Page: FunctionComponent<PageProps> = ({ children }) => {
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

export default Page;
