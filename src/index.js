import axios from "axios";
// console.log(axios);
axios.defaults.headers.common["x-api-key"] = "live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq";

// import '../src/cat-api.js'
import { TheCatAPI } from "@thatapicompany/thecatapi";

const cardContainer = document.querySelector('.breed-select');
console.log(cardContainer);
cardContainer.addEventListener('submit', selectCats)


// const theCatAPI = new TheCatAPI("live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq");
// console.log(theCatAPI);

let massiveCats = []
console.log(massiveCats);

// fetchBreeds()



// function fetchBreeds() {
//    return fetch('https://api.thecatapi.com/v1/breeds')
//        .then(resp => {
//         return resp.json();
//     })
//     .then(cats => {
//         console.log(cats);
//         cats.forEach(cat => {
//             // console.log(cat.id);
//             // console.log(`значення: ${cat.id}, Ім'я: ${cat.name}`);
// //   console.log(`значення: ${cat.id}, Ім'я: ${cat.name}, Oпис: ${cat.description}`);
//             massiveCats.push({ text: cat.name, value: cat.id })
//             // cardContainer.value = cat.id;
//             // console.log(cardContainer.value);
            
// });
        
//     })
//     .catch(error => {
//         console.log(error);
//     })
    
// }

function fetchBreeds() {
    return fetch(`https://api.thecatapi.com/v1/breeds`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });       
};

fetchBreeds()
    .then(cats => {
        console.log(cats);
        cats.forEach(cat => {
            // console.log(cat.id);
            // console.log(`значення: ${cat.id}, Ім'я: ${cat.name}`);
            //   console.log(`значення: ${cat.id}, Ім'я: ${cat.name}, Oпис: ${cat.description}`);
            massiveCats.push({ text: cat.name, value: cat.id })
            // cardContainer.value = cat.id;
            // console.log(cardContainer.value);
            
        })
        
    });
    

function selectCats(event) {
    event.preventDefault();
    console.log(event);
}

// function fetchCatByBreed(breedId) {
//     return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
//         .then(response => {
// return response.json();
//     });  
// };


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