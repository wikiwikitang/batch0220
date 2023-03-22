import { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './App.css';

// => ds => array => [{content: "fdfasdfaf", isCompleted: false}]
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <TodoHeader todoHeaderContent='Todo App' />
      <TodoInput setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
