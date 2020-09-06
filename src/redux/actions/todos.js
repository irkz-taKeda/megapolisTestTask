import * as constants from '../constants';

export const saveToDoList = (list) => ({
  type: constants.SAVE_TODO_LIST,
  list
});

export const setModalIsOpen = value => ({
  type: constants.SET_MODAL_IS_OPEN,
  value
});

export const deleteTask = (id) => ({
  type: constants.DELETE_TASK,
  id
});

export const saveTask = (id, title) => ({
  type: constants.SAVE_TASK,
  id,
  title
});

export const editTask = (id, title) => ({
  type: constants.EDIT_TASK,
  id,
  title
});

export const addTask = (id, title) => ({
  type: constants.ADD_TASK,
  id,
  title
});




