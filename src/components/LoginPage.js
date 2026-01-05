import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/AuthSlice";
import styles from "../components/Login.module.css";


const LoginPage =()=>{
 const[email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 const dispath = useDispatch();
 const {loading} = useSelector((state)=>state.auth);
 const handilLogin =(e)=>{
    e.preventDefault();
    dispath(loginUser({email,password})).unwrap().then(()=>navigate("/movie"))
    .catch((err)=>alert("oop's user does not match"));
 }
 return(
    
<form className={styles.form} onSubmit={handilLogin}>
  <h1 className={styles.title}>Login</h1>

  <input
    className={styles.input}
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <input
    className={styles.input}
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <button className={styles.button} disabled={loading}>
    {loading ? "Logging in..." : "Log In"}
  </button>
  <p  className={styles.text} > Go to <Link to="/" className={styles.link}>SignUp page</Link></p>
</form>
 )
}
export default LoginPage;