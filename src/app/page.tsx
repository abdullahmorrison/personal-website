import styles from './page.module.scss'
import Nav from './nav'

export default function Home() {
  return (
    <div>
      <main className={styles.hero}>
        <Nav/>
        <h1 className={styles.name}>
          <span className={styles.firstName}><p>Abdullah</p></span>
          <span className={styles.lastName}><p>Morrison</p></span> 
        </h1>
      </main>

      <section className={styles.project}>
        <div className={styles.projectInfo}>
          <h3 className={styles.number}>01</h3>
          <h3 className={styles.name}>Motivation Scale</h3>
          <p className={styles.description}>A mindfulness tool about motivation.</p>

          <ul className={styles.links}>
            <li><a href="">view project</a></li>
            <li><a href="">git repo</a></li>
          </ul>
        </div>
      </section>

    </div>
  )
}
