import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

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
    addItem: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addItem } = toDoSlice.actions;
export const TodoReducer = toDoSlice.reducer;
