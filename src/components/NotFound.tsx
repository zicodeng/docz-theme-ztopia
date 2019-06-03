import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import imgKitty from 'public/images/kitty.gif';

import App from './App';
import styles from './NotFound.css';

const cx = classNames.bind(styles);

const NotFound: FunctionComponent = () => {
  const {
    themeConfig: { fonts },
  } = useConfig();
  return (
    <App>
      <div className={cx('container')}>
        <div
          style={{ backgroundImage: `url('${imgKitty}')` }}
          className={cx('image')}
        />
        <h2
          style={{
            fontFamily: fonts.title,
          }}
        >
          What are you looking for??? kitty
        </h2>
      </div>
    </App>
  );
};

export default NotFound;
