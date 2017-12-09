/* initial fetch handling */

export const fetchAPI = async(type, url) => {
  const initialFetch = await fetch(url);
  const fetchedData = await initialFetch.json();

  return await handleByType(type, fetchedData)
};

const handleByType = async(type, fetchedData) => {
  let dataResult;
  if (type === 'film') {
    dataResult = cleanFilmData(fetchedData);
  }
  if (type === 'people') {
    dataResult = await fetchPeopleData(fetchedData.results);
  }
  if(type === 'planets') {
    dataResult = await fetchPlanetData(fetchedData.results);
  }
  if (type === 'vehicles') {
    dataResult = cleanVehiclesData(fetchedData);
  }
  if (type === 'person') {
    dataResult = fetchedData;
  }
  return dataResult
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
    title: filmData.title,
    crawlText: filmData.opening_crawl, 
    episodeNum: numerals[filmData.episode_id], 
    releaseDate: filmData.release_date
  };

  return currentFilm;
};

const fetchPeopleData = async(peopleArray) => {
  const unresolvedPromises = peopleArray.map(async(person) => {
    const homeworld = await fetchAPI('person', person.homeworld);
    const species = await fetchAPI('person', person.species);

    const character = {
      name: person.name,
      type: 'people',
      info: {
        fav: false,
        homeworld, 
        species
      }
    };

    return character;
  });

  return Promise.all(unresolvedPromises);
};

const fetchPlanetData = async(planetArray) => {
  const unresolvedPromises = planetArray.map(async(planet) => {
    let residentArray = await fetchResidents(planet);
    
    let planetData = {
      name: planet.name,
      type: 'planets',
      info: {
        fav: false,
        terrain: planet.terrain,
        climate: planet.climate,
        population: planet.population,
        residents: residentArray
      }
    };

    return planetData;
  });

  return Promise.all(unresolvedPromises);
};

const fetchResidents = async(planet) => {
  let residentPromises = planet.residents.map(async(resident) => {
      let residentData = await fetchAPI('person', resident)

      return residentData.name;
    });

  return await Promise.all(residentPromises);
}

const cleanVehiclesData = (vehiclesArray) => {
  const vehicles = vehiclesArray.results.map(vehicle => {
    return {
      name: vehicle.name,
      type: 'vehicles',
      info: {
        fav: false,
        model: vehicle.model,
        class: vehicle.vehicle_class,
        passengers: vehicle.passengers
      }
    };
  });

  return vehicles;
}