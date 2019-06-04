import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { MenuItem as IMenuItem } from 'docz';

import MenuItem from './MenuItem';
import styles from './Menu.css';

const cx = classNames.bind(styles);

interface Submenu {
  title: string;
  menu: IMenuItem[];
}

const Submenu: FunctionComponent<Submenu> = ({ title, menu }) => {
  return (
    <li>
      <span className={cx('title')}>{title}</span>
      <ul className={cx('container')}>
        {menu.map(({ id, name, route }) => (
          <MenuItem key={id} route={route} name={name} />
        ))}
      </ul>
    </li>
  );
};

export default Submenu;
