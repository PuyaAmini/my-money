import { useState } from "react";

import React from "react";
import styles from "./Login.module.css";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email , password)
  }
  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <h2>LogIn</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>password</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <button className="btn">Login</button>
    </form>
  );
}
