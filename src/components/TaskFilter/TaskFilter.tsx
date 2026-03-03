import type { TaskStatus, TaskPriority } from "../../types";
import styles from "./TaskFilter.module.css";

interface Props {
    statusFilter: TaskStatus | "all";
    priorityFilter: TaskPriority | "all";
    search: string;
    setStatusFilter: (status: TaskStatus | "all") => void;
    setPriorityFilter: (priority: TaskPriority | "all") => void;
    setSearch: (text: string) => void;
}

export default function TaskFilter({
    statusFilter,
    priorityFilter,
    search,
    setStatusFilter,
    setPriorityFilter,
    setSearch,
}: Props) {


return (
  <div className={styles.taskFilter}>
    <input
      type="text"
      placeholder="Search task..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value as TaskStatus | 'all')}
    >
      <option value="all">All Statuses</option>
      <option value="pending">Pending</option>
      <option value="in-progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>

    <select
      value={priorityFilter}
      onChange={(e) => setPriorityFilter(e.target.value as "low" | "medium" | "high" | 'all')}
    >
      <option value="all">All Priorities</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  </div>
);
}