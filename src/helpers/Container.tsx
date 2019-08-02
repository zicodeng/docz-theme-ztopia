import React, { FC, memo, Children, cloneElement, isValidElement } from 'react';
import classNames from 'classnames/bind';

import styles from './Container.css';

const cx = classNames.bind(styles);

export interface ContainerProps {
  center?: boolean;
  gap?: number;
}

export const Container: FC<ContainerProps> = memo(
  ({ center, gap, children }) => {
    const style: {
      [key: string]: string;
    } = {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
    };
    if (center) {
      style.justifyContent = 'center';
    }
    return (
      <section style={style} className={cx('content')}>
        {Children.map(children, child =>
          isValidElement(child)
            ? cloneElement(child, {
                style: {
                  ...child.props.style,
                  margin: gap,
                },
              })
            : child,
        )}
      </section>
    );
  },
);

Container.defaultProps = {
  center: false,
  gap: 10,
};
