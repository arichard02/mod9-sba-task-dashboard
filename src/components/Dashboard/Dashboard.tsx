import { useState } from "react";
import type { Task, TaskStatus } from "../../types";
import TaskList from "../TaskList/TaskList";

// starting task 1 marked completed
const InitialTasks: Task[] = [
  {
    id: "001",
    title: "Task 1",
    description: "Description 1",
    status: "completed",
    priority: "low",
    dueDate: "2/19/2026",
  },

  {
    id: "002",
    title: "Task 2",
    description: "Description 2",
    status: "in-progress",
    priority: "low",
    dueDate: "2/17/2026",
  },

  {
    id: "003",
    title: "Task 3",
    description: "Description 3",
    status: "pending",
    priority: "low",
    dueDate: "2/15/2026",
  },
];

export default function Dashboard() {
  // task is current value of state
  // setTask is function to update state
  const [tasks, setTasks] = useState<Task[]>(InitialTasks);

  function handleStatusChange(id: string, newStatus: TaskStatus) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">My Task List</h1>
      <TaskList tasks={tasks} onStatusChange={handleStatusChange} />
    </div>
  );
}
