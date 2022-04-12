import React from 'react';
import styled from 'styled-components';
import Root from './Routes/Root'

const LayoutContainer = styled.div`
 max-width: 800px;
  margin: 30px auto;
`;

function App() {

  return (
    <>
      <LayoutContainer>
        <Root />
      </LayoutContainer>
    </>
  );
}

export default App;
