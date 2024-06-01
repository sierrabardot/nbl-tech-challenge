import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

export async function fetchProductList() {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
    }
}
