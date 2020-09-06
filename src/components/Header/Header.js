import React from "react";
import styles from './Header.module.css';
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {setModalIsOpen} from "../../redux/actions/todos";

const Header = () => {
  const dispatch = useDispatch();
  const submitHandle = () => {
    dispatch(setModalIsOpen(true));
  };

  return (
      <div className={styles.header_container}>
        <div className={styles.headerTitle}>
          Список задач
        </div>
        <Button onClick={submitHandle}>Добавить</Button>
      </div>
  );
};

export default Header;