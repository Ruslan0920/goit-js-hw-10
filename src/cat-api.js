const url = 'https://api.thecatapi.com/v1';
const key = { 'x-api-key': 'live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq' };
console.log(key);

function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${key}`)
        .then(resp => {
        return resp.json();
    })
    .then(cats => {
    console.log(cats);
    })
    .catch(error => {
    console.log(error);
    })
    // return response.json();
}