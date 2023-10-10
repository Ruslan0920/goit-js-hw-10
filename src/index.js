import SlimSelect from 'slim-select'
const cardContainer = document.querySelector('.breed-select');
console.log(cardContainer);
const loaderWait = document.querySelector('.loader');
console.log(loaderWait);
const errorMessage = document.querySelector('.error');
console.log(errorMessage);
const descriptionCatInfo = document.querySelector('cat-info');
console.log(descriptionCatInfo);
 
// cardContainer.addEventListener("submit", selectCat);

const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "На березі спокійних вод",
        author: "Роберт Шеклі",
        rating: 8.51,
    },
    {
        title: "Сон смішної людини",
        author: "Федір Достоєвський",
        rating: 7.75,
    },
];
console.log(books);

let massive = [];
console.log(massive);
console.log(massive[0]);
// const markup = massive.map(element => element[0]);
// console.log(markup);
// cardContainer.innerHTML = markup


// const createObj = books.map(book => `<option value="${book.title}">${book.author}</option>`
// ).join(" ");
// cardContainer.innerHTML = createObj;


const usersByLikes = books.map(book => {
    console.log(book);
    massive.push({ name: book.author, value: book.title });


});
        new SlimSelect({
      select: cardContainer,
    //   data: massive,
    });

// const createObj = books.map(book => {
// console.log(book);
// }
    
// massive.push({ text: book.name, value: book.id });
    
    // new SlimSelect({
    //   select: cardContainer,
    //   data: massive,
    // });


    // console.log(book);
    // massive.push(book.author);
    // cardContainer.innerHTML = `<option value="">${massive}</option>`;
    // console.log(cardContainer.textContent);
    // return massive;

    
    // return massive;
    // const allAuthors = book.author;
    // console.log(allAuthors);
    // const option = document.createElement('option');
    // console.log(option);
    // option.value = book.author;
    // option.innerHTML = book.title;
    // console.log(option.innerHTML);
    // cardContainer.textContent = massive;
    // console.log(cardContainer.textContent);
    // cardContainer.innerHTML = `<option value="${idx}">${book.author}</option>`;
    // new SlimSelect({
    //   select: cardContainer,
    //   data: massive,
    // });
    // return massive
    // cardContainer.value = allAuthors;
    // cardContainer.innerHTML = `<option value="">${massive}</option>`;


//     cardContainer.innerHTML = `<option value="">${createObj}</option>`;
// console.log(createObj);



// function selectCat(event) {
//     console.log(event);
// }




// import axios from "axios";
// // console.log(axios);
// axios.defaults.headers.common["x-api-key"] = "live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq";

// import '../src/cat-api.js'
// import { TheCatAPI } from "@thatapicompany/thecatapi";


// const cardContainer = document.querySelector('.breed-select');
// console.log(cardContainer);
// const divCatInfo = document.querySelector('.cat-info');
// console.log(divCatInfo);
// cardContainer.addEventListener('submit', selectCats)


// // const theCatAPI = new TheCatAPI("live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq");
// // console.log(theCatAPI);

// let massiveCats = []
// console.log(massiveCats);

// // fetchBreeds()



// // function fetchBreeds() {
// //    return fetch('https://api.thecatapi.com/v1/breeds')
// //        .then(resp => {
// //         return resp.json();
// //     })
// //     .then(cats => {
// //         console.log(cats);
// //         cats.forEach(cat => {
// //             // console.log(cat.id);
// //             // console.log(`значення: ${cat.id}, Ім'я: ${cat.name}`);
// // //   console.log(`значення: ${cat.id}, Ім'я: ${cat.name}, Oпис: ${cat.description}`);
// //             massiveCats.push({ text: cat.name, value: cat.id })
// //             // cardContainer.value = cat.id;
// //             // console.log(cardContainer.value);
            
// // });
        
// //     })
// //     .catch(error => {
// //         console.log(error);
// //     })
    
// // }

// function fetchBreeds() {
//     return fetch(`https://api.thecatapi.com/v1/breeds`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });
// };

// fetchBreeds()
//     .then(cats => {
//         console.log(cats);
//         cats.forEach(cat => {
//             massiveCats.push({ text: cat.name, value: cat.id })
//         })
//         cardContainer.value = massiveCats;
//     });
    

// function selectCats(event) {
//     event.preventDefault();
//     console.log(event);
//     divCatInfo.innerHTML = `<div class="box-img"><img src="${url}" alt="${breeds[0].name}" width="400"/></div><div class="box"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`;
// }

// // function fetchCatByBreed(breedId) {
// //     return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
// //         .then(response => {
// // return response.json();
// //     });
// // };


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

// // const cats = [
// //     {
// //         id: "asd",
// //         name: "Cat1"
// //     },
// //        {
// //         id: "qwe",
// //         name: "Cat2"
// //     },
// //         {
// //         id: "zxc",
// //         name: "Cat3"
// //     },
// //         {
// //         id: "rty",
// //         name: "Cat4"
// //     },
// //         {
// //         id: "fgh",
// //         name: "Cat5"
// //     },
// //         {
// //         id: "vbn",
// //         name: "Cat6"
// //     },
    
// // ];

// // // Класичний for
// // // for (let i = 0; i < numbers.length; i += 1) {
// // //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // // }

// // // Метод перебирання forEach
// // cats.forEach(function (cat) {
// //   console.log(`значення ${cat.id}, Ім'я ${cat.name}`);
// // });

// const myUsers = [
//     { name: 'shark', likes: 'ocean' },
//     { name: 'turtle', likes: 'pond' },
//     { name: 'otter', likes: 'fish biscuits' }
// ]

// const usersByLikes = myUsers.map(item => {
//      console.log(item.name);
//     console.log(item.name.length);
//     const container = {};
//     console.log(container);

//     container[item.name] = item.likes;
//     container.age = item.name.length * 10;

//     return container;
// })

// console.log(usersByLikes)