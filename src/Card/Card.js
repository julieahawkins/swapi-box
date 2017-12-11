import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ card, updateFavorites }) => {
  const cardClass = card.fav 
    ? 'Card favorite'
    : 'Card' ;

  let mappedCardInfo = Object.keys(card.info).map((stat, index) => {
    return (
      <span key={`span-${index}`}>{`${stat}: ${card.info[stat]}`}</span>
    );
  });

  if (card.type === 'planets') {
    mappedCardInfo = Object.keys(card.info).map((stat, index) => {
      if (stat === 'residents') {
        const mappedResidents = card.info.residents.length > 0 
          ? card.info.residents.map((resident, index) => {
            return (
              <li key={`li-${index}`}>{resident}</li>
            );
          })
          : <li>N/A</li>;
        return (
          <ul key={`ul-${index}`}>{stat}: {mappedResidents}</ul>
        );
      }
      return (
        <span key={`span-${index}`}>{`${stat}: ${card.info[stat]}`}</span>
      );
    });
  }

  return (
    <div className={cardClass}>
      <div className='heading'>
        <Button 
          name='*'
          card={card}
          updateFavorites={updateFavorites}/>
        <p>{card.name}</p>
      </div>
      <div className={`card-info-container`}>
        {
          mappedCardInfo
        }
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  updateFavorites: PropTypes.func
};

export default Card;