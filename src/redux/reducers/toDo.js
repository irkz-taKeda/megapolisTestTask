import * as constants from '../constants';

export default (state = {modalIsOpen: false, list:[], editTask:{}, listIsChanged: false}, action) => {
  if  (action.type === constants.SAVE_TODO_LIST) {
    return {...state, list: [...action.list]}
  } else if (action.type === constants.SET_MODAL_IS_OPEN) {
    return {...state, modalIsOpen: action.value}
  } else if (action.type === constants.EDIT_TASK) {
    return {...state, editTask:{id: action.id, title: action.title}};
  } else if (action.type === constants.ADD_TASK) {
    return {...state, list:[...state.list, {id: action.id, title: action.title}]};
  } else if (action.type === constants.DELETE_TASK) {
    return {...state, list: state.list.filter(item => item.id !== action.id)};
  } else if (action.type === constants.SAVE_TASK) {
    const index = state.list.findIndex(item => item.id === action.id);
    return index < 0  ? state : {...state, list: [...state.list.slice(0, index), {id:action.id, title: action.title}, ...state.list.slice(index + 1)]}
  }
  return state;
};