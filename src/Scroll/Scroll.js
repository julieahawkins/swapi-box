import React from 'react';
import PropTypes from 'prop-types';
import './Scroll.css';

const Scroll = ({currentFilm}) => {
  return (
    <div className='scroll-container'>
    {
      currentFilm.crawlText && 
      <div className='Scroll'>
        <p className='intro'>
          A long time ago in a galaxy far, far away....
        </p>
        <h3>Episode {currentFilm.episodeNum}</h3>
        <h3>{currentFilm.title}</h3>
        <p className='scroll-text'>{currentFilm.crawlText}</p>
        <p>Released: {currentFilm.releaseDate}</p>
      </div>
    }
    </div>
  );
};

Scroll.propTypes = {
  currentFilm: PropTypes.object
};

export default Scroll;