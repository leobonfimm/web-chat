import React from 'react';

import Chat from './pages/ChatPage';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Chat />
      <GlobalStyle />
    </>
  );
};

export default App;
