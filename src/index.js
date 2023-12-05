import axios from "axios";
console.log(axios);
const BASE_URL = axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
const KEY = axios.defaults.headers.common["x-api-key"] = "live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq";

import './styles.css'
import SlimSelect from 'slim-select'
import '../node_modules/slim-select/dist/slimselect.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const cardContainer = document.querySelector('.breed-select');
console.log(cardContainer);
const loaderWait = document.querySelector('.loader');
console.log(loaderWait);
const errorMessage = document.querySelector('.error');
console.log(errorMessage);
const descriptionCatInfo = document.querySelector('.cat-info');
console.log(descriptionCatInfo);


cardContainer.addEventListener("change", selectCat);


    // cardContainer.classList.add('is-hidden');
    // descriptionCatInfo.classList.add('is-hidden');
    // errorMessage.classList.add('is-hidden');
    
    // loaderWait.classList.add('is-hidden');

let arrCats = []
console.log(arrCats);



function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`)
        .then(response => {
            console.log(response);
            // descriptionCatInfo.classList.add('is-hidden');
            // cardContainer.style.display = 'flex';
            // cardContainer.classList.remove('display', 'block');
            // cardContainer.classList.remove('is-hidden');
            // loaderWait.classList.add('is-hidden');
            
            // console.log(der);
            return response.json();
        })
        // .catch(error => alert('Oops! Something went wrong! Try reloading the page!'));
    };


fetchBreeds()
    .then(cats => {
        // console.log(cats);
        cats.map(cat => {
            // console.log(cat.name);
            arrCats.push({ text: cat.name, value: cat.id });
            cardContainer.style.display = 'flex';
            // descriptionCatInfo.classList.add('is-hidden');
        })
       

    const inputCats = new SlimSelect({
    select: cardContainer,
        data: arrCats,
            //         value: 'FUCKING',
            // placeholder: true,
            // text: 'Select Cat',
            // alwaysOpen: true,
        settings: {
            // value: 'FUCKING',
            placeholder: true,
            // text: 'Select Cat',
            // alwaysOpen: true,
            placeholderText: 'Select Cat',
            // contentPosition: 'relative',
        }
    });
        
        console.log(inputCats);
    })
    .catch(fetchError)



function selectCat(event) {
    // event.preventDefault();
    console.log(event.target.value);
    // loaderWait.classList.add('is-hidden');
// descriptionCatInfo.classList.remove('is-hidden');
    //   const breedId = event.currentTarget.value;
    const breedId = event.currentTarget.value;
    console.log(breedId);
    // descriptionCatInfo.style.display = 'block';
    descriptionCatInfo.classList.add('is-hidden');
    // if (event.currentTarget.value === 'bali') {
    //   descriptionCatInfo.classList.remove('is-hidden');      
    //     }
    
loaderWait.classList.remove('is-hidden');
    
    
    
    fetchCatByBreed(breedId)
        .then(data => {
console.dir(data[0].breeds);
      const { url, breeds } = data[0];
      console.log(data[0].id);
      //   console.log(breeds[0].temperament);
    // descriptionCatInfo.classList.remove('is-hidden');
    //          if (breeds[0].id === breedId) {
    //   descriptionCatInfo.classList.remove('is-hidden');      
    //         }   
            
      descriptionCatInfo.innerHTML = `<div class="cat-info-img"><img src="${url}" alt="${breeds[0].name}" width="400"/></div><div class="cat-info-container"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p><h3>Temperament:</h3> ${breeds[0].temperament}</p></div>`;
            descriptionCatInfo.classList.remove('is-hidden');
            loaderWait.classList.add('is-hidden');
        })
        .catch(fetchError)

};

// fetchCatByBreed()

function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, { headers: {'x-api-key': KEY}})
        .then(response => {
            console.log(response);
            // loaderWait.classList.add('is-hidden');
            // descriptionCatInfo.classList.remove('is-hidden');
return response.json();
    });
};


function fetchError(error) {
    console.log(error);
    descriptionCatInfo.classList.add('is-hidden');
  cardContainer.classList.add('is-hidden');
    loaderWait.classList.add('is-hidden');
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



