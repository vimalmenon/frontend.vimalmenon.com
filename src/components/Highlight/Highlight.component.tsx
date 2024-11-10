'use client';

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash.js';
import rust from 'highlight.js/lib/languages/rust.js';
import shell from 'highlight.js/lib/languages/shell.js';
import Paper from '@mui/material/Paper';
import { IHighlight } from './Highlight';

import 'highlight.js/styles/default.css'; // Import the default Highlight.js style

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('rust', rust);
hljs.registerLanguage('shell', shell);

export const Highlight: React.FC<IHighlight> = ({ code, language }) => {
  const highlightedCode = hljs.highlight(code, { language: language }).value;
  return (
    <Paper elevation={3} sx={{ padding: '2px 10px', background: '#1f2328' }}>
      <pre>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        ></code>
      </pre>
    </Paper>
  );
};
