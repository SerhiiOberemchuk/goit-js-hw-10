import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_LiSWxPZjX4QMvlIZoWOSNRATcDjkNrUPppORYPMIKidSRLdDmMw4NhMmmVdPdXGN';

const fetchBreeds = urlCat => {
  // const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
  return axios.get(urlCat).then(resp => {
    return resp;
  });
  // .catch(error => {
  //   return error;
  // });
};
const boxCatInfo = document.querySelector('.cat-info');
const loaderBox = document.querySelector('.loader');
const errorText = document.querySelector('.error');
errorText.style.display = 'none';
loaderBox.style.display = 'none';

const fetchCatByBreed = event => {
  const breedId = event.target.value;
  errorText.style.display = 'none';
  loaderBox.style.display = 'block';
  const BASE_URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return axios
    .get(BASE_URL)
    .then(resp => {
      console.log(resp);
      boxCatInfo.style = 'display: flex';
      loaderBox.style.display = 'none';
      const dataCat = resp.data[0].breeds[0];
      const image = resp.data[0].url;
      const markup = `<img src="${image}" alt="${dataCat.name}" width='500'>
      <div>
        <h1>${dataCat.name}</h1>
        <p>${dataCat.description}</p>
        <p>Temperament:${dataCat.temperament}</p>
      </div>`;

      boxCatInfo.innerHTML = markup;
    })
    .catch(error => {
      loaderBox.style.display = 'none';
      errorText.style.display = 'block';
    });
};
export { fetchBreeds, fetchCatByBreed };
