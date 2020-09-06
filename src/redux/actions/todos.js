import * as constants from '../constants';

export const saveToDoList = (list) => ({
  type: constants.SAVE_TODO_LIST,
  list
});

export const setModalIsOpen = value => ({
  type: constants.SET_MODAL_IS_OPEN,
  value
});

export const setListIsChanged = () => ({
  type: constants.LIST_IS_CHANGED
});

export const deleteTask = (list) => ({
  type: constants.DELETE_TASK,
  list
});

export const editTask = (id, title) => ({
  type: constants.EDIT_TASK,
  id,
  title
});


