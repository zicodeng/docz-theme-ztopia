import React, {
  FunctionComponent,
  useState,
  useEffect,
  useCallback,
  ReactElement,
  memo,
} from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlaygroundProps } from 'docz';

import CodeMirror from '../CodeMirror';

import Preview from './Preview';
import { transpile } from './utils';
import styles from './Playground.css';

const cx = classNames.bind(styles);

const Playground: FunctionComponent<PlaygroundProps> = memo(
  ({ code, scope }) => {
    const [value, setValue] = useState(code);
    const [element, setElement] = useState<ReactElement | null>(null);
    const [transpileError, setTranspileError] = useState('');
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [isIFrameMode, setIsIFrameMode] = useState(false);

    const renderElement = code => {
      try {
        const element = transpile(code, scope);
        setElement(element);
        setTranspileError('');
      } catch (error) {
        setTranspileError(error.toString());
      }
    };

    // Initial element rendering
    useEffect(() => {
      renderElement(code);
    }, [code, scope]);

    const handleChange = useCallback((value: string) => {
      setValue(value);
      renderElement(value);
    }, []);

    return (
      <section className={cx('container')}>
        <Preview
          isIFrameMode={isIFrameMode}
          element={element}
          transpileError={transpileError}
          actions={[
            {
              isActive: isIFrameMode,
              icon: <FontAwesomeIcon icon="info" />,
              onClick: () => {
                setIsIFrameMode(!isIFrameMode);
              },
            },
            {
              isActive: isEditorOpen,
              icon: <FontAwesomeIcon icon="code" />,
              onClick: () => {
                setIsEditorOpen(!isEditorOpen);
              },
            },
          ]}
        />
        {isEditorOpen && (
          <CodeMirror readOnly={false} code={value} onChange={handleChange} />
        )}
      </section>
    );
  },
);

export default Playground;
