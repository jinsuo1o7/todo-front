import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./css/TodoItem.module.css";

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const { id, name, completed } = todo;
  const handleUpdate = (e) => {
    onUpdate({ ...todo, completed: e.target.checked });
  };
  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        id={id}
        className={styles.checkbox}
        type="checkbox"
        checked={completed}
        onChange={handleUpdate}
      />
      <label htmlFor={id} className={styles.text}>
        {name}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <AiFillCloseCircle />
        </button>
      </span>
    </li>
  );
}
