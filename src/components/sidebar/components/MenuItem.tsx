import React, { FunctionComponent, memo, useState } from 'react';
import classNames from 'classnames/bind';
import { Link, useConfig } from 'docz';

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
  const isActive = isHovered || window.location.pathname === route;
  return (
    <li>
      <Link
        to={route}
        className={cx('subitem')}
        style={{
          borderRight: `5px solid ${
            isActive ? colors.primary : colors.whiteDark
          }`,
          color: isActive ? colors.primary : 'inherit',
          backgroundColor: isActive ? colors.primaryLight : 'inherit',
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
