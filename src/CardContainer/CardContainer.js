import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = (props) => {
  let mappedCards = [];
  if (props.cards) {
    mappedCards = props.cards.map((card, index) => {
      return (
        <Card 
          type={card.type}
          data={card.data}
          title={card.name} 
          key={`card-${index}`}
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
    {
      (props.displaying === 'favorites' && !props.cards.length) &&
      <h1>You have no favorites... COLLECT SOME!</h1>
    }
    </div>
  )
}

export default CardContainer;