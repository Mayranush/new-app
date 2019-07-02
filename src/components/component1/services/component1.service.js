import axios from 'axios';

export const component1Service = () => {
    return axios.get('https://dog.ceo/api/breeds/image/random');
};
