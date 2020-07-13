import React from "react";
import { navigate } from "@reach/router";
import './SignInForm.css';

export default function SignInForm(props) {
  const [user,setUser]=React.useState(null);

  const onChangeUser=(e)=>{
    setUser(e.target.value)
  }
  return (
    <form onSubmit={e => { e.preventDefault(); navigate(`/dashboard`,{ state: { user:user }})}}>
      <div className="form-wrapper">
        <label>Username:</label>
        <input required name="username"  value={user} type="text"  onChange={onChangeUser} />
        <label>Password:</label>
        <input required name="password" type="password" />
        <button className="btn sign-in-btn" type="submit">Sign In</button>
      </div>
    </form>
  );
}
