import styles from './TodoCreate.module.scss';
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import TodoForm from './TodoForm';
import { useState } from 'react';

/*
Condition Rendering
- Default : Show Button & Text
- Active : Show TodoForm

Concept : true ? <AddTask /> : <TodoForm />
*/

/*
CC2 - EVENT HANDLING
เอาฟังก์ชั่นไปผูกติดกับ UI เพื่อให้ USER เป็นคนเรียกใช้ฟังก์ชั่นเอง
*/

/*
CC3 - JS Value ไม่สามารถทำให้ React Rerender ได้
ต้องใช้ state
*/

// #1 : FC = Function Component (Render)

function TodoCreate() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  // #2 JS Function (Login)
  const handleClick = () => {
  setIsOpenForm(!isOpenForm);
  };

  let addTodoTask = (
        <div onClick={handleClick} className={styles.todo__create}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
  );

  isOpenForm && (addTodoTask = (
        <TodoForm  textSubmit="Add Task" setIsOpenForm={setIsOpenForm} />
  ))

  return (
    <>{addTodoTask}</>
  );
}

export default TodoCreate;
