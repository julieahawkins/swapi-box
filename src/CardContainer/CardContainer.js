import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = (props) => {
  let mappedCards = [];
  if (props.cards) {
    mappedCards = props.cards.map((person, index) => {
      return (
        <Card 
          key={`card-${index}`}
          charName={person.name} 
          data={person.data}
           />
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