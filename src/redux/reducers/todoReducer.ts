import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../types';

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const toDoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = toDoSlice.actions;
export const TodoReducer = toDoSlice.reducer;
