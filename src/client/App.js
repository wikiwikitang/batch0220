import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import ErrorModal from './components/ErrorModal';
import { initTodo } from './actions/index';

import './App.css';

// => ds => array => [{content: "fdfasdfaf", isCompleted: false}]

//1. useConText 2.redux

//dispatch async action => redux thunk intercept action and execute the async logic here => when the async logic is done, dispatch the action to the reducer => reducer update state => component connect to the global store/redux store will receice the update => re-render the component
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initTodo());
  }, [dispatch]);

  return (
    <div className='App'>
      <TodoHeader todoHeaderContent='Todo App' />
      <TodoInput />
      <TodoList />
      <ErrorModal />
    </div>
  );
}

export default App;
