import React, {
  useState,
  useCallback,
  FunctionComponent,
  ReactElement,
  memo,
  useEffect,
} from 'react';
import { Resizable, ResizeDirection } from 're-resizable';
import { useConfig } from 'docz';
import classNames from 'classnames/bind';
import Frame from 'react-frame-component';

import { HandleRight, HandleBottom } from './Handles';
import Action, { Props as IAction } from './Action';
import ErrorBoundary from './ErrorBoundary';
import ErrorView from './ErrorView';
import styles from './Preview.css';

const cx = classNames.bind(styles);

interface Props {
  element: ReactElement | null;
  transpileError: string;
  actions: IAction[];
}

const Preview: FunctionComponent<Props> = memo(
  ({ element, transpileError, actions }) => {
    const [width, setWidth] = useState('100%');
    const [height, setHeight] = useState('auto');
    const [hasResized, setHasResized] = useState(false);
    const [styleLinks, setStyleLinks] = useState<JSX.Element[] | null>(null);
    const {
      themeConfig: { colors },
    } = useConfig();

    // Because <iframe> serves content in an isolated browsing context (document environment),
    // Styles in parent browsing context will not be available to <iframe> content,
    // we need to manually copy styles from parent browsing context to <iframe> browsing context
    useEffect(() => {
      const styleLinks = [] as JSX.Element[];
      let key = 0;

      // Copy <link> elements
      const links = Array.from(document.getElementsByTagName('link'));
      links.forEach(({ rel, href, type }) => {
        if (rel === 'stylesheet') {
          styleLinks.push(
            <link key={`link-${key}`} rel={rel} type={type} href={href} />,
          );
          key++;
        }
      });

      styleLinks.push(
        <style key={key}>
          {`
            html {
              box-sizing: border-box;
            }

            *,
            *::before,
            *::after {
              box-sizing: inherit;
            }

            body {
              margin: 0;
              overflow: hidden;
            }
          `}
        </style>,
      );

      setStyleLinks(styleLinks);
    }, [element]);

    const handleResize = useCallback(
      (
        _e: MouseEvent | TouchEvent,
        _direction: ResizeDirection,
        ref: HTMLDivElement,
      ) => {
        if (hasResized) {
          return;
        }
        const height = ref.style.height;
        if (height !== 'auto') {
          setHasResized(true);
        }
      },
      [],
    );
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
        minWidth={200}
        minHeight={200}
        maxWidth="100%"
        style={{
          margin: '0 auto',
          borderLeft: `1px solid ${colors.grey}`,
          borderTop: `1px solid ${colors.grey}`,
          paddingBottom: '30px',
          paddingRight: '20px',
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
        <div className={cx('container')}>
          {transpileError && <ErrorView>{transpileError}</ErrorView>}
          <ErrorBoundary>
            <Frame className={cx('iframe')} head={styleLinks}>
              {element}
            </Frame>
          </ErrorBoundary>
        </div>
        <div className={cx('action-bar')}>
          {actions.map(({ icon, onClick }, i) => (
            <Action key={i} icon={icon} onClick={onClick} />
          ))}
        </div>
      </Resizable>
    );
  },
);

export default Preview;
