import React from 'react';
import './Scroll.css';

const Scroll = ({defaultScroll}) => {  
  return (
    <div className='Scroll'>
      <h3>Episode {defaultScroll.episodeNum}: {defaultScroll.title}</h3>
      <p className='scroll-text'>{defaultScroll.crawlText}</p>
      <p>{defaultScroll.releaseDate}</p>
    </div>
  )
}

export default Scroll;