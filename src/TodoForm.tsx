import React, { useState } from "react";

function TodoForm({ onAddTodo }: { onAddTodo: (text: string) => void }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedValue = inputValue.trim();

    if (trimmedValue === "") return;
    if (trimmedValue.length > 100) return;
    

    onAddTodo(inputValue.trim());
    setInputValue("");
  };

  return (
    <div className="mb-6">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="新しいTodoを入力してください"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          maxLength={100}
          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          追加
        </button>
      </form>
    </div>
  );
}
export default TodoForm;
