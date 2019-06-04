import React, { FunctionComponent, memo, useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useConfig } from 'docz';

import { useTheme } from '../../../theme';

import styles from './Menu.css';

const cx = classNames.bind(styles);

interface Props {
  route?: string;
  name: string;
}

const MenuItem: FunctionComponent<Props> = memo(({ route, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    themeConfig: { colors },
  } = useConfig();
  const { theme } = useTheme();

  const isActive = isHovered || window.location.pathname === route;

  return (
    <li>
      <Link
        to={route}
        className={cx('subitem')}
        style={{
          borderRight: `5px solid ${
            isActive
              ? theme === 'light'
                ? colors.primary
                : colors.primaryLight
              : theme === 'light'
              ? colors.whiteDark
              : colors.blackLight
          }`,
          color: isActive
            ? theme === 'light'
              ? colors.primary
              : colors.primaryLight
            : 'inherit',
          backgroundColor: isActive
            ? theme === 'light'
              ? colors.primaryLight
              : colors.primary
            : 'inherit',
          transition: isActive ? 'all 0.3s ease' : null,
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {name}
      </Link>
    </li>
  );
});

export default MenuItem;
