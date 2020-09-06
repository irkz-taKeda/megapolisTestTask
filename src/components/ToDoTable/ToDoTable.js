import React, {useEffect} from "react";
import styles from './ToDoTable.module.css'
import TableRow from "./TableRow/TableRow";
import {useDispatch, useSelector} from "react-redux";
import {saveToDoList} from "../../redux/actions/todos";



const ToDoTable = ({listIsChanged}) => {
  const {list} = useSelector(state => state.toDo);
  const dispatch = useDispatch();
  const getToDoList = () => {
    fetch('https://test.megapolis-it.ru/api/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    })
        .then(response => response.json())
        .then(result => {dispatch(saveToDoList(result.data))})

  };
  useEffect(getToDoList, [listIsChanged]);

  return (
      <>
        {list.length > 0 ?
            <table className={styles.toDoTable_container}>
              <tbody>
              {list.map((item, index) => <TableRow key={index} list={list} id={item.id} title={item.title}/>)}
              </tbody>
            </table>
            : <div className={styles.toDoTable_isEmpty}>Список пуст</div>
        }
      </>
  );
};

export default ToDoTable;