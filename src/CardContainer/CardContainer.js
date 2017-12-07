import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = (props) => {
  let mappedCards = [];
  if (props.cards) {
    mappedCards = props.cards.map((card, index) => {
      return (
        <Card 
          data={card.data}
          title={card.name} 
          key={`card-${index}`}
          type={card.type}
          displaying={props.displaying} 
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