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

let massiveCats = []
console.log(massiveCats);

function fetchBreeds() {
   return fetch('https://api.thecatapi.com/v1/breeds?api_key=live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq')
       .then(resp => {
        return resp.json();
    })
    .then(cats => {
        console.log(cats);
        cats.forEach(cat => {
            // console.log(cat);
            // console.log(`значення: ${cat.id}, Ім'я: ${cat.name}`);
//   console.log(`значення: ${cat.id}, Ім'я: ${cat.name}, Oпис: ${cat.description}`);
 massiveCats.push({text: cat.name, value: cat.id})           
});
        
    })
    .catch(error => {
        console.log(error);
    })
    
}

function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
return response.json();
    });  
};


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

// const cats = [
//     {
//         id: "asd",
//         name: "Cat1"
//     },
//        {
//         id: "qwe",
//         name: "Cat2"
//     },
//         {
//         id: "zxc",
//         name: "Cat3"
//     },
//         {
//         id: "rty",
//         name: "Cat4"
//     },
//         {
//         id: "fgh",
//         name: "Cat5"
//     },
//         {
//         id: "vbn",
//         name: "Cat6"
//     },    
    
// ];

// // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// cats.forEach(function (cat) {
//   console.log(`значення ${cat.id}, Ім'я ${cat.name}`);
// });