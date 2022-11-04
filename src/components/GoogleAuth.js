import {useEffect} from "react";
const GoogleAuth=()=>{
    const handleCallbackResponse=(response)=>{
    console.log(response.credential)
    };
    useEffect(()=>{
        window.google.accounts.id.initialize({
            client_id:"832562949829-rhfj8sshi9q86a4bbmktv6d72n7h36eo.apps.googleusercontent.com",
            callback:handleCallbackResponse
        });
        window.google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme:"outline",size:"large"}
        )
    },[]);
    return(
        <div>
            <div id="signInDiv"></div>
        </div>
    )
}
export default GoogleAuth;