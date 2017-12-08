import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const buttonClass = props.displaying !== props.name.toLowerCase()
    ? 'Button' 
    : 'Button selected';

  const buttonFav = props.cardFav 
    ? 'favorite'
    : null;

  return (
    <button 
      className={`${buttonClass} ${props.name} ${buttonFav}`}
      onClick={() => { 
        props.displayCards 
          ? props.displayCards(props.name) 
          : props.updateFavorites({
            type: props.cardType,
            name: props.cardTitle, 
            data: props.cardData
          });
      }}>
      {props.name}
    </button>
  );
};

Button.propTypes ={
  displaying: PropTypes.string,
  name: PropTypes.string,
  cardFav: PropTypes.bool,
  displayCards: PropTypes.func,
  updateFavorites: PropTypes.func,
  cardType: PropTypes.string,
  cardTitle: PropTypes.string,
  cardData: PropTypes.object
};

export default Button;