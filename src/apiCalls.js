export const fetchFilm = async() => {
  const randomFilm = Math.floor(Math.random() * 7) + 1;
  const fetchedData = await fetch(`https://swapi.co/api/films/${randomFilm}/`);
  const filmData = await fetchedData.json();

  const currentFilm = {
    title: filmData.title.toUpperCase(),
    crawlText: filmData.opening_crawl, 
    episodeNum: filmData.episode_id, 
    releaseDate: filmData.release_date
  };
  return currentFilm;
};

export const fetchPeople = async() => {
  const fetchedData = await fetch(`https://swapi.co/api/people/`);
  const peopleArray = await fetchedData.json();

  return await fetchPeopleData(peopleArray.results);
};

const fetchPeopleData = async(peopleArray) => {
  const unresolvedPromises = peopleArray.map(async(person) => {
    let homeworldFetch = await fetch(person.homeworld);
    let homeworldData = await homeworldFetch.json();

    let speciesFetch = await fetch(person.species);
    let speciesData = await speciesFetch.json();

    return {
      name: person.name,
      type: 'people',
      info: {
        homeworld: homeworldData, 
        species: speciesData,
        fav: false
      }
    };
  });

  return Promise.all(unresolvedPromises);
};

export const fetchPlanets = async() => {
  const fetchedData = await fetch(`https://swapi.co/api/planets/`);
  const planetArray = await fetchedData.json();

  return await fetchPlanetData(planetArray.results);
};

const fetchPlanetData = async(planetArray) => {
  const unresolvedPromises = planetArray.map(async(planet) => {
    let residentArray = planet.residents.map(async(resident) => {
      let residentFetch = await fetch(resident);
      let residentData = await residentFetch.json();
      return residentData.name;
    });

    let residentsData = await Promise.all(residentArray);

    return {
      name: planet.name,
      type: 'planets',
      info: {
        terrain: planet.terrain,
        climate: planet.climate,
        population: planet.population,
        residents: residentsData,
        fav: false
      }
    };
  });

  return Promise.all(unresolvedPromises);
};

export const fetchVehicles = async() => {
  const fetchedData = await fetch('https://swapi.co/api/vehicles/');
  const vehiclesArray = await fetchedData.json();

  return vehiclesArray.results.map(vehicle => {
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
};