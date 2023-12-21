// Register.js

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here
    console.log("Registering with:", username, email, password);
  };

  return (
    <Form
      style={{
        maxWidth: "350px",
        maxHeight: "400px",
        textAlign: "center",
        backgroundColor: "skyblue",
        padding: "30px",
        borderRadius: "20px",
        margin: "10vh auto",
        marginTop:"20vh"
      }}
      onSubmit={handleSubmit}>
      <h2>Register</h2>
      <Form.Group style={{ marginTop: "20px" }} controlId="username">
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </Form.Group>
      <Form.Group style={{ marginTop: "20px" }} controlId="email">
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </Form.Group>
      <Form.Group style={{ marginTop: "20px" }} controlId="password">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </Form.Group>
      <Button
        style={{ marginTop: "20px", width: "100%" }}
        variant="primary"
        type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
