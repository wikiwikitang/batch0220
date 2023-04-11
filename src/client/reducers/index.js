import { combineReducers } from 'redux';
import {
  ADD_TODO,
  MOD_TODO,
  DEL_TODO,
  INIT_TODO,
  ERROR,
  RESET_ERROR,
} from '../enum/index';

export const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case INIT_TODO:
      return [...payload];
    case ADD_TODO:
      return [...state, { ...payload }];
    case MOD_TODO:
      return state.map((todo) => {
        //if payload => index is not current id
        if (payload !== todo.id) {
          return todo;
        }

        return { ...todo, isCompleted: !todo.isCompleted };
      });
    case DEL_TODO:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const initErrorState = { error: false, errorMessage: '' };

export const errorReducer = (
  state = { ...initErrorState },
  { type, payload }
) => {
  switch (type) {
    case ERROR:
      return { ...state, ...payload };
    case RESET_ERROR:
      return { ...initErrorState };
    default:
      return state;
  }
};

export default combineReducers({
  todos: reducer,
  error: errorReducer,
});
