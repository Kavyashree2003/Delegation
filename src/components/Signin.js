import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log("Signing in with:", email, password);
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
      <h2>Sign in</h2>
      <Form.Group style={{ marginTop: "30px" }} controlId="email">
        <Form.Control
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </Form.Group>
      <Form.Group style={{ marginTop: "30px" }} controlId="password">
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </Form.Group>
      <Button
        style={{ marginTop: "30px", width: "100%" }}
        variant="primary"
        type="submit">
        Sign In
      </Button>
      <p style={{marginTop:"20px"}}>Don't have an account <a href="/register">Register</a> </p>
    </Form>
  );
};

export default SignIn;
