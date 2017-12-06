import React from 'react';
import './Button.css';

const Button = (props) => {
  const buttonClass = props.displaying !== props.name.toLowerCase() 
    ? 'Button' 
    : 'Button selected';

  return (
    <button 
      className={`${buttonClass} ${props.name}`}
      onClick={() => {props.displayCard ? props.displayCard(props.name) : null}}>
      {props.name}
    </button>
  )
}

export default Button;