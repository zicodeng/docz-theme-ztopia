import React, { useState, useEffect, FunctionComponent, Fragment } from 'react';
import Frame from 'react-frame-component';
import classNames from 'classnames/bind';

import Loader from '../Loader';

import styles from './IFrame.css';

const cx = classNames.bind(styles);

const INITIAL_CONTENT = `
<!DOCTYPE html>
<html>
  <head></head>
  <body style="margin: 0; overflow: hidden">
    <div id="root"></div>
  </body>
</html>
`;

const INITIAL_MIN_HEIGHT = 170;

interface Props {
  height: number;
}

const IFrame: FunctionComponent<Props> = ({ height, children }) => {
  let timerId: NodeJS.Timeout | null = null;

  const ref = React.createRef<{ node: HTMLIFrameElement }>();

  const [initialHeight, setInitialHeight] = useState(INITIAL_MIN_HEIGHT);
  const [styleLinks, setStyleLinks] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    injectStyleLinks();
    return () => {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
    };
  }, []);

  const injectStyleLinks = () => {
    const styleLinks = [] as JSX.Element[];
    let key = 0;

    // Copy stylesheet <link> elements
    const links = Array.from(document.getElementsByTagName('link'));
    links.forEach(({ rel, href, type }) => {
      if (rel === 'stylesheet') {
        styleLinks.push(
          <link key={`link-${key}`} rel={rel} type={type} href={href} />,
        );
        key++;
      }
    });

    setStyleLinks(styleLinks);
  };

  const calcInitialHeight = () => {
    timerId = setTimeout(() => {
      if (
        ref.current &&
        ref.current.node.contentDocument &&
        ref.current.node.contentDocument.body.scrollHeight !== 0
      ) {
        setInitialHeight(ref.current.node.contentDocument.body.scrollHeight);
      }
    }, 1000);
  };

  return (
    <Fragment>
      {initialHeight === INITIAL_MIN_HEIGHT && (
        <Loader className={cx('loader')} />
      )}
      <Frame
        style={{
          height: height ? height : initialHeight,
          width: '100%',
          border: 0,
          visibility:
            initialHeight === INITIAL_MIN_HEIGHT ? 'hidden' : 'visible',
        }}
        ref={ref}
        head={styleLinks}
        mountTarget="#root"
        initialContent={INITIAL_CONTENT}
        contentDidMount={calcInitialHeight()}
      >
        {children}
      </Frame>
    </Fragment>
  );
};

export default IFrame;
