import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import { useTheme } from '../theme';
import styles from './InlineCode.css';

const cx = classNames.bind(styles);

const InlineCode: FunctionComponent = props => {
  const {
    themeConfig: { colors },
  } = useConfig();
  const { theme } = useTheme();
  return (
    <code
      {...props}
      className={cx('code')}
      style={{
        backgroundColor:
          theme === 'light' ? colors.whiteDark : colors.blackLight,
      }}
    />
  );
};

export default InlineCode;
