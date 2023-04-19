import "./card.css";

export default function Card(props) {
    return (
       
            <div className="container-item-card">
                <div className="container-img-card">
                    <img className="img-card" src={props.icon} alt="image" />
                    <p className="coment-card">{props.coment}</p>
                </div>
                {/* <div className="container-coment-card">
                   
                </div> */}
            </div>
        
    )
}