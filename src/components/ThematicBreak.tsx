import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import styles from './ThematicBreak.css';

const cx = classNames.bind(styles);

const ThematicBreak: FunctionComponent = props => {
  const {
    themeConfig: { colors },
  } = useConfig();
  return (
    <hr
      {...props}
      className={cx('hr')}
      style={{
        background: `linear-gradient(to right, ${colors.primary}, ${
          colors.secondary
        })`,
      }}
    />
  );
};

export default ThematicBreak;
