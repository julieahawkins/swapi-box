import React from 'react';
// import './Scroll.css';

const Scroll = ({defaultScroll}) => {
  return (
    <div className='Scroll'>
      <h3>{defaultScroll.title}</h3>
      <p className='scroll-text'>{defaultScroll.crawlText}</p>
    </div>
  )
}

export default Scroll;