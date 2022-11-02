import {useSelector, useDispatch} from 'react-redux'
import {fetchLorems} from "../../redux/actions/lorem";
import {useEffect} from "react";
import {fetchGallerys} from "../../redux/actions/gallery";
import {login} from "../../redux/actions/auth";

export const Home = () => {
    const dispatch = useDispatch();
    const lorem = useSelector(state => Object.values(state.lorems));
    const loginn=useSelector(state=>state.auth)
    const gall=useSelector(state=>Object.values(state.gallerys))
    console.log(gall);
    console.log(loginn);
    useEffect(() => {
        dispatch(fetchLorems());
        dispatch(fetchGallerys());
        dispatch(login());
    }, [dispatch]);
    return (
        <>{lorem.map((item) => {
            return (<div key={item.id}>{item.body}</div>)
        })}</>
    )
}
export default Home;