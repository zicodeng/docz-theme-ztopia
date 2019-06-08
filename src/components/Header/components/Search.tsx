import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { useMenus, useConfig, Link } from 'docz';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Search.css';

const cx = classNames.bind(styles);

const highlightQuery = (query: string, text: string, color: string): string => {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx < 0) {
    if (query.length == 1) {
      return text;
    }
    // Try using the first query character to search and highlight
    const firstChar = query[0];
    return highlightQuery(firstChar, text, color);
  }
  return idx < 0
    ? text
    : text.substring(0, idx) +
        `<span style="color: ${color}">${text.substring(
          idx,
          idx + query.length,
        )}</span>` +
        text.substring(idx + query.length);
};

const Search = () => {
  const [query, setQuery] = useState('');
  const menus = useMenus({ query });
  const {
    themeConfig: { colors, fonts },
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
                    __html: highlightQuery(query, menu.name, colors.highlight),
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
                  __html: highlightQuery(query, menu.name, colors.highlight),
                }}
              />
              <ul className={cx('submenu')}>
                {submenu.map(menuItem => (
                  <li key={menuItem.id}>
                    <Link
                      to={menuItem.route}
                      className={cx('item', 'item--sub')}
                      dangerouslySetInnerHTML={{
                        __html: highlightQuery(
                          query,
                          menuItem.name,
                          colors.highlight,
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
    <div
      className={cx('container')}
      style={{
        fontFamily: fonts.body,
      }}
    >
      <FontAwesomeIcon
        icon="search"
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
