import React from 'react';
import Button from '../Button/Button';
import './Controls.css';

const Controls = () => {
  return (
    <div className='Controls'>
      <Button name='People'/>
      <Button name='Planets'/>
      <Button name='Vehicles'/>
    </div>
  )
}

export default Controls;