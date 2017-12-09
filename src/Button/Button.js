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
    
  const card = {
    type: props.cardType,
    name: props.cardName, 
    info: props.cardInfo
  };

  const handleClick = props.displayCards 
    ? props.displayCards 
    : props.updateFavorites;

  return (
    <button 
      className={`${buttonClass} ${props.name} ${buttonFav}`}
      onClick={() => { handleClick(props.name, card); }}>
      {props.name}
    </button>
  );
};

Button.propTypes ={
  name: PropTypes.string,
  cardFav: PropTypes.bool,
  cardType: PropTypes.string,
  cardInfo: PropTypes.object,
  cardName: PropTypes.string,
  displaying: PropTypes.string,
  displayCards: PropTypes.func,
  updateFavorites: PropTypes.func
};

export default Button;