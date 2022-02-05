//CSS
import styles from './card.module.css'

//Images
import externalLinkIcon from '../images/externalLinkIcon.svg'
import gitHubIcon from '../images/gitHubIcon.svg'

interface CardProps {
    imgSrc: string,
    imgAltText: string,
    title: string,
    websiteLink?: string,
    gitHubLink?: string,
    description:{
        about: string,
        techStack: string[]
    } 
}
const Card=(props:CardProps)=>{
    return(
        <div className={styles.card}>
           <img src={props.imgSrc} alt={props.imgAltText}/> 
           <div className={styles.info}>
               <header>
                    <h3>{props.title}</h3>
                    <div className={styles.links}>
                            {props.gitHubLink ?
                                <a href={props.gitHubLink} target='_blank' rel="noreferrer"><img src={gitHubIcon} alt="GitHub Icon" /></a>
                                : null
                            }
                            {props.websiteLink ?
                                <a href={props.websiteLink} target='_blank' rel="noreferrer"><img src={externalLinkIcon} alt="Website Icon" /></a>
                                : null
                            }
                    </div>  
                </header>
                <div className={styles.description}>
                    <p className={styles.about}>{props.description.about}</p>

                    <p className={styles.techStack}>Tech Stack:</p>
                    <ul>
                        {props.description.techStack.map((tech) =>
                            <li key={tech}>
                                {tech}
                            </li>
                        )}
                    </ul>
                </div>
           </div>
        </div>
    )
}
export default Card