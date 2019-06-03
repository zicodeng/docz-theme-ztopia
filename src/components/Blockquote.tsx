import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import { useTheme } from '../theme';

import styles from './Blockquote.css';

const cx = classNames.bind(styles);

const Blockquote: FunctionComponent = props => {
  const {
    themeConfig: { colors },
  } = useConfig();
  const { theme } = useTheme();
  return (
    <blockquote
      {...props}
      className={cx('quote')}
      style={{
        borderLeft: `5px solid ${colors.primary}`,
        backgroundColor:
          theme === 'light' ? colors.whiteDark : colors.blackLight,
      }}
    />
  );
};

export default Blockquote;
