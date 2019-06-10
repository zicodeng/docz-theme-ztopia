import React, { ReactElement, FunctionComponent, useState } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import styles from './Action.css';

const cx = classNames.bind(styles);

export interface Props {
  isActive: boolean;
  icon: ReactElement;
  onClick: () => void;
}

const Action: FunctionComponent<Props> = ({ isActive, icon, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    themeConfig: { colors },
  } = useConfig();
  return (
    <button
      className={cx('button')}
      style={{
        color: isActive
          ? colors.primary
          : isHovered
          ? colors.primary
          : colors.grey,
        borderLeft: `1px solid ${colors.grey}`,
      }}
      onClick={onClick}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {icon}
    </button>
  );
};

export default Action;
