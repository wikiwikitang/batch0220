//action creator => create / generate actions
import {
  ADD_TODO,
  MOD_TODO,
  DEL_TODO,
  INIT_TODO,
  ERROR,
  RESET_ERROR,
} from '../enum/index';

import { ajaxConfigHelper } from '../helper/index';

export const initTodo = () => async (dispatch) => {
  try {
    //const todos = await todoApi.getAllTodos();
    const todosResponse = await fetch('/allTodos');
    const todos = await todosResponse.json();
    dispatch({
      type: INIT_TODO,
      payload: todos,
    });
  } catch (error) {
    //will add error handling code later
    console.log(error);
    dispatch({
      type: ERROR,
      payload: { error: true, errorMessage: 'Init todo failed' },
    });
  }
};

export const addTodo = (content) => (dispatch) => {
  fetch('/addTodo', ajaxConfigHelper({ content, isCompleted: false }))
    .then((response) => response.json())
    .then(({ newTodo: { content, isCompleted, id } }) => {
      dispatch({
        type: ADD_TODO,
        payload: {
          content,
          isCompleted,
          id,
        },
      });
    })
    .catch((e) => {
      dispatch({
        type: ERROR,
        payload: { error: true, errorMessage: 'Add todo failed' },
      });
    });
};

export const modTodo = (id) => async (dispatch) => {
  try {
    //const data = await todoApi.modTodo(index);
    const response = await fetch('/modTodo', ajaxConfigHelper({ id }, 'PUT'));
    const result = await response.json();
    console.log(result);

    dispatch({
      type: MOD_TODO,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: { error: true, errorMessage: 'Mod todo failed' },
    });
  }
};

export const delTodo = (id) => async (dispatch) => {
  try {
    // const data = await todoApi.delTodo(index);
    const response = await fetch(
      '/delTodo',
      ajaxConfigHelper({ id }, 'DELETE')
    );
    const result = await response.json();
    console.log(result);
    dispatch({
      type: DEL_TODO,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: { error: true, errorMessage: 'Del todo failed' },
    });
  }
};

export const closeErrorModal = () => {
  return {
    type: RESET_ERROR,
  };
};
