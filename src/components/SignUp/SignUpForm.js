import React from "react";
import { navigate } from "@reach/router";
import './SignUpForm.css';
import axios from 'axios';

export default function SignUpForm() {

  const [error, setError] = React.useState(null);
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
  const fname = useFormInput("");
  const lname = useFormInput("");
  const username = useFormInput("");
  const password = useFormInput("");
  const occupation = useFormInput("");
  const phone = useFormInput("");

  // handle button click on Signup 
  const handleSignup = event => {
    event.preventDefault();
    const params = {
      fname: fname.value,
      lname: lname.value,
      username: username.value,
      password: password.value,
      occupation: occupation.value,
      phone: phone.value
    };
    axios.post("http://localhost:5000/api/users", params)
      .then(res => {
        navigate(`/login`)
        //redirect into welcome page
      }).catch(err => {
        if (err.response.status === 400) {
          setError(err.response.data.message)
          alert(error)
        }
        else {
          alert("Something went wrong")
        }
      })
  }

  return (
    <form onSubmit={handleSignup}>
      <div className="form-wrapper">
        <label>First name:</label>
        <input name="first_name" {...fname} type="text" />
        <label>Last name:</label>
        <input name="last_name" {...lname} type="text" />
        <label>Username:</label>
        <input name="username" {...username} type="text" />
        <label>Password:</label>
        <input name="password" {...password} type="password" />
        <label>Occupation:</label>
        <input name="occupation" {...occupation} type="text" />
        <label>Phone:</label>
        <input name="phone" {...phone} type="number" />
        <button className="btn sign-up-btn" type="submit">Sign Up</button>
      </div>
    </form>
  );
}
