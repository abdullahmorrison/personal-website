//Components
import Card from './projectsComponents/Card'

//images
import superTFBingo from './images/supertfbingo.png'

const Projects=()=>{
    return(
        <div>
            <Card 
                imgSrc={superTFBingo} 
                title="SuperTF Bingo"
                websiteLink="https://supertfbingo.com"
                gitHubLink="https://github.com/abdullahmorrison/SuperTFBingo"
                description="A website that lets you play a bingo game about the Twitch streamer, SuperTF"
            />
            {/* <Card 
                imgSrc={} 
                title=""
                websiteLink=""
                gitHubLink=""
                description=""
            />
            <Card 
                imgSrc={} 
                title=""
                websiteLink=""
                gitHubLink=""
                description=""
            /> */}
        </div>
    )
}
export default Projects