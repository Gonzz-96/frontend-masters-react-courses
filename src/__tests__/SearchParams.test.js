import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import pet, { ANIMALS, _breeds, _dogs } from '@frontendmasters/pet';
import SearchParams from '../SearchParams';

// This function is provided by jest.
afterEach(cleanup);

test('SearchParams', async () => {
  // getByTestId is a functino provided by
  // react-testing-library
  // The render function is faster than browser render
  const { getByTestId } = render(<SearchParams />);

  const animalDropdown = getByTestId('use-dropdown-animal');

  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);
});

test('SearchParams_CorrectInteractionWithPetApi_CheckBreeds', async () => {
  // getByTestId is a functino provided by
  // react-testing-library
  // The render function is faster than browser render
  const { getByTestId } = render(<SearchParams />);

  expect(pet.breeds).toHaveBeenCalled();

  const breedDropdown = getByTestId('use-dropdown-breed');
  expect(breedDropdown.children.length).toEqual(_breeds.length + 1);
});

test('SearchParams_CheckButtonClick', async () => {
  // getByTestId is a functino provided by
  // react-testing-library
  // The render function is faster than browser render
  const { getByTestId, getByText } = render(<SearchParams />);

  const searchResults = getByTestId('search-results');
  expect(searchResults.textContent).toEqual('No Pets Found');

  fireEvent(getByText('Submit'), new MouseEvent('click'));

  expect(pet.animals).toHaveBeenCalled();
  expect(searchResults.children.length).toEqual(_dogs.animals.length);
});

test('Dont know xd', async () => {
  const { container } = render(<SearchParams />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="search-params"
    >
      <form>
        <label
          for="location"
        >
          Location
          <input
            id="location"
            placeholder="Location"
            value="Seattle, WA"
          />
        </label>
        <label
          for="use-dropdown-animal"
        >
          Animal
          <select
            data-testid="use-dropdown-animal"
            id="use-dropdown-animal"
          >
            <option>
              All
            </option>
            <option
              value="dog"
            >
              dog
            </option>
            <option
              value="cat"
            >
              cat
            </option>
            <option
              value="bird"
            >
              bird
            </option>
          </select>
        </label>
        <label
          for="use-dropdown-breed"
        >
          Breed
          <select
            data-testid="use-dropdown-breed"
            id="use-dropdown-breed"
          >
            <option>
              All
            </option>
            <option
              value="Bichon Frise"
            >
              Bichon Frise
            </option>
            <option
              value="Bolognese"
            >
              Bolognese
            </option>
            <option
              value="Coton de Tulear"
            >
              Coton de Tulear
            </option>
            <option
              value="Havanese"
            >
              Havanese
            </option>
            <option
              value="Maltese"
            >
              Maltese
            </option>
          </select>
        </label>
        <label
          for="theme"
        >
          Theme
          <select>
            <option
              value="peru"
            >
              Peru
            </option>
            <option
              value="darkblue"
            >
              Dark Blue
            </option>
            <option
              value="mediumorchid"
            >
              Medium Orchid
            </option>
            <option
              value="chartreuse"
            >
              Chartreuse
            </option>
          </select>
        </label>
        <button
          style="background-color: green;"
        >
          Submit
        </button>
      </form>
      <div
        class="search"
        data-testid="search-results"
      >
        <h1>
          No Pets Found
        </h1>
      </div>
    </div>
  `);
});
