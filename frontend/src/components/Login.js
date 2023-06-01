import styles from './login.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function submited(event) {
    event.preventDefault();
  
    axios.post('http://localhost:8000/api/', {
      username,
      password,
    })
    .then((response) => {
      console.log(response);
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      window.location = '/type-ace';
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  return (
    <div className={styles.loginPage}>
      <header>
        <Link to={"/"} className={styles.typeAce}>
          TypeAce
        </Link>
      </header>
      <div className={styles.loginForm}>
        <form onSubmit={submited} >
          <input
            type="text"
            placeholder="enter username"
            id="username"
            name='username'
            autoComplete="off" onChange={(e) => setUsername(e.target.value) } required
          />
          <input type="password" placeholder="enter password" id="password" name='passsword' onChange={(e) => setPassword(e.target.value) } required/>
          <button type="submit" id="login" style={{ width: '30%' }}>
            Login
          </button>
        </form>
        <div className={styles.signupOption}>
          <p>Don't have an account ?</p>
          <Link
            to={'/register'}
            style={{ textDecoration: 'none', width: '30%' }}
          >
            <button type="button" id="signup">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
