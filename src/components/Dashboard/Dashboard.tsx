import { useState } from "react";
import type { Task, TaskStatus } from "../../types";
import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";

// initial task that shows when app is loaded
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
    setTasks((prevTask) => prevTask.filter((task) => task.id !==id))
  }


  return (
    <div className="dashboard">
      <h1 className="text-3xl font-bold mb-2">My Task List</h1>

      <TaskForm onAddTask={handleAddTask} />

      <TaskList tasks={tasks} onStatusChange={handleStatusChange} onDelete={handleDelete}/>
          </div>
  );
}
