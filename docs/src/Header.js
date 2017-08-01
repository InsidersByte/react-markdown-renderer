import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  width: 100%;
  margin-bottom: 3.75rem;
`;

const TitleWrapper = styled.div`margin: 1.875rem 0;`;

const Title = styled.h1`
  font-weight: normal;
  font-size: 5.332em;
  line-height: 1.1;
  margin: 0;
  margin-left: 1.5625rem;
`;

const SubTitle = styled.h2`
  font-size: 1.333em;
  font-weight: bold;
  color: #828fb7;
  margin: 0;
  margin-left: 1.875rem;
  letter-spacing: 0.01875rem;
  line-height: 1.5;
`;

const Wrapper = styled.div`
  margin: 2.5rem;
  text-align: center;
  font-size: 1.333em;
  color: #828fb7;
  line-height: 1.5;
`;

const Button = styled.a`
  display: inline-block;
  width: auto;
  padding: 0.625rem 1.25rem;
  text-decoration: none;
  border-radius: 0.1875rem;
  background: #828fb7;
  color: #f8f8f2;
  margin: 1.875rem 0;
`;

const Header = () =>
  <Root>
    <TitleWrapper>
      <Title>React Markdown Renderer</Title>
      <SubTitle>Simple React component that renders Markdown</SubTitle>
    </TitleWrapper>

    <Wrapper>
      <Button
        href="https://github.com/insidersbyte/react-markdown-renderer"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Button>
    </Wrapper>
  </Root>;

export default Header;
