import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useMenus } from 'docz';

import Submenu from './Submenu';
import MenuItem from './MenuItem';
import styles from './Menu.css';

const cx = classNames.bind(styles);

const Menu: FunctionComponent = () => {
  const menus = useMenus();
  return (
    menus && (
      <ul className={cx('container')}>
        {menus.map(({ id, name, route, menu }) => {
          if (!menu) {
            return <MenuItem key={id} route={route} name={name} />;
          }
          return <Submenu key={id} title={name} menu={menu} />;
        })}
      </ul>
    )
  );
};

export default Menu;
