import React, {
  FunctionComponent,
  useState,
  useCallback,
  memo,
  useMemo,
} from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PlaygroundProps, useConfig } from 'docz';
import { LiveProvider } from 'react-live';

import CodeMirror from '../CodeMirror';

import Preview from './Preview';
import CodeSandboxLogo from './CodeSandboxLogo';
import styles from './Playground.css';

const cx = classNames.bind(styles);

const Playground: FunctionComponent<PlaygroundProps> = memo(
  ({ code, scope, codesandbox }) => {
    const [value, setValue] = useState(code);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [isIFrameMode, setIsIFrameMode] = useState(false);
    const { codeSandbox: isCodeSandboxEnabled, native } = useConfig();

    // Adjacent JSX elements must be wrapped in an enclosing tag
    const transformCode = useCallback(
      (code: string) => {
        if (code.startsWith('()') || code.startsWith('class')) {
          return code;
        }
        return `<>${code}</>`;
      },
      [code],
    );

    const handleChange = useCallback((value: string) => {
      setValue(value);
    }, []);

    const codeSandboxURL = useMemo(() => {
      const url = 'https://codesandbox.io/api/v1/sandboxes/define';
      return `${url}?parameters=${codesandbox}${
        native ? `&editorsize=75` : ''
      }`;
    }, [codesandbox, native]);

    const actions = [
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
    ];
    if (isCodeSandboxEnabled) {
      actions.unshift({
        isActive: false,
        icon: <CodeSandboxLogo />,
        onClick: () => {
          window.open(codeSandboxURL, '_blank');
        },
      });
    }

    return (
      <section className={cx('container')}>
        <LiveProvider code={value} scope={scope} transformCode={transformCode}>
          <Preview isIFrameMode={isIFrameMode} actions={actions} />
          {isEditorOpen && (
            <CodeMirror readOnly={false} code={value} onChange={handleChange} />
          )}
        </LiveProvider>
      </section>
    );
  },
);

export default Playground;
