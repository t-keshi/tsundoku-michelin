import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Box } from "../ui/Box/Box";
import { Typography } from "../ui/Typography/Typography";

export const MarkdownRenderer: React.FC<{ children: string }> = ({
  children,
}) => {
  return (
    <ReactMarkdown
      rehypePlugins={[remarkGfm]}
      components={{
        blockquote: ({ children }) => (
          <Typography variant="blockquote">{children}</Typography>
        ),
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <Prism
              style={dark as any}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </Prism>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
