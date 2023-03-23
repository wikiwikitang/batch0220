import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import './App.css';

// => ds => array => [{content: "fdfasdfaf", isCompleted: false}]

//1. useConText 2.redux
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <TodoHeader todoHeaderContent='Todo App' />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
