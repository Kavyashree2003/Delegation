// ManagerPage.js
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import TaskList from './TaskList';
import UserList from './UserList';
import '../Assets/Styles/ManagerPage.css'
import Button from 'react-bootstrap/Button';
import CreateTask from "./CreateTask";


const ManagerPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1 Feature implementation', description: 'Develop a new user authentication feature with email verification for our web application. Ensure seamless integration with the existing user management system.', assignee: 'User A', status: 'Pending' },
    { id: 2, title: 'Task 2 Fix the bug', description: 'Investigate and fix the reported bug causing unexpected behavior in the checkout process. Test thoroughly to ensure a stable solution.', assignee: 'User B', status: 'Pending' },
    { id: 3, title: 'Task 3 Code Review', description: 'Conduct a code review for pull requests related to the recent feature updates. Provide constructive feedback and ensure adherence to coding standards.', assignee: 'User B', status: 'Pending' },
]);

  const [users, setUsers] = useState([
    { id: 1, name: 'User A', role: 'Developer' },
    { id: 2, name: 'User B', role: 'Debugger' },
    { id: 3, name: 'User C', role: 'Reviewer' },
  ]);

  const assignTask = (taskId, assignee) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, assignee, status: 'Assigned' } : task
      )
    );
  };

  const approveTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: 'Approved' } : task
      )
    );
  };

  return (
    <div className="manager-page" style={{display :"-ms-flexbox"}} >
      <h1>Manager Page</h1>
      {/* <Button variant="primary" style={{color:'whitesmoke'}} as="Link" to="/about">Create Task</Button> */}
      <Link to="/createtask"><Button variant="primary" style={{color:'whitesmoke'}}>Create Task</Button></Link>
      <div className="section">
      <Link to="/List"><Button variant="primary" style={{color:'whitesmoke'}}>Task list</Button></Link>
        <h2>Task List</h2>
        <TaskList tasks={tasks} assignTask={assignTask} approveTask={approveTask} />
      </div>

      <div className="section">
        <h2>User List</h2>
        <UserList users={users} />
      </div>
    </div>
  );
};

export default ManagerPage;
