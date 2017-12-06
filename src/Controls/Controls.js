import React from 'react';
import Button from '../Button/Button';
import './Controls.css';

const Controls = (props) => {
  return (
    <div className='Controls'>
      <Button name='People' displayCard={props.displayCards} displaying={props.displaying}/>
      <Button name='Planets' displayCard={props.displayCards} displaying={props.displaying}/>
      <Button name='Vehicles' displayCard={props.displayCards} displaying={props.displaying}/>
    </div>
  )
}

export default Controls;