//Components
import Card from './projectsComponents/Card'

//images
import superTFBingo from './images/supertfbingo.png'
import pgpScale from './images/pgpscale.png'
import personalWebsite from './images/personalwebsite.png'
import signInPage from './images/signinpage.png'
import xqcBingo from './images/xqcbingo.png'
import mayaBingo from './images/mayabingo.png'

//CSS
import styles from './projects.module.css'

const cardData=[
    {
        imgSrc: mayaBingo, 
        imgAltText: "Maya Bingo",
        title:"Maya Bingo",
        websiteLink:"https://mayahigabingo.netlify.app",
        gitHubLink:"https://github.com/abdullahmorrison/MayaBingo",
        description:{
            about:"A website that lets users play a bingo game about the Twitch streamer and animal conservationist, Maya Higa",
            techStack: ['Angular', 'SCSS']
        },
        incomplete: true
    },
    {
        imgSrc:superTFBingo, 
        imgAltText: "SuperTF Bingo",
        title:"SuperTF Bingo",
        websiteLink:"https://supertfbingo.com",
        gitHubLink:"https://github.com/abdullahmorrison/SuperTFBingo",
        description:{
            about:"A website that lets you play a bingo game about the Twitch streamer, SuperTF",
            techStack: ['Vue','CSS']
        }
    },
    {
        imgSrc:pgpScale, 
        imgAltText: "PGP Scale",
        title:"The PGP Scale",
        websiteLink:"https://pgpscale.netlify.app/",
        gitHubLink:"https://github.com/abdullahmorrison/ThePerceivedGoalProgressScale",
        description:{
            about:"A mindfullness tool that helps users track how they feel about the possibility of achieving their goals.",
            techStack: ['MongoDB','Express','React','NodeJS']
        },
        incomplete: true
    },
    {
        imgSrc:personalWebsite,
        imgAltText: "Personal Website",
        title:"Personal Website",
        websiteLink:"https://abdullahmorrison.com",
        gitHubLink:"https://github.com/abdullahmorrison/PersonalWebsite",
        description:{
            about:"A website that showcases my personal projects.",
            techStack: ['React','SASS']
        }
    },
    {
        imgSrc:signInPage, 
        imgAltText: "Sign-in Page",
        title:"Sign-In Page",
        websiteLink:"https://abdullahsigninpage.netlify.app/",
        gitHubLink:'https://github.com/abdullahmorrison/Sign-in-Page',
        description:{
            about:"A sign-in page that was created for a job interview take-home project",
            techStack: ['React','SASS']
        }
    },
    {
        imgSrc:xqcBingo,
        imgAltText: "xQc Bingo",
        title:"xQc Bingo",
        websiteLink:'https://xqcbingo.com/',
        gitHubLink:'https://github.com/abdullahmorrison/xQcBingo',
        description:{
            about:"A website that lets you play a bingo game about the Twitch streamer, xQcOW",
            techStack: ['HTML', 'CSS','JQuery']
        }
    }
]

const Projects=()=>{
    return(
        <main className={styles.projectsContainer}>
            <h2 className={styles.title}>My Projects</h2>
            <h3 className={styles.description}>
                These are the projects that I have been working on.
                They are ordered by how much I value the project.
            </h3>
            <div className={styles.projects}>
                {cardData.map((card)=>
                    <Card
                        imgSrc={card.imgSrc} 
                        imgAltText={card.imgAltText}
                        title={card.title}
                        websiteLink={card.websiteLink}
                        gitHubLink={card.gitHubLink}
                        description={card.description}
                        incomplete={card.incomplete}
                    /> 
                )}
            </div>
        </main>
    )
}
export default Projects