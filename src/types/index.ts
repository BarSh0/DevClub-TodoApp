interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
};

export type { Todo, TodoContextType };
