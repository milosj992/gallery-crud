import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./rents/Home"


const App = () => {
    return (
        <BrowserRouter>
            <div className="ui container">
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                </Routes>
            </div>
        </BrowserRouter>

    )
}

export default App;