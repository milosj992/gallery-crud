import {galleryTable} from "../../utils/data"
import {
    FETCH_GALLERYS,
    FETCH_GALLERY,
    CREATE_GALLERY,
    EDIT_GALLERY,
    DELETE_GALLERY
} from "./types";

export const fetchGallerys= () => async dispatch => {
    const response = await galleryTable.get('/');

    dispatch({type: FETCH_GALLERYS, payload: response.data});
}
export const fetchGallery = (id) => async dispatch => {
    const response = await galleryTable.get(`/${id}`);

    dispatch({type: FETCH_GALLERY, payload: response.data});
}
export const createGallery = (values) => async dispatch => {
    const response = await galleryTable.post(`/`, values);

    dispatch({type: CREATE_GALLERY, payload: response.data});
}
export const editGALLERY = (id, values) => async dispatch => {
    const response = await galleryTable.put(`/${id}`, values);

    dispatch({type: EDIT_GALLERY, payload: response.data});
}
export const deleteGallery = (id) => async dispatch => {
    await galleryTable.delete(`/${id}`,);

    dispatch({type: DELETE_GALLERY, payload: id});
}


