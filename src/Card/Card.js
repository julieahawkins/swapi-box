import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ card, updateFavorites }) => {
  //take fav out of card info and loop over card.info to make spans
  const cardClass = card.fav 
    ? 'Card favorite'
    : 'Card' ;

  let cardInfo1;
  let cardInfo2;
  let cardInfo3;
  let cardInfo4;

  if (card.type === 'people') {
    cardInfo1 = `Species: ${card.info.species.name}`;
    cardInfo2 = `Language: ${card.info.species.language}`;
    cardInfo3 = `Homeworld: ${card.info.homeworld.name}`;
    cardInfo4 = `Population: ${card.info.homeworld.population}`;
  }

  if (card.type === 'planets') {
    const mappedResidents = card.info.residents.length > 0 
      ? card.info.residents.map((resident, index) => {
        return (
          <li key={`li-${index}`}>{resident}</li>
        );
      })
      : <li>N/A</li>;

    cardInfo1 = `Terrain: ${card.info.terrain}`;
    cardInfo2 = `Climate: ${card.info.climate}`;
    cardInfo3 = `Population: ${card.info.population}`;
    cardInfo4 = <ul>Residents: {mappedResidents}</ul>;
  }

  if (card.type === 'vehicles') {
    cardInfo1 = `Model: ${card.info.model}`;
    cardInfo2 = `Class: ${card.info.class}`;
    cardInfo3 = `Passengers: ${card.info.passengers}`;
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
        <span>{cardInfo1}</span>
        <span>{cardInfo2}</span>
        <span>{cardInfo3}</span>
        <span>{cardInfo4}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  updateFavorites: PropTypes.func
};

export default Card;