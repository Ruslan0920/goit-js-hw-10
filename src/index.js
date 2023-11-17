import axios from "axios";
console.log(axios);
const BASE_URL = axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
const KEY = axios.defaults.headers.common["x-api-key"] = "live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq";

import './styles.css'
import SlimSelect from 'slim-select'
import '../node_modules/slim-select/dist/slimselect.css'

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
    loaderWait.classList.add('is-hidden');

let arrCats = []
console.log(arrCats);

function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`)
        .then(response => {
            descriptionCatInfo.classList.add('is-hidden');
            // cardContainer.classList.remove('is-hidden');
            // loaderWait.classList.remove('is-hidden');
            // errorMessage.classList.add('is-hidden');
            console.log(response);
            return response.json();
        })
        .catch(error => console.log(error));
};

fetchBreeds()
    .then(cat => {
        console.log(cat);
        cat.map(cat => {
            arrCats.push({ text: cat.name, value: cat.id });

        })

        new SlimSelect({
            select: cardContainer,
            data: arrCats,
            
        });
        
    })
    .catch(error => console.log(error));



function selectCat(event) {
    event.preventDefault();
    console.log(event);
    loaderWait.classList.remove('is-hidden');
descriptionCatInfo.classList.remove('is-hidden');
      const breedId = event.currentTarget.value;
    console.log(breedId);

    
// loaderWait.classList.add('is-hidden');
    
    fetchCatByBreed(breedId)
        .then(data => {

            
      console.log(data);
      console.log(data[0]);
      // console.log(data[0].breeds[0].description);
      // console.log(data[0].url);

      const { url, breeds } = data[0];
      console.log(data[0]);
      //   console.log(breeds[0].temperament);
      descriptionCatInfo.innerHTML = `<div class="box-img"><img src="${url}" alt="${breeds[0].name}" width="400"/></div><div class="box"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`;
            // descriptionCatInfo.classList.remove('is-hidden');
            loaderWait.classList.add('is-hidden');
        });
   
};

// 


function fetchCatByBreed(breedId) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`, { headers: {'x-api-key': KEY}})
        .then(response => {
            console.log(response);
    //             if (breedId) {
    //     descriptionCatInfo.classList.remove('is-hidden');
    // }
return response.json();
    });
};




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



