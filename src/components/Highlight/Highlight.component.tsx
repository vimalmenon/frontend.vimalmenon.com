'use client';

import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash.js';
import rust from 'highlight.js/lib/languages/rust.js';
import shell from 'highlight.js/lib/languages/shell.js';
import { IHighlight } from './Highlight';

import 'highlight.js/styles/github.css';
import 'highlight.js/styles/night-owl.css';
import 'highlight.js/styles/dark.css';
import 'highlight.js/styles/lioshi.css';
// import 'highlight.js/styles/default.css'; // Import the default Highlight.js style

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('rust', rust);
hljs.registerLanguage('shell', shell);

export const Highlight: React.FC<IHighlight> = ({ code, language }) => {
  const highlightedCode = hljs.highlight(code, { language: language }).value;
  return (
    <pre className="theme-lioshi-min">
      <div className="hljs" style={{ padding: '15px 10px' }}>
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        ></code>
      </div>
    </pre>
  );
};
