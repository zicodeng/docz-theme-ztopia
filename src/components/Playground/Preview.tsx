import React, {
  useState,
  useCallback,
  FunctionComponent,
  ReactElement,
  memo,
} from 'react';
import { Resizable, ResizeDirection } from 're-resizable';
import { useConfig } from 'docz';
import classNames from 'classnames/bind';

import {
  HandleRight,
  HandleBottom,
  HANDLE_RIGHT_SIZE,
  HANDLE_BOTTOM_SIZE,
} from './Handles';
import Action, { Props as IAction } from './Action';
import ErrorBoundary from './ErrorBoundary';
import ErrorView from './ErrorView';
import IFrame from './IFrame';
import styles from './Preview.css';

const cx = classNames.bind(styles);

const CONTAINER_PADDING = 30;

interface Props {
  element: ReactElement | null;
  transpileError: string;
  actions: IAction[];
}

const Preview: FunctionComponent<Props> = memo(
  ({ element, transpileError, actions }) => {
    const [width, setWidth] = useState('100%');
    const [height, setHeight] = useState('auto');
    const {
      themeConfig: { colors },
    } = useConfig();

    const handleResize = useCallback(
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

    const iFrameHeight =
      height === 'auto'
        ? 0
        : parseInt(height) - HANDLE_BOTTOM_SIZE - CONTAINER_PADDING * 2;

    return (
      <Resizable
        size={{
          width,
          height,
        }}
        minWidth={200}
        minHeight={200}
        maxWidth="100%"
        style={{
          margin: '0 auto',
          borderLeft: `1px solid ${colors.grey}`,
          borderTop: `1px solid ${colors.grey}`,
          paddingBottom: CONTAINER_PADDING,
          paddingRight: HANDLE_RIGHT_SIZE,
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
        onResize={handleResize}
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
            width: `calc(100% - ${HANDLE_RIGHT_SIZE}px)`,
            height: 30,
            bottom: 0,
          },
        }}
      >
        <div className={cx('container')}>
          {transpileError && <ErrorView>{transpileError}</ErrorView>}
          <ErrorBoundary>
            {/* <IFrame height={iFrameHeight}>{element}</IFrame> */}
            {element}
          </ErrorBoundary>
        </div>
        <div className={cx('action-bar')}>
          {actions.map(({ isActive, icon, onClick }, i) => (
            <Action key={i} isActive={isActive} icon={icon} onClick={onClick} />
          ))}
        </div>
      </Resizable>
    );
  },
);

export default Preview;
