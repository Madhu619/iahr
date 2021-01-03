import React from "react";
import history from '../history';

const Cards = ({card}) => {

  const goToCarddetails = (card) => {
    localStorage.setItem('selectedCard',JSON.stringify(card))
    history.push('/'+card.id);
    window.location.reload();
  }

  return (
    <div className='card' onClick={() => goToCarddetails(card)}>
      <div className='img-wrapper'> <img src={card.Image} alt={card.Name} /></div>
      <div className='user-name'><h3>{card.name}</h3></div>
    </div>
  )
}

export default Cards;