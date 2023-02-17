import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoAddForm from "./TodoAddForm";
import TodoItem from "./TodoItem";
import styles from "./css/Todos.module.css";

export default function Todos({ filter }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    loadTodos();
  }, []);
  const loadTodos = async () => {
    const { data } = await axios.get("/todos");
    setTodos(data);
  };
  const filtered = loadFilteredTodos(todos, filter);

  const handleAdd = async (todo) => {
    const { data } = await axios.post("/todos", todo);
    setTodos([...todos, { ...todo, id: data.id }]);
  };
  const handleUpdate = async (update) => {
    await axios.patch(`/todos/${update.id}`, update);
    setTodos(todos.map((t) => (t.id === update.id ? update : t)));
  };
  const handleDelete = async (deleted) => {
    await axios.delete(`/todos/${deleted.id}`);
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <TodoAddForm onAddTodo={handleAdd} />
    </section>
  );
}

function loadFilteredTodos(todos, filter) {
  switch (filter) {
    case "all":
      return todos;
    case "active":
      return todos.filter((todo) => todo.completed !== true);
    case "completed":
      return todos.filter((todo) => todo.completed === true);
    default:
      return todos;
  }
}
