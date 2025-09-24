import React, {useState} from "react";
import type {Todo} from "./todo";

interface Props {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
}

function TodoItem({todo, onDeleteTodo}: Props) {
  const [idEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDelete = () => {
    const isConfirmed = window.confirm(`「${todo.text}」を削除しますか？`);
    if (isConfirmed === false) return;

    onDeleteTodo(todo.id);
  };

  const handleEditStart = () => setIsEditing(true);

  const handleEditCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleEditSave = () => {
    if (editText.trim() === '') return;

    console.log("保存する方法テキスト: ", editText);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEditSave();
    } else if (e.key === 'Escape') {
      handleEditCancel();
    }
  }

  return (
    <div
      className={`p-3 rounded shadow flex justify-between items-center ${
        todo.completed ? "bg-green-50 border border-green-200" : "bg-white"
      }`}
    >
      <div className="flex-1">
        {idEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        ) : (
          <div onClick={handleEditStart} className="cursor-pointer">
            <p
              className={`${
                todo.completed ? "text-gray-500 line-through" : "text-gray-800"
              }`}
            >
              {todo.text}
            </p>
            <p className={"text-sm text-gray-500"}>
              状態: {todo.completed ? "✅完了" : "⏳未完了"}
            </p>
          </div>
        )}
      </div>
      <button
        className="ml-4 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 focus:outline-none"
        onClick={handleDelete}
      >
        削除
      </button>
    </div>
  );
}

export {TodoItem};
