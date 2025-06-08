import styles from "./Header.module.scss";
import logo from "./../../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className={styles["nav"]}>
        <Link to="/">
          <img src={logo} alt="meet-logo" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
