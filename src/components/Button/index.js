import React from 'react';
import styles from './styles.module.scss';

const Button = ({styleClass, btnAction, btnName}) => {
  return (
    <div>
      <button
        className={styles[styleClass]}
        onClick={ () => btnAction()}>
        {btnName}
      </button>
    </div>
  );
};
export default Button;