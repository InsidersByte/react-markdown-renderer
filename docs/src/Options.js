import React from 'react';
import styled from 'styled-components';
import LiveEdit from './LiveEdit';

const Root = styled.div`margin-top: 3.125rem;`;

const Title = styled.p`
  color: white;
  margin-bottom: 0.625rem;
`;

const code = `
const markdown = \`
# This is a H1
## This is a H2
### This is a H3
\`;

const options = {
  // Remarkable offers some "presets" as a convenience to quickly enable/disable active syntax rules and options for common use cases.
  preset:       'default',    // "default" | "commonmark" | "full"
  
  html:         false,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />)
  breaks:       false,        // Convert '\\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks
  linkify:      false,        // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  highlight: function (/*str, lang*/) { return ''; }
};

render(
  <MarkdownRenderer markdown={markdown} options={options} />
)
`.trim();

const AdvancedUsage = () =>
  <Root>
    <Title>Options</Title>

    <LiveEdit code={code} />
  </Root>;

export default AdvancedUsage;
