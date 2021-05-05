import React, { FC } from 'react';
import MainPage from '../components/mainPage/mainPage';
import { Wrapper } from '../styledHelpers/Components';

const App: FC = () => {
  return(
    <Wrapper>
      <MainPage />
    </Wrapper>
  );
};

export default App;
