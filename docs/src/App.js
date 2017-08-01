import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import BasicUsage from './BasicUsage';
import Options from './Options';

const Root = styled.div`
  margin: 0 auto;
  max-width: 100%;
  width: 90rem;
  padding: 1.25rem;
  padding-bottom: 6.25rem;
  text-align: center;
`;

const App = () =>
  <Root>
    <Header />
    <BasicUsage />
    <Options />
  </Root>;

export default App;
