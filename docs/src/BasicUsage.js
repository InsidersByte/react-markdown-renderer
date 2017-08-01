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

render(
  <MarkdownRenderer markdown={markdown} />
)
`.trim();

const BasicUsage = () =>
  <Root>
    <Title>Basic Usage</Title>

    <LiveEdit code={code} />
  </Root>;

export default BasicUsage;
