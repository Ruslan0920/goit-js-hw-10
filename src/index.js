import SlimSelect from 'slim-select'
import '../node_modules/slim-select/dist/slimselect.css'

const cardContainer = document.querySelector('.breed-select');
console.log(cardContainer);
const loaderWait = document.querySelector('.loader');
console.log(loaderWait);
const errorMessage = document.querySelector('.error');
console.log(errorMessage);
const descriptionCatInfo = document.querySelector('cat-info');
console.log(descriptionCatInfo);
 
cardContainer.addEventListener("change", selectCat);



let arrCats = []
console.log(arrCats);

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



function selectCat(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.currentTarget);
    console.log(event.currentTarget.value);

      const breedId = event.currentTarget.value;
  console.log(breedId);
    // descriptionCatInfo.innerHTML = `<div class="box-img"><img src="${url}" alt="${breeds[0].name}" width="400"/></div><div class="box"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><p><b>Temperament:</b> ${breeds[0].temperament}</p></div>`;
}

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



