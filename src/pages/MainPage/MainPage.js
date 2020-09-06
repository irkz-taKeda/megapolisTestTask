import React from "react";
import Header from "../../components/Header/Header";
import styles from './MainPage.module.css'
import ToDoTable from "../../components/ToDoTable/ToDoTable";
import Modal from "../../components/Modal/Modal";
import {useSelector} from "react-redux";

const MainPage = () => {
  const {modalIsOpen, listIsChanged} = useSelector(state => state.toDo);

  return(
      <>
        <div className={styles.container}>
          <Header/>
          <ToDoTable listIsChanged={listIsChanged}/>
        </div>
        {modalIsOpen && <Modal/>}
      </>

  )
};
export default MainPage;