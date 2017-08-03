import React from 'react';
import styled from 'styled-components';
import MarkdownRenderer from 'react-markdown-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

type Props = {
  code: string,
};

const StyledProvider = styled(LiveProvider)`
  border-radius: 0.1875rem;
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: 6.25rem;
  text-align: left;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
`;

const StyledEditor = styled(LiveEditor)`
  background: #1d1f27;
  font-family: 'Source Code Pro', monospace;
  font-size: 0.875rem;
  min-height: 21.875rem;
  height: auto;
  overflow: scroll;
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
`;

const LiveEdit = ({ code }: Props) =>
  <StyledProvider
    code={code}
    noInline
    scope={{ MarkdownRenderer }}
    mountStylesheet={false}
  >
    <Row>
      <StyledEditor />
      <StyledPreview />
    </Row>

    <LiveError />
  </StyledProvider>;

export default LiveEdit;
