import React from 'react';
import Card from '../Card/Card';
// import './CardContainer.css';

const CardContainer = (props) => {
  const mappedCards = props.people.map(person => {
    return (
      <Card charName={person.name} data={person.data} />
    )
  })
  return (
    <div className='CardContainer'>
    {
      mappedCards
    }
    </div>
  )
}

export default CardContainer;