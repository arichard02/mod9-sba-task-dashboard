import type { Task, TaskStatus } from "../../types";
import { useState } from "react";

// export type TaskStatus = "pending" | "in-progress" | "completed";

export default function TaskItem({

  title,
  description,
  status,
  priority,
  dueDate,
}: Task) {

 // create editable state from the incoming status
const [currentStatus, setCurrentStatus] = useState<TaskStatus>(status);

  function markAsComplete() {
    setCurrentStatus("completed");
  }

  function getStyle() {
    if(currentStatus === "completed"){
      return "task-completed"; 
    } 
    else if (currentStatus === "in-progress") {
      return "task-in-progress"
    }
    else {
      return "task"
    } 
  }

  return (
    <div className={getStyle()} >
      <p>{title}</p>
      <p>{description}</p>
      <p>{currentStatus}</p>
      <p>{priority}</p>
      <p>{dueDate}</p>
      <button className="button" onClick={markAsComplete}>Mark As Complete</button>
    </div>
  );
}
