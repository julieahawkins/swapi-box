import React from 'react';
import './Button.css';

const Button = (props) => {
  const buttonClass = props.displaying !== props.name.toLowerCase() 
    ? 'Button' 
    : 'Button selected';

  return (
    <button 
      className={`${buttonClass} ${props.name}`}
      onClick={(e) => {props.displayCards 
        ? props.displayCards(props.name) 
        : props.updateFavorites(props.id)}}>
      {props.name}
    </button>
  )
}

export default Button;