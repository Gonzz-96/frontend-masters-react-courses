import React, { FunctionComponent } from 'react';
import { Animal } from '@frontendmasters/pet';
import Pet from './Pet';

interface IProps {
  pets: Animal[];
}

const Results: FunctionComponent<IProps> = ({ pets }) => (
  <div className="search">
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
          id={pet.id.toString()}
        />
      ))
    )}
  </div>
);

export default Results;
