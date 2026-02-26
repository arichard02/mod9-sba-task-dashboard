// the job of task item is to display data 


import type { Task, TaskStatus } from "../../types";

interface Props {
  task: Task;
  onStatusChange: (id: string, status: TaskStatus) => void;
}



export default function TaskItem({

  task: { id, title, description, status, priority, dueDate },
  onStatusChange,
}: Props) {


  function getStyle() {
    
    if(status === "completed") return "task-completed"; 
    if (status === "in-progress") return "task-in-progress";
      return "task";
    
  }

  return (
    <div className={getStyle()}>
      <p>{title}</p>
      <p>{description}</p>
      <p>{status}</p>
      <p>{priority}</p>
      <p>{dueDate}</p>


      {/*  only show button if task is completed  */}
      {status !== "completed" && (

       // button updates parent
      <button className="button" 
      onClick={() => onStatusChange(id, "completed")}
      >
       Mark As Complete
      </button>
      )}
    </div>
  );
}
