import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  const cardClass = !props.info.fav 
    ? 'Card'
    : 'Card favorite';
    
  const renderCard = (cardType) => {
    if (cardType === 'people') {
      return (
        <div className={`${props.type}-cards-container`}>
          <p>Species: {props.info.species.name}</p>
          <p>Language: {props.info.species.language}</p>
          <p>Homeworld: {props.info.homeworld.name}</p>
          <p>Population: {props.info.homeworld.population}</p>
        </div>
      )
    } else if (cardType === 'planets') {
      const mappedResidents = props.info.residents.length > 0 
        ? props.info.residents.map((resident, index) => {
            return (
              <li key={`li-${index}`}>{resident}</li>
            );
          })
        : <li>N/A</li>;

      return (
        <div className={`${props.type}-cards-container`}>
          <p>Terrain: {props.info.terrain}</p>
          <p>Climate: {props.info.climate}</p>
          <p>Population: {props.info.population}</p>
          <ul>Residents:
            {
              mappedResidents
            }
          </ul>
        </div>
      )
    } else if (cardType === 'vehicles') {
      return (
        <div className={`${props.type}-cards-container`}>
          <p>Model: {props.info.model}</p>
          <p>Class: {props.info.class}</p>
          <p>Passengers: {props.info.passengers}</p>
        </div>
      )
    }
  }

  return (
    <div className={cardClass}>
      <Button 
        name='*'
        cardTitle={props.title}
        cardData ={props.info}
        cardType={props.type}
        cardFav={props.info.fav}
        updateFavorites={props.updateFavorites}/>
      <p>Name: {props.title}</p>
      {
        renderCard(props.type)
      }
    </div>
  );
};

Card.propTypes = {
  info: PropTypes.object,
  type: PropTypes.string,
  title: PropTypes.string,
  updateFavorites: PropTypes.func
};

export default Card;