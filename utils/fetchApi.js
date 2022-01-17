
import axios from 'axios';


export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async () => {
    const { data } = await axios.get((url), {
        headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '129b2fc319msh341b23a0412e0abp1dab02jsn64e71a25960c'
        }
    });

    return data;
}