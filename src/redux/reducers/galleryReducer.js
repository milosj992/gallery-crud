import _ from 'lodash';
import{
    FETCH_GALLERYS,
    FETCH_GALLERY,
    CREATE_GALLERY,
    EDIT_GALLERY,
    DELETE_GALLERY
} from "../actions/types";

export default (state={},action)=>{
    switch (action.type){
        case FETCH_GALLERYS:
            return{...state, ..._.mapKeys(action.payload, 'id')}
        case FETCH_GALLERY:
            return{...state, [action.payload.id]: action.payload}
        case CREATE_GALLERY:
            return{...state, [action.payload.id]: action.payload}
        case EDIT_GALLERY:
            return{...state, [action.payload.id]: action.payload}
        case DELETE_GALLERY:
            return _.omit(state, action.payload);
        default:
            return state;
    }

}
