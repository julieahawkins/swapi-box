export const fetchAPI = async(type, url) => {
  const initialFetch = await fetch(url);
  const fetchedData = await initialFetch.json();

  return await handleByType(type, fetchedData);
};

const handleByType = async(type, fetchedData) => {
  const dataResult = {
    film: cleanFilmData(fetchedData),
    people: await fetchPeopleData(fetchedData.results),
    planets: await fetchPlanetData(fetchedData.results),
    vehicles: cleanVehiclesData(fetchedData),
    person: returnPerson(fetchedData)
  };

  return dataResult[type]();
};

const returnPerson = (fetchedData) => () => {
  return fetchedData
}

const cleanFilmData = (filmData) => () => {
  const numerals = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII'
  };

  const regex = new RegExp(/\s{4,}/, 'g');

  const rawCrawlText = filmData.opening_crawl.replace(regex, '###');
  const crawlText = rawCrawlText.split('###');

  const currentFilm = {
    title: filmData.title,
    episodeNum: numerals[filmData.episode_id], 
    releaseDate: filmData.release_date,
    crawlText 
  };

  return currentFilm;
};

const fetchPeopleData = async(peopleArray) => () => {
  const unresolvedPromises = peopleArray.map(async(person) => {
    const homeworld = await fetchAPI('person', person.homeworld);
    const species = await fetchAPI('person', person.species);

    const character = {
      name: person.name,
      type: 'people',
      fav: false,
      info: {
        homeworld, 
        species
      }
    };

    return character;
  });

  return Promise.all(unresolvedPromises);
};

const fetchPlanetData = async(planetArray) => () => {
  const unresolvedPromises = planetArray.map(async(planet) => {
    let residentArray = await fetchResidents(planet);
    
    let planetData = {
      name: planet.name,
      type: 'planets',
      fav: false,
      info: {
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
    let residentData = await fetchAPI('person', resident);

    return residentData.name;
  });

  return await Promise.all(residentPromises);
};

const cleanVehiclesData = (vehiclesArray) => () => {
  const vehicles = vehiclesArray.results.map(vehicle => {
    return {
      name: vehicle.name,
      type: 'vehicles',
      fav: false,
      info: {
        model: vehicle.model,
        class: vehicle.vehicle_class,
        passengers: vehicle.passengers
      }
    };
  });

  return vehicles;
};

