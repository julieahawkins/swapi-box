import React from 'react';
import './Button.css';

const Button = (props) => {
  const buttonClass = props.displaying !== props.name.toLowerCase() 
    ? 'Button' 
    : 'Button selected';

  return (
    <button 
      className={`${buttonClass} ${props.name}`}
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