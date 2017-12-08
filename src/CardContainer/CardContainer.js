import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = (props) => {
  let mappedCards = [];
  if (props.cards) {
    mappedCards = props.cards.map((card, index) => {
      return (
        <Card 
          type={card.type}
          info={card.info}
          title={card.name} 
          key={`card-${index}`}
          displaying={props.displaying} 
          updateFavorites={props.updateFavorites} />
      );
    });
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
  );
};

CardContainer.propTypes = {
  cards: PropTypes.array,
  displaying: PropTypes.string,
  updateFavorites: PropTypes.func
};

export default CardContainer;