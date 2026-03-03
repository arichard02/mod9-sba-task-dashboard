import { useState, useEffect } from "react";
import type { Task, TaskStatus, TaskPriority } from "../../types";
import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import TaskFilter from "../TaskFilter/TaskFilter";
import styles from "./Dashboard.module.css";

// initial task that shows when app is loaded
const InitialTasks: Task[] = [
  {
    id: "001",
    title: "Task 1",
    description: "Description 1",
    status: "completed",
    priority: "low",
    dueDate: "2026-02-19",
  },

  {
    id: "002",
    title: "Task 2",
    description: "Description 2",
    status: "in-progress",
    priority: "low",
    dueDate: "2026-02-01",
  },

  {
    id: "003",
    title: "Task 3",
    description: "Description 3",
    status: "pending",
    priority: "low",
    dueDate: "2026-02-15",
  },
];

export default function Dashboard() {
  // task is current value of state
  // setTask is function to update state
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : InitialTasks;
  });

  const [statusFilter, setStatusFilter] = useState<TaskStatus | "all">("all");
  const [priorityFilter, setPriorityFilter] = useState<TaskPriority | "all">(
    "all",
  );
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState<"title" | "dueDate">("title");

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "completed",
  ).length;

  // update task status
  function handleStatusChange(id: string, newStatus: TaskStatus) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  }

  // add new task from task form
  function handleAddTask(newTask: Task) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleDelete(id: string) {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  }

  function handleClearCompleted() {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.status !== "completed"),
    );
  }

  const filteredTasks = tasks
    .filter((task) => {
      const matchesStatus =
        statusFilter === "all" || task.status === statusFilter;
      const matchesPriority =
        priorityFilter === "all" || task.priority === priorityFilter;
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesStatus && matchesPriority && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOrder === "title") {
        return a.title.localeCompare(b.title);
      }

      if (sortOrder === "dueDate") {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      }

      return 0;
    });

  return (
    <div className={`${styles.dashboard} ${styles[theme]}`}>
      <h1 className="text-3xl font-bold mb-2">My Task List</h1>

      <div className="theme-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          />

          <span className="slider"></span>
        </label>
        <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
      </div>

      <TaskForm onAddTask={handleAddTask} />

      <TaskFilter
        statusFilter={statusFilter}
        priorityFilter={priorityFilter}
        search={search}
        setStatusFilter={setStatusFilter}
        setPriorityFilter={setPriorityFilter}
        setSearch={setSearch}
      />

      <div className={styles.sortContainer}>
        <label>Sort By:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "title" | "dueDate")}
          className={styles.sortSelect}
        >
          <option value="title">Title</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>

      <div className={styles.statsContainer}>
        <div>
          Total: {totalTasks} | Completed: {completedTasks}
        </div>

        <button onClick={handleClearCompleted} className={styles.clearButton}>
          Clear Completed
        </button>
      </div>

      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        theme={theme}
      />
    </div>
  );
}
