import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ card, updateFavorites }) => {
  const cardClass = !card.info.fav 
    ? 'Card'
    : 'Card favorite';

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
      <Button 
        name='*'
        cardName={card.name}
        cardInfo={card.info}
        cardType={card.type}
        cardFav={card.info.fav}
        updateFavorites={updateFavorites}/>
      <p>Name: {card.name}</p>
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