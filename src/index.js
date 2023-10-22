import { fetchBreeds, fetchCatByBreed } from './cat-api';
const selectBreed = document.querySelector('.breed-select');
import SlimSelect from 'slim-select';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
fetchBreeds(BASE_URL).then(resp => {
  const markap = resp.data
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
  selectBreed.innerHTML = markap;
  // new SlimSelect(selectBreed, {
  //   placeholder: 'Custom Placeholder Text',
  // });
  selectBreed.slim.open();
});

selectBreed.addEventListener('change', fetchCatByBreed);
