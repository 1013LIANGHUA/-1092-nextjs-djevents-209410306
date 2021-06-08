import styles from './navbar.module.css'

export default function navbar() {
    return (
        <div className={styles.container}>
          <header className={styles.header}>
      <h1 className={styles.logo}>Logo</h1>
      <input type="checkbox" id="nav-toggle" className={styles["nav-toggle"]}/>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Home</a>
          </li>
          <li><a href="#">About</a>
          </li>
          <li><a href="#">Blog</a>
          </li>
          <li><a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className={styles["nav-toggle-label"]}>
        <span></span>
      </label>
    </header>

    <div className={styles.content}>
      <h2>Your content would go here</h2>
    </div>
    </div>
    );
    
}
