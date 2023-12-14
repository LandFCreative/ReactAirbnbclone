import React from "react"

export default function Card(props) {
    console.log(props)
    return (
        <section className="cardcontainer">
            <div className="cardimage">
                <img src={`../images/${props.img}`} />
            </div>

            <div className="cardstats">
                <img src="../images/star.png" className="cardstar" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p> 
        </section>
        
    )
}