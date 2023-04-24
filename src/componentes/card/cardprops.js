import "./card.css";

export default function Card(props) {
    return (
        <div className="container-img-card">
            <img className="img-card" src={props.icon} alt="image" />
            <p className="coment-card">{props.coment}</p>
        </div>
    )
}