import axios from "axios";
import { TheCatAPI } from "@thatapicompany/thecatapi";

const theCatAPI = new TheCatAPI("live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq");
console.log(theCatAPI);

fetch('https://api.thecatapi.com/v1/images/search?api_key=live_58gwQPyj3Dq4FvqlCn68AVFWNKhsfMh6HOo9fnFo4DK8Vdp1k0H2kuN0I3s8SFgq')
    .then(resp => {
        return resp.json();
    })
    .then(cats => {
    console.log(cats);
    })
    .catch(error => {
    console.log(error);
})