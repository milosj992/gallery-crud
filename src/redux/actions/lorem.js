import {loremTable} from "../../utils/data"
import {
    FETCH_LOREMS,
    FETCH_LOREM,
    CREATE_LOREM,
    EDIT_LOREM,
    DELETE_LOREM
} from "./types";

export const fetchLorems= () => async dispatch => {
    const response = await loremTable.get('/');

    dispatch({type: FETCH_LOREMS, payload: response.data});
}
export const fetchLorem = (id) => async dispatch => {
    const response = await loremTable.get(`/${id}`);

    dispatch({type: FETCH_LOREM, payload: response.data});
}
export const createLorem = (values) => async dispatch => {
    const response = await loremTable.post(`/`, values);

    dispatch({type: CREATE_LOREM, payload: response.data});
}
export const editLorem = (id, values) => async dispatch => {
    const response = await loremTable.put(`/${id}`, values);

    dispatch({type: EDIT_LOREM, payload: response.data});
}
export const deleteLorem = (id) => async dispatch => {
    await loremTable.delete(`/${id}`,);

    dispatch({type: DELETE_LOREM, payload: id});
}


