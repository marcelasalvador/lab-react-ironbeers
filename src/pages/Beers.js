import Header from "../components/Header"
import axios from "axios"
import { useState, useEffect } from 'react';


function Beers(props) {

    const [beers, setBeers] = useState([]);
    const [query, setQuery] = useState('');


  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then(response => {
        setBeers(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [query]);

    return (
        <div>
        <Header />
        <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
        {beers.map(beer => (
          <div key={beer._id}>
            <img src={beer.image_url} alt="beers"/>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
            <a href={`/beers/${beer._id}`}>Details</a>
          </div>
        ))}
      </div>
    )
}

export default Beers