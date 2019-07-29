import React, { FunctionComponent, useState, useCallback, memo } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlaygroundProps } from 'docz';
import { LiveProvider } from 'react-live';

import CodeMirror from '../CodeMirror';

import Preview from './Preview';
import styles from './Playground.css';

const cx = classNames.bind(styles);

const Playground: FunctionComponent<PlaygroundProps> = memo(
  ({ code, scope }) => {
    const [value, setValue] = useState(code);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [isIFrameMode, setIsIFrameMode] = useState(false);

    const handleChange = useCallback((value: string) => {
      setValue(value);
    }, []);

    return (
      <section className={cx('container')}>
        <LiveProvider code={value} scope={scope}>
          <Preview
            isIFrameMode={isIFrameMode}
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
        </LiveProvider>
      </section>
    );
  },
);

export default Playground;
