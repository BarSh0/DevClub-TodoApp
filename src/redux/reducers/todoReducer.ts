import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../types';
import { fetchData } from '../actions/fetchData';

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
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: true,
      });
    });
  },
});

export const { addTodo } = toDoSlice.actions;
export const TodoReducer = toDoSlice.reducer;
