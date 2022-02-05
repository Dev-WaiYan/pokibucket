import styles from "./layout.module.css";
function Footer() {
  return (
    <footer className="mt-4 text-end">
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
