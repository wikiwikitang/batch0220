//action creator => create / generate actions
import {
  ADD_TODO,
  MOD_TODO,
  DEL_TODO,
  INIT_TODO,
  ERROR,
  RESET_ERROR,
} from '../enum/index';
import { todoApi } from '../apis/index';

export const initTodo = () => async (dispatch) => {
  try {
    const todos = await todoApi.getAllTodos();
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
  todoApi
    .addTodo({ content, isCompleted: false })
    .then(() => {
      dispatch({
        type: ADD_TODO,
        payload: {
          content,
          isCompleted: false,
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

export const modTodo = (index) => async (dispatch) => {
  try {
    const data = await todoApi.modTodo(index);
    dispatch({
      type: MOD_TODO,
      payload: index,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: { error: true, errorMessage: 'Mod todo failed' },
    });
  }
};

export const delTodo = (index) => async (dispatch) => {
  try {
    const data = await todoApi.delTodo(index);
    dispatch({
      type: DEL_TODO,
      payload: index,
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
