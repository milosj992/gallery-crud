import {useEffect} from "react";
import jwt_decode from "jwt-decode";
const GoogleAuth=()=>{
    const handleCallbackResponse=(response)=>{
    console.log(jwt_decode(response.credential))
        // window.google.accounts.id.revoke(response.credential.sub, done => {
        //     console.log(done.error);
        // });
    };
    useEffect(()=>{
        window.google.accounts.id.initialize({
            client_id:"832562949829-rhfj8sshi9q86a4bbmktv6d72n7h36eo.apps.googleusercontent.com",
            callback:handleCallbackResponse
        });


        window.google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme:"outline",size:"large"}
        );
    },[]);

    //110084428824552485682
    return(
        <div>
            <div id="signInDiv"></div>
        </div>
    )
}
export default GoogleAuth;