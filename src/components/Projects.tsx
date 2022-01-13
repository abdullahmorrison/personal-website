//Components
import Card from './projectsComponents/Card'

//images
import superTFBingo from './images/supertfbingo.png'
import pgpScale from './images/pgpscale.png'
import personalWebsite from './images/personalwebsite.png'
import signInPage from './images/signinpage.png'
import xqcBingo from './images/xqcbingo.png'

//CSS
import styles from './projects.module.css'

const Projects=()=>{
    return(
        <main className={styles.projectsContainer}>
            <h2 className={styles.title}>My Projects</h2>
            <div className={styles.projects}>
                <Card 
                    imgSrc={pgpScale} 
                    title="The PGP Scale"
                    websiteLink="https://pgpscale.netlify.app/"
                    gitHubLink="https://github.com/abdullahmorrison/ThePerceivedGoalProgressScale"
                    description="A mindfullness tool"
                />
                <Card 
                    imgSrc={superTFBingo} 
                    title="SuperTF Bingo"
                    websiteLink="https://supertfbingo.com"
                    gitHubLink="https://github.com/abdullahmorrison/SuperTFBingo"
                    description="A website that lets you play a bingo game about the Twitch streamer, SuperTF"
                />
                <Card 
                    imgSrc={personalWebsite} 
                    title="My Personal Website"
                    websiteLink="https://abdullahmorrison.com"
                    gitHubLink="https://github.com/abdullahmorrison/PersonalWebsite"
                    description="My personal website."
                />
                <Card 
                    imgSrc={signInPage} 
                    title="Sign-In Page"
                    websiteLink="https://abdullahsigninpage.netlify.app/"
                    gitHubLink='https://github.com/abdullahmorrison/Sign-in-Page'
                    description="A sign-in page"
                />
                <Card 
                    imgSrc={xqcBingo} 
                    title="xQc Bingo"
                    websiteLink='https://xqcbingo.com/'
                    gitHubLink='https://github.com/abdullahmorrison/xQcBingo'
                    description="A website that lets you play a bingo game about the Twitch streamer, xQcOW"
                />
            </div>
        </main>
    )
}
export default Projects