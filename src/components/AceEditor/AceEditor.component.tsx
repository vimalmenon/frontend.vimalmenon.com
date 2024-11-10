'use client';

import Ace from 'react-ace';

import { IAceEditor } from './AceEditor';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';

import 'ace-builds/src-noconflict/ext-language_tools';

export const AceEditor: React.FC<IAceEditor> = ({ readOnly = true, value }) => {
  return (
    <Ace
      mode="java"
      theme="github"
      name="UNIQUE_ID_OF_DIV"
      value={value}
      // editorProps={{ $blockScrolling: true }}
      width="800px"
      readOnly={readOnly}
    />
  );
};
