import {Api} from "./service/Api.js";

const apiClient = new Api('http://localhost:3000');

async function main() {

    //get
    await apiClient.get('/products');


    //post
    await apiClient.post('/products', { name: 'Product 4', price: 400 });

    //put
    await apiClient.put('/products/1', { name: 'Updated Product 1', price: 150 });

    //delete
    await apiClient.delete('/products/2');


    //get
    await apiClient.get('/products');

}

main();