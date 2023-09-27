import axios from "axios";
console.log(axios);

// import '../src/cat-api.js'
import { TheCatAPI } from "@thatapicompany/thecatapi";

const cardContainer = document.querySelector('.breed-select');
console.log(cardContainer);
// cardContainer.addEventListener('submit', fetchBreeds)

const theCatAPI = new TheCatAPI("live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq");
console.log(theCatAPI);

fetchBreeds()

function fetchBreeds() {
    fetch('https://api.thecatapi.com/v1/breeds?api_key=live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq')
    .then(resp => {
        return resp.json();
    })
    .then(cats => {
        console.log(cats);
    })
    .catch(error => {
        console.log(error);
    })
}
//     theCatAPI.images
//   .searchImages({
//     limit: 6,
//   })
//   .then((images) => {
//     console.log(images);
//   })
//   .catch((error) => {
//     // handle error
//   });

// const url = 'https://api.thecatapi.com/v1';
// axios.defaults.headers.common["x-api-key"] = "live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq";
// const key = 'live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq' ;
// // console.log(key);



// function fetchBreeds() {
//     return fetch(`${url}/breeds?api_key=${key}`)
//         .then(resp => {
//         return resp.json();
//     })
//     .then(cats => {
//     console.log(cats);
//     })
//     .catch(error => {
//     console.log(error);
//     })
//     // return response.json();
// }