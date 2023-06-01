import styles from "./register.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';


function Register() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [msgClr, setmsgClr] = useState("");
  const [btnD, setBtnD] = useState(false);

  const handleCPasswordChange = (e) => {
    const value = e.target.value;
    setCPassword(value);


    if ( password !== value) {
      setMsg("Passwords not matched");
      setmsgClr("#fc9d9d");
      setBtnD(true);
    } else {
      setMsg("proceed !");
      setmsgClr("#b3f5df");
      setBtnD(false);
    }
  };
  function submited(e) {
    e.preventDefault();
    axios.post('http://localhost:8000/api/', {
      username,
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      window.location = '/type-ace'
    })
    .catch((error) => {
      console.log(error);
    });
  }
  

  return (
    <div className={styles.registerPage}>
      <header>
        <Link to={"/"} className={styles.typeAce}>
          TypeAce
        </Link>
      </header>

      <div className={styles.registerForm}>
        <form onSubmit={submited} >
          <input type="text" placeholder="enter username" id="username" name="username" onChange={(e) => setUsername(e.target.value) } required/>
          <input type="email" placeholder="enter email" id="email" name="email" onChange={(e) => setEmail(e.target.value) } required/>
          <input
            type="password"
            placeholder="enter password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value) } name="password" required
          />
          <input
            type="password"
            placeholder="confirm password"
            id="cPassword"
            value={cPassword}
            onChange={handleCPasswordChange} required
          />
          <p style={{ color: msgClr }}>{msg}</p>
          <button
            type="submit"
            id="signup"
            style={{ width: "30%" }}
            disabled={btnD}
          >
            Sign up
          </button>
        </form>
        <div className={styles.loginOption}>
          <p>Already have an account ?</p>
          <Link to={"/login"} style={{ textDecoration: "none", width: "30%" }}>
            <button type="submit" id="login">
              {" "}
              Login{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
