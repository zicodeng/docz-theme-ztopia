import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import styles from './Loader.css';

const cx = classNames.bind(styles);

interface Props {
  className?: string;
}

const Loader: FunctionComponent<Props> = ({ className }) => {
  const {
    themeConfig: { colors },
  } = useConfig();
  const bars = Array.from({ length: 5 }).map((_, i) => (
    <div
      key={i}
      style={{
        background: `linear-gradient(to top, ${colors.primary}, ${colors.secondary})`,
      }}
    />
  ));
  return (
    <div className={cx(className, 'outer-container')}>
      <div className={cx('inner-container')}>{bars}</div>
    </div>
  );
};

export default Loader;
