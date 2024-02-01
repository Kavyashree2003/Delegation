import React, { useState } from 'react';

const CreateTask = ({ onTaskCreate }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleCreateTask = () => {
    if (taskTitle.trim() === '') {
      alert('Task title cannot be empty.');
      return;
    }

    // Assuming you have a function to handle task creation in the parent component
    onTaskCreate({ title: taskTitle, description: taskDescription });

    // Reset the form after task creation
    setTaskTitle('');
    setTaskDescription('');
  };

  return (
    <div>
      <h1>Create Task</h1>
      <div className="mb-3">
        <label htmlFor="taskTitle" className="form-label">
          Title:
        </label>
        <input
          type="text"
          className="form-control"
          id="taskTitle"
          value={taskTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="taskDescription" className="form-label">
          Description:
        </label>
        <textarea
          className="form-control"
          id="taskDescription"
          value={taskDescription}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleCreateTask}>
        Create Task
      </button>
    </div>
  );
};

export default CreateTask;
