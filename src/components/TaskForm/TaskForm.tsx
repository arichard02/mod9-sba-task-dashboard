// the form creates the data
import { useState } from "react";
import  type { Task, TaskPriority } from "../../types";
import styles from "./TaskForm.module.css";

interface Props {
    onAddTask: (task: Task) => void;
}

export default function TaskForm({ onAddTask }:Props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<TaskPriority>("low");
    const [dueDate, setDueDate] = useState("");
    const [error, setError] = useState("");
    


function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim()) {
        setError("Title is required");
        return;
    }

    if(!dueDate) {
        setError("Due date is required");
        return;
    }

    const newTask: Task = {
        id: Date.now().toString(),
        title,
        description,
        status: "pending",
        priority,
        dueDate,
    }

    onAddTask(newTask);

    setTitle("");
    setDescription("");
    setPriority("low");
    setDueDate("");
    setError("");


    }

    return (

        <form onSubmit={handleSubmit} className={styles.form}>
  <input
    type="text"
    placeholder="Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className={styles.input}
  />

  <textarea
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className={styles.textarea}
  />

  <select
    value={priority}
    onChange={(e) => setPriority(e.target.value as TaskPriority)}
    className={styles.select}
  >
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  </select>

  <input
    type="date"
    value={dueDate}
    onChange={(e) => setDueDate(e.target.value)}
    className={styles.date}
  />

  {error && <p className={styles.error}>{error}</p>}

  <button type="submit" className={styles.button}>
    Add Task
  </button>
</form>

    );
}

    //     <form onSubmit={handleSubmit}>
    //         <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
    //     />

    //     <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}
    //     />

    //     <select value={priority} onChange={(e) => setPriority(e.target.value as TaskPriority)}
    //     >
    //         <option value="low">Low</option>
    //         <option value="medium">Medium</option>
    //         <option value="high">High</option>
    //     </select>

    //     <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}
    //     />


    //     {error && <p style={{color: "red"}}>{error}</p>}

    //     <button type="submit">Add Task</button>
    //     </form>

