// TaskItem.js

import React from 'react';

const TaskItem = ({ task, assignTask, approveTask }) => (
  <div>
    <h3>{task.title}</h3>
    <p>{task.description}</p>
    <p>Assignee: {task.assignee}</p>
    <p>Status: {task.status}</p>
    {task.status === 'Pending' && (
      <button onClick={() => assignTask(task.id, 'Manager')}>Assign Task</button>
    )}
    {task.status === 'Assigned' && (
      <button onClick={() => approveTask(task.id)}>Approve Task</button>
    )}
  </div>
);

export default TaskItem;
