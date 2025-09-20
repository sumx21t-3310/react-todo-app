import type { Todo } from "./todo";
import { TodoItem } from "./TodoItem";

interface Props {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
}

function TodoList({ todos, onDeleteTodo }: Props) {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </div>
  );
}

export { TodoList };
