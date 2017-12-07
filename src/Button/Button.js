import React from 'react';
import './Button.css';

const Button = (props) => {
  console.log(props.displaying, props.name)
  const buttonClass = props.displaying !== props.name.toLowerCase() 
    ? 'Button' 
    : 'Button selected';

  return (
    <button 
      className={`${buttonClass} ${props.name}`}
      onClick={() => {props.displayCards 
        ? props.displayCards(props.name) 
        : props.updateFavorites(props.id)}}>
      {props.name}
    </button>
  )
}

export default Button;