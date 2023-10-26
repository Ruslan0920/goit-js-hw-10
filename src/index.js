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



let arrCats = []
// console.log(arrCats);

function fetchBreeds() {
    return fetch(`https://api.thecatapi.com/v1/breeds?key=live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq`)
        .then(response => {
            console.log(response);
            return response.json();
        });
};

fetchBreeds()
    .then(cat => {
        console.log(cat);
        cat.map(cat => {
            arrCats.push({ text: cat.name, value: cat.id });
        });

        new SlimSelect({
            select: cardContainer,
            data: arrCats,
        });
    })
    .catch(error => console.log(error));

const url = 'https://api.thecatapi.com/v1';

function selectCat(event) {
    event.preventDefault();
console.log(event);

      const breedId = event.currentTarget.value;
    console.log(breedId);

    fetchCatByBreed(breedId)
    .then(data => {
        console.log(data);
        console.log(data[0]);
        // console.log(data[0].id);
        // console.log(data[0].url);

    //     const { url, breeds } = data[0];
    //   console.log(data);
    //   console.log(breeds);
        descriptionCatInfo.innerHTML = `<div class="box-img"><img src="${data[0].url}" alt="Name:" width="400"/></div><div class="box"><h1>Name:</h1><p>Description</p><p><b>Temperament:</b> Temperament</p></div>`;
    });
};



function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => {
            console.log(response);
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



