import {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import AuthService from "../services/auth.service"

import {useNavigate} from 'react-router-dom';


const GoogleAuth = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(null);

    const handleCallbackResponse = (response) => {
        console.log(response);
        let decodedAuth = jwt_decode(response.credential);
        AuthService.login(decodedAuth);
        navigate('/home');
    };

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: "832562949829-rhfj8sshi9q86a4bbmktv6d72n7h36eo.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        window.google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}
        );

        AuthService.currentUser.subscribe(x => setCurrent(x));//getting last localstorage change
    }, [current]);

    return (
        <div>
            {current ? <button onClick={() => AuthService.logout()}>logut</button> : <div id="signInDiv"></div>}

        </div>
    )
}
export default GoogleAuth;