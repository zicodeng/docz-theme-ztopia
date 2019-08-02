import React, { FC, memo, Children, cloneElement, isValidElement } from 'react';

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
    };
    if (center) {
      style.alignItems = 'center';
      style.justifyContent = 'center';
    }
    return (
      <section style={style}>
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
