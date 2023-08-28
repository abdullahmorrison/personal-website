import styles from './nav.module.scss'

export default function nav() {
  return (
    <nav className={styles.nav}>
      <h3>My Porfolio<span className={styles.period}>.</span></h3>
      <ul>
        <li>
          <h4><a href="">Home</a></h4>
        </li>
        <li>
          <h4><a href="">About</a></h4>
        </li>
        <li>
          <h4><a href="">Contact</a></h4>
        </li>
      </ul>
    </nav>
  )
}
