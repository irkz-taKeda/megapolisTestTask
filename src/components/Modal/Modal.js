import React, {useRef, useState} from "react";
import styles from './Modal.module.css';
import Button from "../Button/Button";
import cross from '../../assets/svg/cross.svg';
import {useDispatch} from "react-redux";
import {setListIsChanged, setModalIsOpen} from "../../redux/actions/todos";

const Modal = () => {
  const [title, setDescription] = useState('');
  const [modalIsEmpty, setModalIsEmpty] = useState(false);
  const modalOverlay = useRef();
  const inputValue = useRef();
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(setModalIsOpen(false));
  };

  const submitHandler = () => {
    if (title.length === 0) {
      setModalIsEmpty(true);
    } else {
      fetch('https://test.megapolis-it.ru/api/list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({title: title})
      });
      closeHandler();
      dispatch(setListIsChanged(true));
    }
  };

  return (
        <div ref={modalOverlay} onClick={(e) => (e.target === modalOverlay.current) && closeHandler()}  className={styles.modal_overlay}>
          <div className={styles.modal_window}>
            <div className={styles.modal_header}>
              <div className={styles.modal_header_title}>
                Краткое описание
              </div>
              <img className={styles.modal_header_cross} src={cross} onClick={() => dispatch(setModalIsOpen(false))} alt="Закрыть"/>
            </div>
            <div className={styles.modal_body}>
              <input ref = {inputValue} onChange={e => setDescription(e.target.value)} className={styles.modal_body_input} type="text"/>
              <div className={styles.modal_isEmpty_error}>{modalIsEmpty&&"Заголовок не может быть пустым"}</div>
              <div className={styles.modal_submit_btn} ><Button handleClick={submitHandler}  value={"Создать"}/></div>
            </div>
          </div>
        </div>
  );
};

export default Modal;
