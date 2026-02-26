// import { useState } from "react";
import type { Task, TaskStatus } from "../../types";
import TaskItem from "./TaskItem";



interface TaskListProps {
  tasks: Task[];
  onStatusChange: (id: string, status: TaskStatus) => void;
}

export default function TaskList({ tasks,onStatusChange,
}: TaskListProps) {
  return (
   <div>
      {tasks.map((task) => (
        <TaskItem
          key={`task_${task.id}`}
          task={task}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}
