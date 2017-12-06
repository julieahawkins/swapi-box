import React from 'react';
import Button from '../Button/Button';
import './Controls.css';

const Controls = (props) => {
  return (
    <div className='Controls'>
      <Button name='People' displayCard={props.displayCards} />
      <Button name='Planets' displayCard={props.displayCards}/>
      <Button name='Vehicles' displayCard={props.displayCards}/>
    </div>
  )
}

export default Controls;