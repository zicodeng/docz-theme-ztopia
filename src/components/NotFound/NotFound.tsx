import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import Page from '../Page';

import styles from './NotFound.css';
import imgNotFound from './not-found.gif';

const cx = classNames.bind(styles);

const NotFound: FunctionComponent = () => {
  const {
    themeConfig: { fonts },
  } = useConfig();
  return (
    <Page>
      <div className={cx('container')}>
        <div
          style={{ backgroundImage: `url('${imgNotFound}')` }}
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
    </Page>
  );
};

export default NotFound;
