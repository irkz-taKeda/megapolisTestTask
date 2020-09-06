import React  from "react";
import styles from './ToDoTable.module.css'
import TableRow from "./TableRow/TableRow";
import {useSelector} from "react-redux";

const ToDoTable = () => {
  const {list} = useSelector(state => state.toDo);
  return (
        list.length > 0 ?
            <table className={styles.toDoTable_container}>
              <tbody>
              {list.map((item, index) => <TableRow key={index} list={list} id={item.id} title={item.title}/>)}
              </tbody>
            </table>
            : <div className={styles.toDoTable_isEmpty}>Список пуст</div>
  );
};

export default ToDoTable;