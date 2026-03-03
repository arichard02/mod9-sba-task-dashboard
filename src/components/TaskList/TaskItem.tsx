// the job of task item is to display data

import type { Task, TaskStatus } from "../../types";
import styles from "./TaskItem.module.css";

interface Props {
  task: Task;
  onStatusChange: (id: string, status: TaskStatus) => void;
  onDelete: (id: string) => void;
  theme: "light" | "dark";
}

export default function TaskItem({
  task: { id, title, description, status, priority, dueDate },
  onStatusChange,
  onDelete,
  theme,
}: Props) {
  const taskClass = `${
    status === "completed"
      ? styles.taskCompleted
      : status === "in-progress"
        ? styles.taskInProgress
        : styles.task
  } ${theme === "dark" ? styles.dark : ""}`;

  return (
   <div className={taskClass}>
      <p>{title}</p>
      <p>{description}</p>
      <p>{status}</p>
      <p className={`priority}`}>{priority}</p>
      <p>{new Date(dueDate).toLocaleDateString()}</p>

      <select
        value={status}
        onChange={(e) => onStatusChange(id, e.target.value as TaskStatus)}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button className="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
