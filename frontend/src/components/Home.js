import { Link } from 'react-router-dom';
import styles from './home.module.css';

function Home(){

    return(
        <div className={styles.mainBody}>
        <header>
        <Link to={'/'} className={styles.typeAce}>
          TypeAce
          </Link>
        </header>
        <div className={styles.hero}> 
          <h1>Test your Typing Speed with TypeAce.</h1>
          <div className={styles.buttons}>
          <Link to={'/login'} style={{ width: '50%', margin: '2rem' , textDecoration: 'none'}}>
          <button className={styles.loginBtn} >Login</button>
          </Link>
          <Link to={'/register'} style={{ width: '50%', margin: '2rem', textDecoration: 'none'}}>
          <button className={styles.signupBtn}>Sign Up</button>
          </Link>
          </div>
        </div>

        </div>

    )

}

export default Home;