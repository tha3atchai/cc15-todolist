import styles from './TodoForm.module.scss';
import {Button} from "../Common/Button/Button";
import { useState } from 'react';

/*
  props = {
    textSubmit: string
  }
*/

/* 
CC1 - Form Handle
- ใช้ FN ไปผูกกับ Event ชื่อ onSubmit
- FN จะถูก Browser เรียกใช้ (เมื่อไหร่ ?) 
- โดย

*/

function TodoForm({textSubmit, setIsOpenForm}) {
  const [isError, setIsError] = useState(false); 
  const [taskInput, setTaskInput] = useState("");


  const handleChangeInput = e => {
    if(isError) setIsError(false);
    setTaskInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // FormValidation
    // case1 : submit ได้
    // case2 : submit ไม่ได้ => แสดง Error
    if(taskInput.trim() === "") {
      setIsError(true);
    }else {
      console.log("Submit");
    }
    setTaskInput("");
  };

  const handleCancel = () => {
    setIsOpenForm(false);
  };

  return (
  <>
    <form
    className={styles.todo__form__container}
    onSubmit={handleSubmit}
    >
      {/*    Body */}
      <input value={taskInput} onChange={handleChangeInput} className={styles.todo__form__input} placeholder='Task Name' />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        <p className={styles.todo__error}>{!isError? "" : "Title is required"}</p>
        <div className={styles.todo__form__buttons}>
          <Button onClick={handleCancel} text ="Cancel" active={true}/>
          <Button type="submit" text ={textSubmit}/>
        </div>
      </div>
    </form>
  </>);
}

export default TodoForm;

