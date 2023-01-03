import Header from "../components/Header"

import React, { useState } from 'react';
import axios from 'axios';

function NewBeer() {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
        <Header />

        
  <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" name="name" value={formData.name} onChange={handleChange} />
    </label>
    <br />
    <label>
      Tagline:
      <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} />
    </label>
    <br />
    <label>
      Description:
      <textarea name="description" value={formData.description} onChange={handleChange} />
    </label>
    <br />
    <label>
      First brewed:
      <input type="text" name="first_brewed" value={formData.first_brewed} onChange={handleChange} />
    </label>
    <br />
    <label>
      Brewer's tips:
      <input type="text" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} />
    </label>
    <br />
    <label>
      Attenuation level:
      <input type="number" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} />
    </label>
    <br />
    <label>
      Contributed by:
      <input type="text" name="contributed_by" value={formData.contributed_by} onChange={handleChange} />
    </label>
    <br />
    <button type="submit">Add New</button>
  </form>


    </div>
    

      )
}

export default NewBeer