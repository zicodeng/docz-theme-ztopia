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

const INITIAL_MIN_HEIGHT = 105;

interface Props {
  height: number;
}

const IFrame: FunctionComponent<Props> = ({ height, children }) => {
  let timerId: NodeJS.Timeout | null = null;

  const ref = React.createRef<{ node: HTMLIFrameElement }>();

  const [initialHeight, setInitialHeight] = useState(INITIAL_MIN_HEIGHT);
  const [styleLinks, setStyleLinks] = useState<JSX.Element[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
        const initialHeight =
          ref.current.node.contentDocument.body.scrollHeight;
        if (initialHeight > INITIAL_MIN_HEIGHT) {
          setInitialHeight(initialHeight);
        }
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <Fragment>
      {isLoading && <Loader className={cx('loader')} />}
      <Frame
        style={{
          height: height ? height : initialHeight,
          width: '100%',
          border: 0,
          visibility: isLoading ? 'hidden' : 'visible',
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
