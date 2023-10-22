import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.headers.common['x-api-key'] =
  'live_LiSWxPZjX4QMvlIZoWOSNRATcDjkNrUPppORYPMIKidSRLdDmMw4NhMmmVdPdXGN';

const boxCatInfo = document.querySelector('.cat-info');

const loaderBox = document.querySelector('.loader');
const errorText = document.querySelector('.error');
errorText.style.display = 'none';
loaderBox.style.display = 'none';

const fetchBreeds = urlCat => {
  return axios
    .get(urlCat)
    .then(resp => {
      return resp;
    })
    .catch(error => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
};

const fetchCatByBreed = event => {
  const breedId = event.target.value;
  boxCatInfo.style.display = 'none';
  loaderBox.style.display = 'block';
  const BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return axios
    .get(BASE_URL)
    .then(resp => {
      boxCatInfo.style.display = 'flex';
      loaderBox.style.display = 'none';
      const dataCat = resp.data[0].breeds[0];
      const image = resp.data[0].url;
      const markup = `<img src="${image}" alt="${dataCat.name}" width='300' style="margin-top: 20px; margin-right: 20px;">
      <div>
        <h1>${dataCat.name}</h1>
        <p>${dataCat.description}</p>
        <p><span style="font-weight: bold;">Temperament:</span>${dataCat.temperament}</p>
      </div>`;

      boxCatInfo.innerHTML = markup;
    })
    .catch(error => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
};
export { fetchBreeds, fetchCatByBreed };
