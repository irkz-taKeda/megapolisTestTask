import React from "react";
import styles from './Button.module.css'

const Button = ({theme, onClick, children}) => {
  return (
      <button onClick={onClick} className={`${styles.button} ${styles[theme]||styles.submitButton}`}>
        {children}
      </button>
  );
};

export default Button;