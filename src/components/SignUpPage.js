import { useState } from "react";
import { useDispatch } from "react-redux";
//import { authReducer } from "./redux/AuthSlice";
import { signupUser } from "../redux/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

 export const SignUpPage=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useDispatch();
  const navigate = useNavigate();
  const handleSubmit =(e)=>{
     e.preventDefault();
     dispath(signupUser({email,password})).unwrap().then(()=>navigate("/movie"))
      
  }
  return(
    <form className={styles.form} onSubmit={handleSubmit}>
  <h1 className={styles.title}>Sign Up</h1>

  <input
    className={styles.input}
    type="email"
    value={email}
    placeholder="Email"
    onChange={(e) => setEmail(e.target.value)}
  />

  <input
    className={styles.input}
    type="password"
    value={password}
    placeholder="Password"
    onChange={(e) => setPassword(e.target.value)}
  />

  <button className={styles.button}>Sign Up</button>

  <p className={styles.text}>
    Go to <Link className={styles.link} to="/login">Login</Link>
  </p>
</form>
  )
}
