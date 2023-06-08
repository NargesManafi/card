import "../style/image.css";

const ImageCard = ({image})=>{
    return(
        <div>
            <img src={image} className="image" />
        </div>
    )
}

export default ImageCard;