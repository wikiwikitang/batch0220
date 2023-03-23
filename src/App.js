import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { TodoContext } from './context/index';
import './App.css';

// => ds => array => [{content: "fdfasdfaf", isCompleted: false}]

//1. useConText 2.redux
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <TodoHeader todoHeaderContent='Todo App' />
        <TodoInput />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
