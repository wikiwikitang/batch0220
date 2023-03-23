//action creator => create / generate actions
import { ADD_TODO, MOD_TODO, DEL_TODO } from '../enum/index';
export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: {
      content,
      isCompleted: false,
    },
  };
};

export const modTodo = (index) => {
  return {
    type: MOD_TODO,
    payload: index,
  };
};

export const delTodo = (index) => {
  return {
    type: DEL_TODO,
    payload: index,
  };
};
