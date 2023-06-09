import {
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { StyledPaper, TodoItem, TodoList } from '../../styles';
import { addTodo } from '../../redux/reducers/todoReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Todo } from '../../types';

const TodoApp: React.FC = () => {
  const todos = useSelector((state: RootState) => state.TodoReducer.todos);
  const dispatch = useDispatch();

  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      const newTodo = {
        id: Date.now(),
        text: newTodoText.trim(),
        completed: false,
      };
      dispatch(addTodo(newTodo));
      setNewTodoText('');
    }
  };

  return (
    <StyledPaper elevation={3}>
      <Typography variant='h5' component='h1' align='center' gutterBottom>
        Todo App
      </Typography>
      <Input
        placeholder='Enter a new todo'
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        fullWidth
        autoFocus
      />
      <Button
        variant='contained'
        color='primary'
        onClick={handleAddTodo}
        fullWidth
        disabled={!newTodoText.trim()}
        style={{ marginTop: '0.5rem' }}
      >
        Add Todo
      </Button>
      <TodoList>
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={todo.completed}
                  onChange={() => alert('Why isn`t this working???')}
                  color='primary'
                />
              }
              label={todo.text}
              style={
                todo.completed
                  ? { textDecoration: 'line-through', color: '#999' }
                  : {}
              }
            />
          </TodoItem>
        ))}
      </TodoList>
    </StyledPaper>
  );
};

export default TodoApp;
