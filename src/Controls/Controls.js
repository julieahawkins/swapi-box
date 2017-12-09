import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import './Controls.css';

const Controls = (props) => {
  const buttonNames = ['People', 'Planets', 'Vehicles'];

  const buttonsToRender = buttonNames.map((button, index) => {
    return (
      <Button
        name={button}
        key={`button-${index}`}
        displaying={props.displaying} 
        displayCards={props.displayCards} />
    );
  });

  return (
    <div className='Controls'>
      {buttonsToRender}
    </div>
  );
};

Controls.propTypes = {
  displaying: PropTypes.string,
  displayCards: PropTypes.func
};

export default Controls;