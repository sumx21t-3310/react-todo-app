import { useState } from "react";
import { TodoList } from "./TodoList.tsx";
import TodoForm from "./TodoForm.tsx";
import type { Todo } from "./todo.ts";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const generateNewId = () => {
    if (todos.length === 0) return 1;
    return Math.max(...todos.map((todo) => todo.id)) + 1;
  };

  const addTodo = (text: string) => {
    const newTodo = {
      id: generateNewId(),
      text: text,
      completed: false,
    };
    
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter(todo=> todo.id !== id);
    setTodos(updatedTodos)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Todoアプリ
        </h1>

        <TodoForm onAddTodo={addTodo} />
        <TodoList todos={todos} onDeleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
