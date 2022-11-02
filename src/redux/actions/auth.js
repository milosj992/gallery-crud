import {loginAuth} from "../../utils/data";
import { LOGIN} from "./types";

export const login=()=>async dispatch=>{
    const response = await loginAuth.get('/');

    dispatch({type: LOGIN, payload: response.data});
}