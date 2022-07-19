import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeComponent } from 'react-markdown/lib/ast-to-react';
import { Typography } from '../ui/Typography/Typography';

const BlockQuote: React.FC<{ children: React.ReactNode & React.ReactNode[] }> = ({ children }) => (
  <Typography variant="blockquote">{children}</Typography>
);

const Code: keyof JSX.IntrinsicElements | CodeComponent | undefined = ({
  inline,
  className,
  children,
  ...props
}) => {
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
      blockquote: BlockQuote,
      code: Code,
    }}
  >
    {children}
  </ReactMarkdown>
);
