import ImageCard from "./ImageCard";
import TitleCard from "./TitleCrd";
import TextCard from "./TextCard";
import ButtonCard from "./ButtonCard";
import "../style/image.css";
import "../style/title.css";
import "../style/text.css";
import "../style/button.css";
import "../style/card.css";



const Card =({image , title ,text , button})=>{
    return(
        <div className="container">
            <ImageCard image={image}/>
            <TitleCard title={title}/>
            <TextCard text={text}/>
            <div className="button-container">
            <ButtonCard  className="button" button={"SHARE"}/>
            <ButtonCard className="button" button={"LEARN MORE"}/>
            </div>
        </div>
    )
}

export default Card;