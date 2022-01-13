//CSS
import styles from './card.module.css'

//Images
import websiteIcon from '../images/websiteIcon.svg'
import gitHubIcon from '../images/gitHubIcon.svg'

interface CardProps {
    imgSrc: string,
    title: string,
    websiteLink?: string,
    gitHubLink?: string,
    description: string
}
const Card=(props:CardProps)=>{
    return(
        <div className={styles.card}>
           <img src={props.imgSrc} alt=""/> 
           <div className={styles.info}>
               <header>
                    <h3>{props.title}</h3>
                    <div className={styles.links}>
                            {props.websiteLink ?
                                <a href={props.websiteLink} target='_blank'><img src={websiteIcon} alt="Website Icon" /></a>
                                : null
                            }
                            {props.gitHubLink ?
                                <a href={props.gitHubLink} target='_blank'><img src={gitHubIcon} alt="GitHub Icon" /></a>
                                : null
                            }
                    </div>  
                </header>
                <p>{props.description}</p>
           </div>
        </div>
    )
}
export default Card