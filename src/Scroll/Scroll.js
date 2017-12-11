import React from 'react';
import PropTypes from 'prop-types';
import './Scroll.css';

const Scroll = ({currentFilm}) => {
  let mappedCrawlText;
  if (currentFilm.crawlText) {
    mappedCrawlText = currentFilm.crawlText.map((paragraph, index) => {
      return (
        <p key={`ct-${index}`}>{paragraph}</p>
      );
    });
  }

  const fileName = '2014/11/star-wars-at-at-walkers-gif-by-dkng';
  const imageSource = `https://milnersblog.files.wordpress.com/${fileName}.gif`;

  return (
    <div className='scroll-container'>
      <div className='fade'></div>
      {
        !currentFilm.crawlText &&
        <img src={imageSource} alt='' />
      }
      {
        currentFilm.crawlText && 
        <div className='Scroll'>
          <p className='intro'>
            A long time ago in a galaxy far, far away....
          </p>
          <h3>Episode {currentFilm.episodeNum}</h3>
          <h3>{currentFilm.title.toUpperCase()}</h3>
          <section className='scroll-text'>
            {mappedCrawlText}
          </section>
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