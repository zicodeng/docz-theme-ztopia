import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import styles from './Paragraph.css';

const cx = classNames.bind(styles);

const Paragraph: FunctionComponent = props => {
  const {
    themeConfig: { fonts },
  } = useConfig();
  return (
    <p
      {...props}
      className={cx('para')}
      style={{
        fontFamily: fonts.body,
      }}
    />
  );
};

export default Paragraph;
