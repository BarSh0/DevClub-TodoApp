import { Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const AppContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const StyledPaper = styled(Paper)`
  width: 400px;
  padding: 1rem;
`;

const TodoList = styled('ul')`
  list-style-type: none;
  padding: 0;
`;

const TodoItem = styled('li')`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export { AppContainer, StyledPaper, TodoList, TodoItem };
