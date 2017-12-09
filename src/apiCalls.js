/* initial fetch handling */

export const fetchAPI = async(type, url) => {
  const initialFetch = await fetch(url);
  const fetchedData = await initialFetch.json();

  return await handleByType(type, fetchedData)
};

const handleByType = async(type, fetchedData) => {
  if (type === 'film') {
    return cleanFilmData(fetchedData);
  }
  if (type === 'people') {
    return await fetchPeopleData(fetchedData.results);
  }
  if(type === 'planets') {
    return await fetchPlanetData(fetchedData.results);
  }
  if (type === 'vehicles') {
    return cleanVehiclesData(fetchedData);
  }
}


/* film-handling */

const cleanFilmData = (filmData) => {
  const numerals = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII'
  };

  const currentFilm = {
    title: filmData.title.toUpperCase(),
    crawlText: filmData.opening_crawl, 
    episodeNum: numerals[filmData.episode_id], 
    releaseDate: filmData.release_date
  };

  return currentFilm;
};

/* people-handling */

const fetchPeopleData = async(peopleArray) => {
  const unresolvedPromises = peopleArray.map(async(person) => {
    const character = {
      name: person.name,
      type: 'people',
      info: {
        homeworld: await fetchPersonData(person.homeworld), 
        species: await fetchPersonData(person.species),
        fav: false
      }
    };
    return character;
  });

  return Promise.all(unresolvedPromises);
};

const fetchPersonData = async(url) => {
  const fetchedData = await fetch(url);
  const personData = await fetchedData.json();

  return personData;
};



/* planet-handling */

const fetchPlanetData = async(planetArray) => {
  const unresolvedPromises = planetArray.map(async(planet) => {
    let residentArray = await fetchResidents(planet);
    
    let planetData = {
      name: planet.name,
      type: 'planets',
      info: {
        terrain: planet.terrain,
        climate: planet.climate,
        population: planet.population,
        residents: residentArray,
        fav: false
      }
    };

    return planetData;
  });

  return Promise.all(unresolvedPromises);
};

const fetchResidents = async(planet) => {
  let residentPromises = planet.residents.map(async(resident) => {
      let residentData = await fetchPersonData(resident)
      
      return residentData.name;
    });

  return await Promise.all(residentPromises);
}




/* vehicle-handling */

const cleanVehiclesData = (vehiclesArray) => {
  const vehicles = vehiclesArray.results.map(vehicle => {
    return {
      name: vehicle.name,
      type: 'vehicles',
      info: {
        model: vehicle.model,
        class: vehicle.vehicle_class,
        passengers: vehicle.passengers,
        fav: false
      }
    };
  });

  return vehicles;
}