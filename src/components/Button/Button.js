import React from "react";
import styles from './Button.module.css'

const Button = ({handleClick,value}) => {
  const setClassName = value => {
    switch(value) {
      case 'Добавить':
        return styles.submitButton;
      case 'Вернуться в список':
        return styles.returnButton;
      case 'Удалить':
        return styles.deleteButton;
      default:
        return styles.submitButton;
    }
  };

  return (
      <button onClick={handleClick} className={setClassName(value)}>
        {value}
      </button>
  );
};

export default Button;