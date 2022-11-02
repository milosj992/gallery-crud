import {combineReducers} from 'redux';

import authReducer from "./authReducer";
import loremReducer from './loremReducer';
import galleryReducer from './galleryReducer';


export default combineReducers({
    auth:authReducer,
    lorems: loremReducer,
    gallerys: galleryReducer
});