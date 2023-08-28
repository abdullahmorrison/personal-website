import styles from './page.module.scss'
import Nav from './nav'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.hero}>
        <Nav/>
        <h1 className={styles.name}>
          <span className={styles.firstName}><p>Abdullah</p></span>
          <span className={styles.lastName}><p>Morrison</p></span> 
        </h1>
      </main>
    </div>
  )
}
