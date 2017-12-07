import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = (props) => {
  let mappedCards = [];
  if (props.cards) {
    mappedCards = props.cards.map((card, index) => {
      return (
        <Card 
          cardData={card.data}
          cardTitle={card.name} 
          key={`card-${index}`}
          type={props.displaying} 
          updateFavorites={props.updateFavorites} />
      )
    })
  } else {
    mappedCards = null;
  }
  return (
    <div className='CardContainer'>
    {
      mappedCards
    }
    </div>
  )
}

export default CardContainer;