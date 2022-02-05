import styles from "./layout.module.css";
import AppInfo from "constants/appInfo";
import Image from "next/image";

function Header() {
  return (
    <header className="d-flex justify-content-center flex-column align-items-center">
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{AppInfo.Title}</h1>
      </div>

      <div className={styles.logoContainer}>
        <Image
          src="/imgs/pokibucket_logo.png"
          width="50px"
          height="50px"
          alt="logo"
        />
      </div>
    </header>
  );
}

export default Header;
