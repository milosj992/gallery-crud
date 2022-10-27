import _ from 'lodash';
import{
    FETCH_LOREMS,
    FETCH_LOREM,
    CREATE_LOREM,
    EDIT_LOREM,
    DELETE_LOREM
} from "../actions/types";

export default (state={},action)=>{
    switch (action.type){
        case FETCH_LOREMS:
            return{...state, ..._.mapKeys(action.payload, 'id')}
        case FETCH_LOREM:
            return{...state, [action.payload.id]: action.payload}
        case CREATE_LOREM:
            return{...state, [action.payload.id]: action.payload}
        case EDIT_LOREM:
            return{...state, [action.payload.id]: action.payload}
        case DELETE_LOREM:
            return _.omit(state, action.payload);
        default:
            return state;
    }

}
