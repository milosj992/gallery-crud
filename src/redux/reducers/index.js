import {combineReducers} from 'redux';

import loremReducer from './loremReducer';
import galleryReducer from './galleryReducer';

export default combineReducers({
    lorems: loremReducer,
    gallerys: galleryReducer
});