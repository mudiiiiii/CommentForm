import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import auth from './auth';

const Login = (studentEmail) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  //form submit handler to check if either the email or password field is empty
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter an email and password");
    } else {
      // send a request to your server to check if the user exists
      auth.onAuthentication();
      auth.saveToken(email);
      
      // if the user exists, store the user's information in state and redirect to the Comments form
      history.push('/commentsForm');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", height: "50vh", alignItems: "center", justifyContent: "center", backgroundColor: "grey" }}>
      <h1 style={{ margin: "10px 0" }}>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ height: "35px", width: "350px", margin: "10px 0" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ height: "35px", width: "350px", margin: "10px 0" }}
      />
      {error && <p>{error}</p>}
      <button type="submit" style={{ height: "40px", width: "100px", margin: "10px 0" }}>Login</button>
    </form>
  );
};

export default Login;