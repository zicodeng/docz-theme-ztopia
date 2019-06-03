import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import styles from './Table.css';

const cx = classNames.bind(styles);

const Table: FunctionComponent = props => {
  const {
    themeConfig: { fonts },
  } = useConfig();
  return (
    <table
      {...props}
      className={cx('table')}
      style={{
        fontFamily: fonts.body,
      }}
    />
  );
};

export default Table;
