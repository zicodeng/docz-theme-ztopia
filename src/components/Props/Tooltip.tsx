import React, { FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import { useConfig } from 'docz';

import CodeMirror from '../CodeMirror';

import styles from './Tooltip.css';

const cx = classNames.bind(styles);

interface Props {
  label: string;
  value: string;
}

const Tooltip: FunctionComponent<Props> = ({ label, value }) => {
  const {
    themeConfig: { colors },
  } = useConfig();
  return (
    <div className={cx('container')}>
      <span className={cx('label')} style={{ color: colors.secondary }}>
        {label}
      </span>
      <CodeMirror className={cx('value')} language="text/typescript">
        {value}
      </CodeMirror>
    </div>
  );
};

export default Tooltip;
