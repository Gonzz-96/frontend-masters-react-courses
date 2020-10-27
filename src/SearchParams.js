import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';
import changeTheme from './actionCreators/changeTheme';
import changeLocation from './actionCreators/changeLocation';

const SearchParams = (props) => {
  // Hooks never go inside of if statements nor for loops
  // nor while or anything like that.
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location: props.location,
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
        // eslint-disable-next-line
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
            value={props.location}
            placeholder="Location"
            onChange={(event) => props.updateLocation(event.target.value)}
          />
        </label>

        <AnimalDropdown />
        <BreedDropdown />
        <label htmlFor="theme">
          Theme
          <select
            value={props.theme}
            onChange={(e) => props.setTheme(e.target.value)}
            onBlur={(e) => props.setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: props.theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

const mapStateToProps = ({ theme, location }) => ({
  theme,
  location,
});

const mapDispatchToProps = (dispatch) => ({
  setTheme: (theme) => dispatch(changeTheme(theme)),
  updateLocation: (location) => dispatch(changeLocation(location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchParams);
