import axios from 'axios';

const loginAuth = axios.create({
    baseURL: 'https://633fb6ebd1fcddf69ca807e1.mockapi.io/api/login/'
});

const loremTable = axios.create({
    baseURL: 'https://6359319ec27556d2894e3ebb.mockapi.io/api/data-table/'
});

const galleryTable = axios.create({
    headers: {Authorization: 'Client-ID 2Tznlveg2HqrtIzA1MvdkPO2Dmr6BxOmRn9rpqCktfg'},
    baseURL: 'https://api.unsplash.com/photos'
});

export {loremTable, galleryTable,loginAuth};
