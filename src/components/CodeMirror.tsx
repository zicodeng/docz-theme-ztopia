import React, { useCallback, useState, FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { get } from 'lodash-es';
import { Controlled as BaseCodeMirror } from 'react-codemirror2';

// CodeMirror base style
import 'codemirror/lib/codemirror.css';
// CodeMirror themes
import 'codemirror/theme/monokai.css';
// CodeMirror Modes
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
// CodeMirror addons
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/fold/xml-fold';

import styles from './CodeMirror.css';

const cx = classNames.bind(styles);

const getChildren = children =>
  children && typeof children !== 'string'
    ? get(children, 'props.children')
    : children;

const getLanguage = children => {
  const defaultLanguage = 'jsx';

  if (typeof children === 'string') {
    return defaultLanguage;
  }

  // className will look like this `language-jsx`
  const className = get(children, 'props.props.className') || defaultLanguage;
  const language = className.replace('language-', '');

  if (language === 'js' || language === 'javascript') {
    return 'jsx';
  }
  if (language === 'ts' || language === 'tsx' || language === 'typescript') {
    return 'text/typescript';
  }

  return language;
};

interface Props {
  className?: string;
  language?: string;
}

const CodeMirror: FunctionComponent<Props> = ({
  className,
  language = 'jsx',
  children,
}) => {
  const initialValue = getChildren(children);
  const mode = language || getLanguage(children);

  const [value, setValue] = useState(initialValue);

  const removeLastLine = editor => {
    if (!editor) {
      return;
    }
    const lastLine = editor.lastLine();
    editor.doc.replaceRange('', { line: lastLine - 1 }, { line: lastLine });
  };
  const handleBeforeChange = useCallback(
    (_editor, _data, value) => {
      setValue(value);
    },
    [value],
  );

  return (
    <BaseCodeMirror
      value={value}
      className={cx(className, 'container')}
      editorDidMount={editor => {
        removeLastLine(editor);
      }}
      onBeforeChange={handleBeforeChange}
      options={{
        tabSize: 2,
        lineNumbers: true,
        lineWrapping: false,
        autoCloseTags: true,
        matchBrackets: true,
        readOnly: true,
        theme: 'monokai',
        mode,
      }}
    />
  );
};

export default CodeMirror;
