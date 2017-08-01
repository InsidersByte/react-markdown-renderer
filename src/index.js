/* @flow */

import React from 'react';
import Remarkable from 'remarkable';

type PropsType = {
  markdown: string,
  options?: {
    preset?: 'default' | 'commonmark' | 'full',
    html?: boolean,
    xhtmlOut?: boolean,
    breaks?: boolean,
    langPrefix?: string,
    linkify?: boolean,
    typographer?: boolean,
    quotes?: string,
    highlight?: (str: string, lang: string) => string,
  },
};

const MarkdownRenderer = ({
  markdown,
  options: { preset, ...options } = {},
  ...props
}: PropsType) => {
  const remarkable = new Remarkable(preset || 'default', options);
  const html = remarkable.render(markdown);

  return <div {...props} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownRenderer;
