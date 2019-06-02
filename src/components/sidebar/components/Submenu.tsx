import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { MenuItem as IMenuItem } from 'docz';

import MenuItem from './MenuItem';
import styles from './Menu.css';

const cx = classNames.bind(styles);

interface NestedMenu {
  title: string;
  menu: IMenuItem[];
}

const NestedMenu: FunctionComponent<NestedMenu> = ({ title, menu }) => {
  return (
    <li className={cx('container')}>
      <span className={cx('title')}>{title}</span>
      <ul>
        {menu.map(({ id, name, route }) => (
          <MenuItem key={id} route={route} name={name} />
        ))}
      </ul>
    </li>
  );
};

export default NestedMenu;
