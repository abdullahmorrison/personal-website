import styles from './nav.module.scss'

export default function nav() {
  return (
    <nav className={styles.nav}>
      <h4 className={styles.logo}>My Portfolio</h4>
      <ul>
        <li>
          <h5><a href="">Home</a></h5>
        </li>
        <li>
          <h5><a href="">About</a></h5>
        </li>
        <li>
          <h5><a href="">Contact</a></h5>
        </li>
      </ul>
    </nav>
  )
}
