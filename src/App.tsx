import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import TodoApp from './components/TodoApp';
import { AppContainer } from './styles';

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <TodoApp />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
