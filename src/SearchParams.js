import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';

const SearchParams = () => {
  // Hooks never go inside of if statements nor for loops
  // nor while or anything like that.
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  // this hook will schedule the function and it
  // will run it once the component is totally rendered
  // This does not happen immediately
  useEffect(
    () => {
      setBreeds([]);
      setBreed('');

      pet.breeds(animal).then(({ breeds: apiBreeds }) => {
        const breedStrings = apiBreeds.map(({ name }) => name);
        setBreeds(breedStrings);
      }, console.error);
    },
    // useEffect hook will run only once if it has
    // an empty array as dependency (because it doesn't
    // depend on nothing, there's nothin that may change:
    //
    //  useEffect(() => {}, [])
    //
    // To run the hook every single time something updates,
    // remove the array parameter (pass in only the lambda)
    //
    //  useEffect(() => {})
    //
    [animal, setBreed, setBreeds]
  );

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>

        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
