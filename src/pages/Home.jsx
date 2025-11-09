import React from 'react';
import TodoList from '../components/features/TodoList';

function Home() {
  return (
    <div>
      <header className="py-5">
        <h1 className="text-3xl font-bold text-center text-blue-600">Manage Your Tasks Efficiently</h1>
        <p className="mt-2 text-lg text-center text-gray-600">Keep track of your tasks with simplicity and style.</p>
      </header>
      <TodoList />
    </div>
  );
}

export default Home;