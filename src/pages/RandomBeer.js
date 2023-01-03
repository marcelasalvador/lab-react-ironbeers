import Header from "../components/Header"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        setBeer(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!beer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    <Header />
      <img src={beer.image_url} alt="random beer" />
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      <p>First brewed: {beer.first_brewed}</p>
      <p>Attenuation level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
