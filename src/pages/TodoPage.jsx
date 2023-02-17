import React, { useState } from "react";
import Todos from "../components/todo/Todos";
import TodoFilter from "../components/todo/TodoFilter";
import { DarkModeProvider } from "../context/DarkModeContext";

const filters = ["all", "active", "completed"];

export default function TodoPage() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <TodoFilter
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
      />
      <Todos filter={filter} />
    </DarkModeProvider>
  );
}
