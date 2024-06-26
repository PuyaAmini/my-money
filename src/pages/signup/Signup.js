import React, { useState } from "react";
import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName);
  };

  return (
    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
      
      <h2>SignUp</h2>

      <label>
        <span>display name:</span>
        <input type="text" 
        onChange={(e) => setDisplayName(e.target.value)}
        value={displayName} />
      </label>

      <label>
        <span>Email:</span>
        <input type="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email} />
      </label>

      <label>
        <span>Password:</span>
        <input type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}/>
      </label>

      <button className="btn">Signup</button>
      
      <label></label>
    </form>
  );
}
