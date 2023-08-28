import styles from './page.module.scss'
import Nav from './nav'

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav/>

      <main className={styles.hero}>
        <h1 className={styles.name}>
          <span className={styles.firstName}>Abdullah</span>
          <span className={styles.lastName}>Morrison</span> 
        </h1>
      </main>
    </div>
  )
}
