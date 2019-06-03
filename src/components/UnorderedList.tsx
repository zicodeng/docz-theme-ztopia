import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import styles from './List.css';

const cx = classNames.bind(styles);

const UnorderedList: FunctionComponent = props => {
  const {
    themeConfig: { fonts },
  } = useConfig();
  return (
    <ul
      {...props}
      className={cx('list')}
      style={{
        fontFamily: fonts.body,
      }}
    />
  );
};

export default UnorderedList;
