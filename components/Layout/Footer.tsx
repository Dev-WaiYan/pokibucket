import styles from "./layout.module.css";
function Footer() {
  return (
    <footer className="mt-4 text-center">
      Powered by{" "}
      <a
        className={styles.link}
        href="https://github.com/Dev-WaiYan"
        target="_blank"
      >
        Dev-WaiYan
      </a>
    </footer>
  );
}

export default Footer;
