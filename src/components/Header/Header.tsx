import styles from "./Header.module.scss";
import logo from "./../../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <nav className={styles["nav"]}>
        <img src={logo} alt="meet-logo" />
      </nav>
    </header>
  );
}

export default Header;
