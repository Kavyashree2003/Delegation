// TaskList.js

import React from 'react';
import TaskItem from './TaskItem'; // Assume you create a TaskItem component

const TaskList = ({ tasks, assignTask, approveTask }) => (
  <div>
    {tasks.map((task) => (
      <TaskItem key={task.id} task={task} assignTask={assignTask} approveTask={approveTask} />
    ))}
  </div>
);

export default TaskList;
