import React, {useState} from "react";
import styles from './ShowToDo.module.css';
import Button from "../../components/Button/Button";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteTask, setListIsChanged} from "../../redux/actions/todos";

const ShowToDo = () => {
  const {id, title} = useSelector(state => state.toDo.editTask);
  const {list} = useSelector(state => state.toDo);
  const [inputIsChanging, setInputIsChanging] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const dispatch = useDispatch();

  const editHandler = () => {
    fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({title: newTitle})
    }).then(response => (response.status === 200) && dispatch(setListIsChanged()));
  };

  const deleteHandler = id => {
    dispatch(deleteTask(list));
    fetch(`https://test.megapolis-it.ru/api/list/${id}`, {
      method: 'DELETE',
    }).then(response => response.json()).then(result => result.success && dispatch(setListIsChanged()));
  };

  const changeHandler = (e) => {
    setInputIsChanging(true);
    setNewTitle(e.target.value);
  };


  return(
      <div className={styles.showToDo_container}>
        <div className={styles.showToDo_header}>
          <div className={styles.showToDo_header_title}>
            Задача №{id}
          </div>
          <Link to={'/'}>
            <Button handleClick={() => deleteHandler(id)}  value={"Удалить"}/>
          </Link>
        </div>
        <div className={styles.showToDo_input_title}>
          Краткое описание
        </div>
        <input className={styles.showToDo_input} type="text" onChange={(e) => changeHandler(e)}  defaultValue={title}/>
        <Link to='./' className={styles.link}><Button handleClick={editHandler} value={inputIsChanging ? "Сохранить" : "Вернуться в список"}/></Link>
      </div>
  );
};

export default ShowToDo;