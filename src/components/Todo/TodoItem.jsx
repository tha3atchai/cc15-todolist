import React, { useState } from 'react';
import styles from "./TodoItem.module.scss";
import { HiOutlineCheck } from 'react-icons/hi';
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import TodoForm from './TodoForm';

function TodoItem() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleClick = () => {
    setIsOpenForm(!isOpenForm);
  };

  let editTask = (
      <li className={styles.todo}>
        <div className={`${styles.todo__checkbox} ${styles.todo__checkbox__done}`}>
          <HiOutlineCheck className={styles.todo__checkbox__icon} />
        </div>
        <p className={`${styles.todo__task} ${styles.todo__task__done}`}>todo-item 1 </p>
        <span className={styles.todo__date}>30 Aug</span>
        <div className={styles.todo__action}>
          <span>
            <FaPen onClick={handleClick} className={styles.todo__edit} />
          </span>
          <span>
            <FaTrashAlt className={styles.todo__delete} />
          </span>
        </div>
      </li>
  );

  isOpenForm && (editTask = (
    <TodoForm setIsOpenForm={setIsOpenForm} textSubmit="Edit Task" />

  ))
  return (
    <>
    {editTask}    
    </>
  )
}

export default TodoItem