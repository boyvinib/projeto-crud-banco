import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
      </ul>
      <p className={styles.copy_right}>
        <span>PROJETO</span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer