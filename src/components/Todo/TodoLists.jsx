import { useState } from 'react';
import TodoItem from './TodoItem';
import styles from "./TodoLists.module.scss";

const mockData = [
  {
      "id": 1, 
      "task": "Suspendisse potenti.", 
      "status": false, 
      "due_date": "2023-04-26" 
  },
  {
      "id": 2,
      "task": "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      "status": false,
      "due_date": "2023-05-08"
  },
  {
      "id": 3,
      "task": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
      "status": false,
      "due_date": "2023-04-30"
  },
];

function TodoLists() {
  const [allTodos, setAllTodos] = useState(mockData);
  const dataRender = allTodos.map(dataObj => <TodoItem {...dataObj} />);

  return <>
    <ul className={styles.todo__lists}>
      {dataRender}
    </ul>
  </>;
}

export default TodoLists;
