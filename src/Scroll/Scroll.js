import React from 'react';
import './Scroll.css';

const Scroll = ({currentFilm}) => {
  const numerals = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII'
  }

  return (
    <div className='scroll-container'>
      <div className='Scroll'>
        <h3>Episode {numerals[currentFilm.episodeNum]}: {currentFilm.title}</h3>
        <p className='scroll-text'>{currentFilm.crawlText}</p>
        <p>{currentFilm.releaseDate}</p>
      </div>
    </div>
  )
}

export default Scroll;