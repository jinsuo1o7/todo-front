import React from "react";
import { useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import styles from "./css/TodoAddForm.module.css";

export default function TodoAddForm({ onAddTodo }) {
  const [todo, setTodo] = useState({ name: "" });
  const handleChange = (e) => {
    setTodo({ ...todo, name: e.target.value });
  };
  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (todo.name.trim() === "") return;
    await onAddTodo(todo);
    setTodo({ ...todo, name: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleAddTodo}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={todo.name}
        placeholder="Add Todo"
        onChange={handleChange}
      />
      <button className={styles.button} type="submit">
        <AiFillPlusSquare />
      </button>
    </form>
  );
}
