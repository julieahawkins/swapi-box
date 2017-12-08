import React from 'react';
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
      onClick={() => {props.displayCards 
        ? props.displayCards(props.name) 
        : props.updateFavorites({
          type: props.cardType,
          name: props.cardTitle, 
          data: props.cardData
        })
      }}>
      {props.name}
    </button>
  )
}

export default Button;