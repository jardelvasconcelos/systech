
export default function Card (props){
    return(
        <div className="container-card"> 
            <div className="container-img-card">
                <img className="img-card" src={props.icon} alt="image" />
            </div>
            <div className="container-coment-card">
                <span className="coment-card">{props.coment}</span>
            </div>
        </div>
    )
}