import React from 'react';
import { Check, X } from 'lucide-react';

function TodoItem({ todo, toggleComplete }) {
  return (
    <li className={`flex justify-between items-center bg-white p-4 rounded shadow ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
      {todo.text}
      <button onClick={() => toggleComplete(todo.id)} className="text-green-500 hover:text-green-700">
        {todo.completed ? <X /> : <Check />}
      </button>
    </li>
  );
}

export default TodoItem;