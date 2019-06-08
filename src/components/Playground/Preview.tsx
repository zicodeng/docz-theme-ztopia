import React, {
  useState,
  useCallback,
  FunctionComponent,
  ReactElement,
  memo,
} from 'react';
import { Resizable, ResizeDirection } from 're-resizable';
import { useConfig } from 'docz';

import { HandleRight, HandleBottom } from './Handles';

interface Props {
  element: FunctionComponent | null;
  error: ReactElement | null;
}

const Preview: FunctionComponent<Props> = memo(
  ({ element: Element, error }) => {
    const [width, setWidth] = useState('100%');
    const [height, setHeight] = useState('auto');
    const {
      themeConfig: { colors },
    } = useConfig();

    const handleResizeStop = useCallback(
      (
        _e: MouseEvent | TouchEvent,
        _direction: ResizeDirection,
        ref: HTMLDivElement,
      ) => {
        const width = ref.style.width;
        if (width) {
          setWidth(width);
        }
        const height = ref.style.height;
        if (height) {
          setHeight(height);
        }
      },
      [],
    );

    return (
      <Resizable
        size={{
          width,
          height,
        }}
        minHeight={200}
        minWidth={200}
        maxWidth="100%"
        style={{
          margin: '0 auto',
          borderLeft: `1px solid ${colors.grey}`,
          borderTop: `1px solid ${colors.grey}`,
          borderBottom: `1px solid ${colors.grey}`,
        }}
        enable={{
          top: false,
          right: true,
          bottom: true,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
        onResizeStop={handleResizeStop}
        handleComponent={{
          right: <HandleRight />,
          bottom: <HandleBottom />,
        }}
        handleStyles={{
          right: {
            width: 20,
            right: 0,
          },
          bottom: {
            width: 'calc(100% - 20px)',
            height: 30,
            bottom: 0,
          },
        }}
      >
        {error && error}
        {Element && <Element />}
      </Resizable>
    );
  },
);

export default Preview;
