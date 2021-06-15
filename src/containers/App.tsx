import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { Card } from '~/components/Card';

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: 3s ${keyframes`${fadeIn}`};
`;

export const App: FC = () => (
    <AppStyled className="App" onClick={(event) => console.log(event)}>
        <Card/>
    </AppStyled>
);
