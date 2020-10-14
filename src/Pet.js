import React from 'react';

const Pet = ({ name, animal, breed }) => (
  <div>
    <h1>{name}</h1>
    <h1>{animal}</h1>
    <h1>{breed}</h1>
  </div>
);

export default Pet;
