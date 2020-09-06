import * as constants from '../constants';

export default (state = {modalIsOpen: false, list:[], editTask:{}, listIsChanged: false}, action) => {
  if  (action.type === constants.SAVE_TODO_LIST) {
    return {...state, list: [...state.list, ...action.list]}
  } else if (action.type === constants.SET_MODAL_IS_OPEN) {
    return {...state, modalIsOpen: action.value}
  } else if (action.type === constants.LIST_IS_CHANGED) {
    return {...state, listIsChanged: !state.listIsChanged, list:[]}
  } else if (action.type === constants.DELETE_TASK) {
    return {...state, list: [...state.list.filter(item => item.id !== action.id)], listIsChanged: !state.listIsChanged}
  } else if (action.type === constants.EDIT_TASK) {
    return {...state, list:[], editTask:{id: action.id, title: action.title}, listIsChanged: !state.listIsChanged};
  }
  return state;
};