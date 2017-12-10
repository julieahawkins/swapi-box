import React from 'react';
import { fetchAPI } from './apiCalls';


describe('apiCalls test with type film', () => {
  beforeEach(() => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => 
        Promise.resolve(
          {
            opening_crawl: 'some opening crawl text',
            title: 'A New Hope',
            episode_id: 4,
            release_date: '1974-11-03'
          }
        )   
      })
    )
  })

  it('should render correctly', () => {

    expect(fetchAPI).toBeAFunction;
  });

  it('should return fetchedData', async () => {
    const fetch = await fetchAPI('film');
    console.log(fetch)


    expect(typeof fetch).toEqual('object')
  });
});

describe('apiCalls test with type people', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => 
        Promise.resolve(
          {
            results: [
              {
                name: 'Darth Vader',
              }
            ]
          }
        )   
      }));
  });

  it('should render correctly', () => {

    expect(fetchAPI).toBeAFunction;
  });

  it('should return fetchedData', async () => {
    const fetch = await fetchAPI('people');
    console.log(fetch)

    expect(typeof fetch).toEqual('object')
  });


});
