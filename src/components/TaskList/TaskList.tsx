// import { useState } from "react";
import type { Task, TaskStatus } from "../../types";
import TaskItem from "./TaskItem";


interface TaskListProps {
  tasks: Task[];
  onStatusChange: (id: string, status: TaskStatus) => void;
  onDelete: (id: string) => void;
  theme: "light" | "dark";
}

export default function TaskList({ 
  tasks,
  onStatusChange, 
  onDelete,
  theme,
}: TaskListProps) {
  return (
   <div className={`task-list ${theme}`}>
      {tasks.map((task) => (
        <TaskItem
          key={`task_${task.id}`}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
          theme={theme}
        />
      ))}
    </div>
  );
}
