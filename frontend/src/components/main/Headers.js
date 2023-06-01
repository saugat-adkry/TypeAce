import styles from './header.module.css';
import { Link } from 'react-router-dom';


function Header() {

  return (
      <header>
        <Link to={"/"} className={styles.typeAce}>
          TypeAce
        </Link>
      </header>
  );
}

export default Header;