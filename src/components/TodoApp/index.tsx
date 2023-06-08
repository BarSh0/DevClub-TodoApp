import { Button, Checkbox, FormControlLabel, Input, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context';
import { StyledPaper, TodoItem, TodoList } from '../../styles';

const TodoApp: React.FC = () => {
  const { todos, addTodo, toggleTodo } = useContext(TodoContext);
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      addTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        Todo App
      </Typography>
      <Input
        placeholder="Enter a new todo"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        fullWidth
        autoFocus
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTodo}
        fullWidth
        disabled={!newTodoText.trim()}
        style={{ marginTop: '0.5rem' }}
      >
        Add Todo
      </Button>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <FormControlLabel
              control={<Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} color="primary" />}
              label={todo.text}
              style={todo.completed ? { textDecoration: 'line-through', color: '#999' } : {}}
            />
          </TodoItem>
        ))}
      </TodoList>
    </StyledPaper>
  );
};

export default TodoApp;
