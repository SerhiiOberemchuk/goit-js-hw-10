import { fetchBreeds, fetchCatByBreed } from './cat-api';
const selectBreed = document.querySelector('.breed-select');

// const loaderBox = document.querySelector('.loader');

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
fetchBreeds(BASE_URL)
  .then(resp => {
    const markap = resp.data
      .map(({ id, name }) => `<option value="${id}">${name}</option>`)
      .join('');
    selectBreed.innerHTML = markap;
  })
  .catch(error => {
    errorText.style.display = 'inline';
  });

selectBreed.addEventListener('change', fetchCatByBreed);
