import React, {
  FunctionComponent,
  useState,
  useEffect,
  useCallback,
  ReactElement,
  memo,
} from 'react';
import classNames from 'classnames/bind';
import { PlaygroundProps } from 'docz';

import CodeMirror from '../CodeMirror';

import ErrorBoundary from './ErrorBoundary';
import Preview from './Preview';
import { generateElement } from './utils';
import styles from './Playground.css';

const cx = classNames.bind(styles);

const Playground: FunctionComponent<PlaygroundProps> = memo(
  ({ code, scope }) => {
    const [value, setValue] = useState(code);
    const [error, setError] = useState<ReactElement | null>(null);
    const [element, setElement] = useState<FunctionComponent | null>(null);

    // Initial element rendering
    useEffect(() => {
      renderElement(generateElement(code, scope, handleError));
    }, [code, scope]);

    const renderElement = ([element, error]) => {
      if (error) {
        console.log(error);
        setError(<ErrorBoundary error={error} />);
      } else {
        setElement(element);
        setError(null);
      }
    };

    const handleChange = useCallback((value: string) => {
      setValue(value);
      renderElement(generateElement(value, scope, handleError));
    }, []);

    const handleError = error => {
      console.log(error);
      setError(<ErrorBoundary error={error} />);
    };

    return (
      <section className={cx('container')}>
        <Preview element={element} error={error} />
        <CodeMirror readOnly={false} code={value} onChange={handleChange} />
      </section>
    );
  },
);

export default Playground;
