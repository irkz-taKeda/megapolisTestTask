import React from "react";
import styles from './TableRow.module.css';
import edit from '../../../assets/svg/edit.svg';
import basket from '../../../assets/svg/basket.svg';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteTask, editTask} from "../../../redux/actions/todos";

const TableRow = ({id, title}) => {
  const dispatch = useDispatch();
  const deleteHandler = id => {
     fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
      method: 'DELETE',
    })
         .then(response => response.json())
         .then(result => result.success && dispatch(deleteTask(id)))
         .catch(() => alert('Shit happened'));
  };
  const editHandler = () => {
    dispatch(editTask(id, title));
  };
  return (
        <tr className={styles.tableRow_container}>
          <td className={styles.tableRow_task_title}>Задача №{id}</td>
          <td className={styles.tableRow_task_description}>{title}</td>
          <td className={styles.tableRow_task_icons}>
            <Link to="/showToDo"><img className={styles.icon_edit} onClick={() => editHandler()} src={edit} alt='edit-img'/></Link>
            <img className={styles.icon_basket} onClick={() => deleteHandler(id)}  src={basket} alt='basket-img' />
          </td>
        </tr>
  );
};
export default TableRow;