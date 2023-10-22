import { fetchBreeds, fetchCatByBreed } from './cat-api';
const selectBreed = document.querySelector('.breed-select');

import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
fetchBreeds(BASE_URL).then(resp => {
  const markap = resp.data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  selectBreed.innerHTML = `<option data-placeholder="true"></option>${markap}`;
  new SlimSelect({
    select: selectBreed,
    settings: {
      placeholderText: 'Please choose your favorite cat',
    },
  });
});

selectBreed.addEventListener('change', fetchCatByBreed);
