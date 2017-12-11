import React from 'react';
import mockData from './mockData.js';
import { fetchAPI } from './apiCalls';

const { peopleData, planetData, vehicleData } = mockData;

describe('apiCalls test with type FILM', () => {
  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => 
        Promise.resolve(
          {
            opening_crawl: 'some opening crawl text',
            title: 'A New Hope',
            episode_id: 4,
            release_date: '1977-05-25'
          }
        )   
      })
    )
  })

  it('should be a function', () => {
    expect(fetchAPI).toBeAFunction;
  });

  it('should return fetchedData', async () => {
    const fetch = await fetchAPI('film');
    
    expect(typeof fetch).toEqual('object')
  });

  it('should return fetchedData', async () => {
    const mockData = {
      title: 'A New Hope',
      episodeNum: 'IV', 
      releaseDate: '1977-05-25',
      crawlText: ['some opening crawl text'] 
    };

    const fetch = await fetchAPI('film');
    
    expect(fetch).toEqual(mockData)
  });
});

describe('apiCalls test with type PEOPLE', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => 
        Promise.resolve(
          {
            results: peopleData.results
          }
        )   
      }));
  });

  it('should be a function', () => {
    expect(fetchAPI).toBeAFunction;
  });

  it('should return fetchedData', async () => {
    const fetch = await fetchAPI('people');

    expect(typeof fetch).toEqual('object')
  });

  it('should return cleaned fetchedData', async () => {
    const mockData = [{
          name: 'Luke Skywalker',
          type: 'people',
          fav: false,
          info: {
            homeworld: undefined, 
            species: undefined,
            language: undefined,
            population: undefined
          }
        }];
    
    const fetch = await fetchAPI('people');
    expect(fetch).toEqual(mockData)
  });
});

describe('apiCalls test with type PLANETS', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => 
        Promise.resolve(
          {
            results: planetData.results           
          }
        )   
      }));
  });

  it('should be a function', () => {
    expect(fetchAPI).toBeAFunction;
  });

  it('should return fetchedData', async () => {
    const fetch = await fetchAPI('planets');

    expect(typeof fetch).toEqual('object')
  });

  it('should return cleaned fetchedData', async () => {
    const mockData = [{
          name: 'Alderaan',
          type: 'planets',
          fav: false,
          info: {
            population: '2000000000',
            residents: [
              undefined,
              undefined,
              undefined,
           ],
            terrain: 'grasslands, mountains',
            climate: 'temperate',
          }
        }];
    
    const fetch = await fetchAPI('planets');
    // console.log(fetch)
    expect(fetch).toEqual(mockData)
  });
});

describe('apiCalls test with type VEHICLES', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => 
        Promise.resolve(
          {
            results: [
              {
                name: 'AT-AT',
                model: 'All Terrain Armored Transport',
                vehicle_class: 'assault walker',
                passengers: 40,
              }
              
            ]
          }
        )   
      }));
  });

  it('should be a function', () => {
    expect(fetchAPI).toBeAFunction;
  });

  it('should return fetchedData', async () => {
    const fetch = await fetchAPI('vehicles');

    expect(typeof fetch).toEqual('object')
  });

  it('should return cleaned fetchedData', async () => {
    const mockData = [{
          name: 'AT-AT',
          type: 'vehicles',
          fav: false,
          info: {
            model: 'All Terrain Armored Transport',
            class: 'assault walker',
            passengers: 40,
          }
        }];
    
    const fetch = await fetchAPI('vehicles');
    expect(fetch).toEqual(mockData)
  });
});

describe('apiCalls test with type PERSON', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => 
        Promise.resolve(
          {
            name: 'Leia Organa'
          }
        )   
      }));
  });

  it('should be a function', () => {
    expect(fetchAPI).toBeAFunction;
  });

  it('should return fetchedData', async () => {
    const fetch = await fetchAPI('person');
    
    expect(typeof fetch).toEqual('object')
  });

  it('should return cleaned fetchedData', async () => {
    const mockData = {
          name: 'Leia Organa'
        };
    
    const fetch = await fetchAPI('person');
    expect(fetch).toEqual(mockData)
  });
});
