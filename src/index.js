import axios from 'axios';
console.log(axios);
const BASE_URL = (axios.defaults.baseURL = 'https://api.thecatapi.com/v1');
const KEY = (axios.defaults.headers.common['x-api-key'] =
  'live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq');

import './styles.css';
import SlimSelect from 'slim-select';
import '../node_modules/slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const cardContainer = document.querySelector('.breed-select');
console.log(cardContainer);
const loaderWaitMessage = document.querySelector('.loader');
console.log(loaderWaitMessage);
const errorMessage = document.querySelector('.error');
console.log(errorMessage);
const descriptionCatInfo = document.querySelector('.cat-info');
console.log(descriptionCatInfo);

cardContainer.addEventListener('change', selectCat);

// cardContainer.classList.add('is-hidden');
// descriptionCatInfo.classList.add('is-hidden');
// errorMessage.classList.add('is-hidden');

// loaderWaitMessage.classList.add('is-hidden');

let arrCats = [];
console.log(arrCats);

function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds`).then(response => {
    console.log(response);
    // descriptionCatInfo.classList.add('is-hidden');
    // cardContainer.style.display = 'flex';
    // cardContainer.classList.remove('display', 'block');
    // cardContainer.classList.remove('is-hidden');
    // loaderWaitMessage.classList.add('is-hidden');

    // console.log(der);
    return response.json();
  });
  // .catch(error => alert('Oops! Something went wrong! Try reloading the page!'));
}

fetchBreeds()
  .then(cats => {
    // console.log(cats);
    cats.map(cat => {
      // console.log(cat.name);
      arrCats.push({ text: cat.name, value: cat.id });
      cardContainer.style.display = 'flex';
      // descriptionCatInfo.classList.add('is-hidden');
    });

    const inputCats = new SlimSelect({
      select: cardContainer,
      data: arrCats,
    });

    console.log(inputCats);
  })
  .catch(fetchError);

// let breedId = "";
// console.log(breedId);

function selectCat(event) {
  
//   cardContainer.style.display = 'flex';
  event.preventDefault();
  console.log(event);
//   console.log(event.target);
  // console.log(event.currentTarget.value);

  breedId = event.currentTarget.value;
  console.log(breedId);
  // descriptionCatInfo.style.display = 'block';
  descriptionCatInfo.classList.add('is-hidden');
  loaderWaitMessage.classList.remove('is-hidden');
// createMarkUp()
    // return breedId;
  fetchCatByBreed(breedId)
    .then(data => {
      console.dir(data);
      console.dir(data[0].id);
      
      const {url, breeds: [{ name, description, temperament}]} = data[0];
      console.log(url);
      // {temperament: catTemperament, name: catName, description: catDescription}
      //   console.log(breeds[0].temperament);
      // descriptionCatInfo.classList.remove('is-hidden');
      //          if (breeds[0].id === breedId) {
      //   descriptionCatInfo.classList.remove('is-hidden');
      //         }
      function createMarkUp(view) {
  descriptionCatInfo.innerHTML = `<div class="cat-info-img">
    <img src="${url}" alt="${name}" width="400"/>
    </div>
    <div class="cat-info-container">
    <h2>${name}</h2>
    <p>${description}</p>
    <h3>Temperament:</h3>
    <p>${temperament}</p>
    </div>`;
      // descriptionCatInfo.classList.remove('is-hidden');
      loaderWaitMessage.classList.add('is-hidden');
}
      createMarkUp();
    })

    .catch(fetchError);
}

function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, { headers: {'x-api-key': KEY}})
        .then(response => {
            console.log(response);
return response.json();
    });
};

function fetchError(error) {
  console.log(error);
  descriptionCatInfo.classList.add('is-hidden');
  cardContainer.classList.add('is-hidden');
  loaderWaitMessage.classList.add('is-hidden');
  // errorMessage.style.display = 'flex',
  cardContainer.style.display = 'none';

  Notify.failure(
    'Oops! Something went wrong! Try reloading the page or select another cat breed!',
    {
      position: 'center-center',
      width: '400px',
      fontSize: '20px',
    }
  );
}

// //     theCatAPI.images
// //   .searchImages({
// //     limit: 6,
// //   })
// //   .then((images) => {
// //     console.log(images);
// //   })
// //   .catch((error) => {
// //     // handle error
// //   });

// // const url = 'https://api.thecatapi.com/v1';
// // axios.defaults.headers.common["x-api-key"] = "live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq";
// // const key = 'live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq' ;
// // // console.log(key);

// // function fetchBreeds() {
// //     return fetch(`${url}/breeds?api_key=${key}`)
// //         .then(resp => {
// //         return resp.json();
// //     })
// //     .then(cats => {
// //     console.log(cats);
// //     })
// //     .catch(error => {
// //     console.log(error);
// //     })
// //     // return response.json();
// // }
