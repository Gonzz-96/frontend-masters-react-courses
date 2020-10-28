import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) => (
  <div data-testid="search-results" className="search">
    {pets.length === 0 ? (
      <h1>No Pets Found</h1>
    ) : (
      pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.type}
          breed={pet.breeds.primary}
          key={pet.id}
          media={pet.photos}
          location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
          id={pet.id}
        />
      ))
    )}
  </div>
);

export default Results;
