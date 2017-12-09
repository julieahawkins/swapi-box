import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ card, displaying, updateFavorites }) => {
  const cardClass = !card.info.fav 
    ? 'Card'
    : 'Card favorite';

  const renderCard = (cardType) => {
    if (cardType === 'people') {
      return (
        <div className={`${card.type}-cards-container`}>
          <p>Species: {card.info.species.name}</p>
          <p>Language: {card.info.species.language}</p>
          <p>Homeworld: {card.info.homeworld.name}</p>
          <p>Population: {card.info.homeworld.population}</p>
        </div>
      )
    } else if (cardType === 'planets') {
      const mappedResidents = card.info.residents.length > 0 
        ? card.info.residents.map((resident, index) => {
            return (
              <li key={`li-${index}`}>{resident}</li>
            );
          })
        : <li>N/A</li>;

      return (
        <div className={`${card.type}-cards-container`}>
          <p>Terrain: {card.info.terrain}</p>
          <p>Climate: {card.info.climate}</p>
          <p>Population: {card.info.population}</p>
          <ul>Residents:
            {
              mappedResidents
            }
          </ul>
        </div>
      )
    } else if (cardType === 'vehicles') {
      return (
        <div className={`${card.type}-cards-container`}>
          <p>Model: {card.info.model}</p>
          <p>Class: {card.info.class}</p>
          <p>Passengers: {card.info.passengers}</p>
        </div>
      )
    }
  }

  return (
    <div className={cardClass}>
      <Button 
        name='*'
        cardTitle={card.name}
        cardData ={card.info}
        cardType={card.type}
        cardFav={card.info.fav}
        updateFavorites={updateFavorites}/>
      <p>Name: {card.name}</p>
      {
        renderCard(card.type)
      }
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  updateFavorites: PropTypes.func
};

export default Card;