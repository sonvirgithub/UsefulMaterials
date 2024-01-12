import React from "react";
import "./Card.css";


function Card({

  cardData,
}) {
 

  return (
    <div className={`card-container ${cardData.clas}`} >
      <div className="img-container">
        <img
          className={cardData.classname}
          src={require(`../../images/img${cardData.id}.png`)}
          alt="image"
        />
      </div>
       <div className="title-and-date">
          <div  className={`title ${cardData.titleClass}`} id="titleid">{cardData.title}</div>
          <div className="date" >{cardData.date}</div>
          </div>
    </div>
  );
}

export default Card;
