import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useMenus, useConfig, Link } from 'docz';

import { highlightQuery } from './utils';
import styles from './Search.css';

const cx = classNames.bind(styles);

const Search = () => {
  const [query, setQuery] = useState('');
  const menus = useMenus({ query });
  const {
    themeConfig: { colors },
  } = useConfig();

  const renderResult = () => {
    if (!query || !menus) {
      return null;
    }
    const result = menus.length
      ? menus.map(menu => {
          const submenu = menu.menu;
          if (!submenu) {
            return (
              <li key={menu.id}>
                <Link
                  to={menu.route}
                  className={cx('item')}
                  dangerouslySetInnerHTML={{
                    __html: highlightQuery(query, menu.name, colors.danger),
                  }}
                />
              </li>
            );
          }
          return (
            <li key={menu.id}>
              <span
                className={cx('item', 'item--title')}
                dangerouslySetInnerHTML={{
                  __html: highlightQuery(query, menu.name, colors.danger),
                }}
              />
              <ul>
                {submenu.map(menuItem => (
                  <li key={menuItem.id}>
                    <Link
                      to={menuItem.route}
                      className={cx('item', 'item--sub')}
                      dangerouslySetInnerHTML={{
                        __html: highlightQuery(
                          query,
                          menuItem.name,
                          colors.danger,
                        ),
                      }}
                    />
                  </li>
                ))}
              </ul>
            </li>
          );
        })
      : 'No docs found :(';

    return (
      <ul
        className={cx('result')}
        style={{
          background: `linear-gradient(to right, ${colors.primary}, ${
            colors.secondary
          })`,
          color: colors.whiteLight,
        }}
      >
        {result}
      </ul>
    );
  };

  return (
    <div className={cx('container')}>
      <i
        className="fas fa-search"
        style={{
          color: colors.primary,
        }}
      />
      <input
        type="text"
        placeholder="Search docs..."
        className={cx('input')}
        value={query}
        onChange={e => {
          setQuery(e.currentTarget.value);
        }}
      />
      {renderResult()}
    </div>
  );
};

export default Search;
