import React, {useState} from "react";
import styles from './ShowToDo.module.css';
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteTask, saveTask} from "../../redux/actions/todos";

const ShowToDo = () => {
  const {id, title} = useSelector(state => state.toDo.editTask);
  const [newTitle, setNewTitle] = useState(title);
  const inputIsChanged = Boolean(newTitle) && newTitle !== title;
  const dispatch = useDispatch();
  const history = useHistory();
  const goHome = () => {
    history.push('/');
  };
  const editHandler = () => {
    fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({title: newTitle})
    })
        .then(response => {
      if (response.status === 200) {
        dispatch(saveTask(id, newTitle));
        goHome();
      }
    })
        .catch(() => alert('Shit happened'));
  };
  const deleteHandler = id => {
    fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
      method: 'DELETE',
    })
        .then(response => response.json()).then(result => result.success && dispatch(deleteTask(id)))
        .catch(() => alert('Shit happened'));
  };
  const changeHandler = (e) => {
    setNewTitle(e.target.value);
  };
  return(
      <div className={styles.showToDo_container}>
        <div className={styles.showToDo_header}>
          <div className={styles.showToDo_header_title}>
            Задача №{id}
          </div>
          <span><Button onClick={() => deleteHandler(id)} theme={'deleteButton'} >Удалить</Button></span>
        </div>
        <div className={styles.showToDo_input_title}>
          Краткое описание
        </div>
        <input className={styles.showToDo_input} type="text" onChange={(e) => changeHandler(e)}  value={newTitle}/>
        <span><Button onClick={() => inputIsChanged ? editHandler() : goHome()} theme={inputIsChanged ?'submitButton' : 'returnButton'}>{inputIsChanged ? "Сохранить" : "Вернуться в список"}</Button></span>
      </div>
  );
};

export default ShowToDo;