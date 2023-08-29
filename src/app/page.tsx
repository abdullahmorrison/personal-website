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

      <section className={`${styles.project} ${styles.p1}`}>
        <div className={styles.projectInfo}>
          <h3 className={styles.number}>01</h3>
          <h3 className={styles.name}>Alveus Ambassadors</h3>
          <p className={styles.description}>A Twitch extension that helps an animal sanctuary educate viewers about animal conservation</p>

          <ul className={styles.links}>
            <li><a href="https://www.twitch.tv/alveussanctuary">view project</a></li>
            <li><a href="https://github.com/alveusgg/extension" target="_blank">git repo</a></li>
          </ul>
        </div>
      </section>
      <section className={`${styles.project} ${styles.p2}`}>
        <div className={styles.projectInfo}>
          <h3 className={styles.number}>02</h3>
          <h3 className={styles.name}>Twitch Chatbot</h3>
          <p className={styles.description}>A chatbot that tells jokes, and facts, and links fun images for Twitch chatters to enjoy.</p>

          <ul className={styles.links}>
            <li><a href="https://github.com/abdullahmorrison/TwitchChatBot" target="_blank">git repo</a></li>
          </ul>
        </div>
      </section>
      <section className={`${styles.project} ${styles.p3}`}>
        <div className={styles.projectInfo}>
          <h3 className={styles.number}>03</h3>
          <h3 className={styles.name}>Motivation Scale</h3>
          <p className={styles.description}>A mindfulness tool about motivation.</p>

          <ul className={styles.links}>
            <li><a href="https://github.com/abdullahmorrison?tab=repositories" target="_blank">git repo</a></li>
          </ul>
        </div>
      </section>
      <section className={`${styles.project} ${styles.p4}`}>
        <div className={styles.projectInfo}>
          <h3 className={styles.number}>04</h3>
          <h3 className={styles.name}>Erobb221 Twitch Extension</h3>
          <p className={styles.description}>A Twitch extension that lets viewers play bingo about and throw tomatoes at erobb221.</p>

          <ul className={styles.links}>
            <li><a href="https://github.com/abdullahmorrison/Erobb221TwitchExtension" target="_blank">git repo</a></li>
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>
        <h4 className={styles.logo}>My Portfolio</h4>
        <ul>
          <li><a href="https://linkedin.com/in/abdullah-morrison" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/abdullahmorrion" target="_blank">GitHub</a></li>
          <li><a href="https://1drv.ms/w/s!AqCqUgZCz_SygvU10zYLa_qjeCIFJw?e=ZGIhZ1" target='_blank'>My Resume</a></li>
        </ul>
        <p>This website was made with NextJS.</p>
      </footer>
    </div>
  )
}
