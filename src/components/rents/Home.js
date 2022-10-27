import {useSelector, useDispatch} from 'react-redux'
import {fetchLorems} from "../../redux/actions/lorem";
import {useEffect} from "react";
import {fetchGallerys} from "../../redux/actions/gallery";

export const Home = () => {
    const dispatch = useDispatch();
    const lorem = useSelector(state => Object.values(state.lorems));

    useEffect(() => {
        dispatch(fetchLorems());
        dispatch(fetchGallerys());
    }, [dispatch]);
    return (
        <>{lorem.map((item) => {
            return (<div key={item.id}>{item.body}</div>)
        })}</>
    )
}
export default Home;