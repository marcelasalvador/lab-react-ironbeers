import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function SingleBeer() {
  const { _id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`)
      .then((axiosResponse) => {
        console.log("test", axiosResponse.data);
        setBeer(axiosResponse.data);
      })

      .catch((err) => console.log(err));
  }, [_id]);

  return (
    <div>
      <Header />

      {beer ? (
        <div>
          <img src={beer.image_url} alt="single beer" />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>First brewed: {beer.first_brewed}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>{beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default SingleBeer;
