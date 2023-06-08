import "../style/button.css";

const ButtonCard = ({button})=>{
    return(
        <div className="button-container">
           <button className="button">{button}</button>
        </div>
    )
}

export default ButtonCard;