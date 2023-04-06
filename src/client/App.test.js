import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

describe('Testing Todo App', () => {
  const initState = {
    todos: [],
    error: { error: false, errorMessage: '' },
  };

  const oneTodoState = {
    todos: [{ content: '111', isCompleted: 'false' }],
    error: { error: false, errorMessage: '' },
  };

  const threeTodosState = {
    todos: [
      { content: '111', isCompleted: 'false' },
      { content: '222', isCompleted: 'false' },
      { content: '333', isCompleted: 'false' },
    ],
    error: { error: false, errorMessage: '' },
  };

  const mockStore = configureStore();
  let store;
  it('App is rendered correctly with no todo list', () => {
    store = mockStore(initState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText('Todo App')).toBeInTheDocument();
    expect(screen.getByTestId('add-todo-btn')).toBeInTheDocument();
    expect(screen.getByTestId('add-todo-input-field')).toBeInTheDocument();
    //testing code here.
  });

  it('App is rendered correctly with 1 todo', () => {
    //testing code here.
    store = mockStore(oneTodoState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByTestId('111-0')).toBeInTheDocument();
  });

  it('App is rendered correctly with 3 todos', () => {
    store = mockStore(threeTodosState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const todoTestingIdArray = ['111-0', '222-1', '333-2'];
    todoTestingIdArray.forEach((testingId) => {
      expect(screen.getByTestId(testingId)).toBeInTheDocument();
    });
  });
});
