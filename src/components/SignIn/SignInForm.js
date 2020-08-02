import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import './SignInForm.css';

export default function SignInForm() {

  const useFormInput = (initialValue) => {
    const [value, setValue] = React.useState(initialValue);
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }

  const username = useFormInput("");
  const password = useFormInput("");
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  // handle button click on login 
  const handleLogin = event => {
    event.preventDefault();
    const params = { username: username.value, password: password.value };
    axios.post("http://localhost:5000/api/login", params)
      .then(response => {
        setUser(username.value)
        navigate(`/dashboard`, { state: { user: user } })
        //redirect into welcome page
      }).catch(err => {
        if (err.response.status === 401) {
          setError(err.response.data.message)
          alert(error)
        }
        else {
          alert("Something went wrong")
        }
      })
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="form-wrapper">
        <label>Username:</label>
        <input required name="username" {...username} type="text" />
        <label>Password:</label>
        <input required name="password" {...password} type="password" />
        <button className="btn sign-in-btn" type="submit">Sign In</button>
      </div>
    </form>
  );
}
