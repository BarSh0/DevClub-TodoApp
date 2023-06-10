import {
  Button,
  Checkbox,
  FormControlLabel,
  Input,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { StyledPaper, TodoItem, TodoList } from '../../styles';
import { Todo } from '../../types';

const TodoApp: React.FC = () => {
  const [newTodoText, setNewTodoText] = useState('');
  const todos: Todo[] = [];

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      const newTodo = {
        id: Date.now(),
        text: newTodoText.trim(),
        completed: false,
      };
      //TODO - add item to global state
      setNewTodoText('');
    }
  };

  const handleAsyncTask = () => {
    alert('Try to add thunk');
  };

  return (
    <StyledPaper elevation={3}>
      <button onClick={handleAsyncTask}>Click me to add something</button>
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
