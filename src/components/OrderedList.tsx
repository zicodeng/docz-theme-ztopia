import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import styles from './List.css';

const cx = classNames.bind(styles);

const OrderedList: FunctionComponent = props => {
  const {
    themeConfig: { fonts },
  } = useConfig();
  return (
    <ol
      {...props}
      className={cx('list')}
      style={{
        fontFamily: fonts.body,
      }}
    />
  );
};

export default OrderedList;
