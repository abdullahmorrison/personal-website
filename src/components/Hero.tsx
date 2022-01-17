import styles from './hero.module.css'

const Hero=()=>{
    return(
        <header className={styles.header}>
            <h1 className={styles.selfIntro}>Hi, My Name is Abdullah Morrison</h1>
            <h2 className={styles.selfIntro}>I'm a Full-Stack Developer</h2>
            <section className={styles.callToAction}>
                <button><a href="mailto:abdullahmorrison@gmail.com">Contact Me</a></button>
                <button><a href={process.env.PUBLIC_URL + 'Resume.pdf'} download>View My Resume</a></button>
            </section>
        </header>
    )
}
export default Hero