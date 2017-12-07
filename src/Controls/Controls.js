import React from 'react';
import Button from '../Button/Button';
import './Controls.css';

const Controls = (props) => {
  return (
    <div className='Controls'>
      <Button name='People' displayCards={props.displayCards} displaying={props.displaying}/>
      <Button name='Planets' displayCards={props.displayCards} displaying={props.displaying}/>
      <Button name='Vehicles' displayCards={props.displayCards} displaying={props.displaying}/>
    </div>
  )
}

export default Controls;