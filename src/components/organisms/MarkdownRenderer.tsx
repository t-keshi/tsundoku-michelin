import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Typography } from '../ui';

const H1: Components['h1'] = ({ children }) => (
  <Typography variant="h1" gutterBottom responsive sx={{ mt: 4 }}>
    {children}
  </Typography>
);

const H2: Components['h2'] = ({ children }) => (
  <Typography variant="h2" paragraph responsive underline sx={{ mt: 4 }}>
    {children}
  </Typography>
);

const H3: Components['h3'] = ({ children }) => (
  <Typography variant="h3" paragraph responsive sx={{ mt: 4 }}>
    {children}
  </Typography>
);

const H4: Components['h4'] = ({ children }) => (
  <Typography variant="h4" paragraph responsive sx={{ mt: 4 }}>
    {children}
  </Typography>
);

const H5: Components['h5'] = ({ children }) => (
  <Typography variant="h5" paragraph responsive sx={{ mt: 4 }}>
    {children}
  </Typography>
);

const H6: Components['h6'] = ({ children }) => (
  <Typography variant="h6" paragraph responsive sx={{ mt: 2 }}>
    {children}
  </Typography>
);

const P: Components['p'] = ({ children }) => (
  <>
    <Typography variant="body1" noWrap remark>
      {children}
    </Typography>
    <br />
  </>
);

const Blockquote: Components['blockquote'] = ({ children }) => (
  <Typography variant="blockquote" remark>
    {children}
  </Typography>
);

const Code: Components['code'] = ({ inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Prism style={dark as any} language={match[1]} PreTag="div" {...props}>
      {String(children).replace(/\n$/, '')}
    </Prism>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export const MarkdownRenderer: React.FC<{ children: string }> = ({ children }) => (
  <ReactMarkdown
    rehypePlugins={[remarkGfm]}
    components={{
      h1: H1,
      h2: H2,
      h3: H3,
      h4: H4,
      h5: H5,
      h6: H6,
      p: P,
      blockquote: Blockquote,
      code: Code,
    }}
  >
    {children}
  </ReactMarkdown>
);
