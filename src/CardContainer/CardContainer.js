import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = (props) => {
  const mappedCards = props.cards
    ? props.cards.map((card, index) => {
        return (
          <Card 
            card={card} 
            key={`card-${index}`}
            displaying={props.displaying} 
            updateFavorites={props.updateFavorites} />
        );
      })
    : null;

  return (
    <div className='CardContainer'>
      {
        !props.displaying && 
        <h1>Choose a Category</h1>
      }
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