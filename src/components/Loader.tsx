import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import App from './App';
import styles from './Loader.css';

const cx = classNames.bind(styles);

const Loader: FunctionComponent = () => {
  const {
    themeConfig: { colors },
  } = useConfig();
  const bars = Array.from({ length: 5 }).map((_, i) => (
    <div
      key={i}
      style={{
        background: `linear-gradient(to bottom, ${colors.primary}, ${
          colors.secondary
        })`,
      }}
    />
  ));
  return (
    <App>
      <div className={cx('outer-container')}>
        <div className={cx('inner-container')}>{bars}</div>
      </div>
    </App>
  );
};

export default Loader;
