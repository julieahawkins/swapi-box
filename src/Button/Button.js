import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  console.log(props)
  const buttonClass = props.displaying !== props.name.toLowerCase()
    ? 'Button' 
    : 'Button selected';

  let buttonFav;
  if (props.card) {
    buttonFav = props.card.fav 
      ? 'favorite'
      : null;
  }
  
  const buttonText = props.name !== '*'
    ? props.name
    : <span className="spacer"></span>;
  
  const handleClick = props.displayCards 
    ? props.displayCards 
    : props.updateFavorites;

  return (
    <button 
      className={`${buttonClass} ${props.name} ${buttonFav}`}
      onClick={() => { handleClick(props.name, props.card); }}>
      <span className={`fav-icon ${buttonFav}`}>{buttonText}</span> 
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