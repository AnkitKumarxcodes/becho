import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: 'Learn React', completed: false },
    { id: uuidv4(), text: 'Build a Todo App', completed: false }
  ]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { id: uuidv4(), text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  return (
    <div className="mt-10 max-w-md mx-auto">
      <div className="mb-4">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="Add a new task"
        />
        <button onClick={addTodo} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Task</button>
      </div>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;