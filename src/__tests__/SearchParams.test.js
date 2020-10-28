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
