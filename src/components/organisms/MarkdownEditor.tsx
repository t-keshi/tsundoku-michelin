import React from 'react';
import {
  MarkdownComponents,
  MarkdownEditor as MarkdownEditorLibrary,
  MarkdownEvent,
} from '@react-libraries/markdown-editor';
import { Typography } from '../ui';

type Props = {
  event?: MarkdownEvent;
  defaultValue?: string;
  value?: string;
  onUpdate?: (value: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const Paragraph: MarkdownComponents['paragraph'] = ({ children }) => (
  <Typography variant="body1" gutterBottom noWrap remark>
    {children}
  </Typography>
);

export const MarkdownEditor: React.FC<Props> = (props) => (
  <MarkdownEditorLibrary
    components={{
      paragraph: Paragraph,
    }}
    {...props}
  />
);
