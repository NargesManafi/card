import ImageCard from "./ImageCard";
import TitleCard from "./TitleCrd";
import TextCard from "./TextCard";
import ButtonCard from "./ButtonCard";
import "../style/image.css";
import "../style/title.css";
import "../style/text.css";
import "../style/button.css";
import "../style/card.css";



const Card =()=>{
    return(
        <div className="container">
            <ImageCard 
            image={<img src="../../public/2327.jpg" className="image"/>}
            />
            <TitleCard title={"Lizard"}/>
            <TextCard text={<div className="text">
                Chevrolet is an iconic American car brand known
                for its reliable, dependable, and affordable
                vehicles. Founded in 1911, Chevy has become
                one of the most recognizable car brands in the
                world.
            </div>}/>
            <div className="button-container">
            <ButtonCard  button={<button className="button">SHARE</button>}/>
            <ButtonCard className="button" button={ <button className="button">LEARN MORE</button>}/>
            </div>
        </div>
    )
}

export default Card;