import { useState } from "react";
import type { Task } from "../../types";
import TaskItem from "./TaskItem";

const initialTasks: Task[] = [
  {
    id: "001",
    title: "Task 1",
    description: "Description 1",
    status: "pending",
    priority: "low",
    dueDate: "2/19/2026",
  },
  {
    id: "002",
    title: "Task 2",
    description: "Description 2",
    status: "in-progress",
    priority: "low",
    dueDate: "2/15/2026",
  },
  {
    id: "003",
    title: "Task 3",
    description: "Description 3",
    status: "completed",
    priority: "low",
    dueDate: "2/13/2026",
  },
];

export default function TaskList() {
  return (
    <div>
      {initialTasks.map((task) => {
        return <TaskItem key={`task_${task.id}`} {...task} />;
      })}
    </div>
  );
}
