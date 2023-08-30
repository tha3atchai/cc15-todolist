import styles from "./TodoList.module.scss";
import {
  FaPen,
  FaTrashAlt,
  FaRegCircle,
  FaReceipt
} from "react-icons/fa";

function TodoList() {
  return (
    <ul>
      <li className={styles.todo}>
        <span className={styles.todo__checkbox}></span>
        <p className={styles.todo__task}>TodoItem 1</p>
        <span className={styles.todo__date}>30 AUG</span>
        <div className={styles.todo__action}>
          <span className={styles.todo__edit}>
            <FaPen />
          </span>
          <span className={styles.todo__delete}>
            <FaTrashAlt />
          </span>
        </div>
      </li>
    </ul>
  )
}

export default TodoList