import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./mainHeaderPages/Home"
import GalleryTable from "./mainHeaderPages/GalleryTable";
import LoremTable from "./mainHeaderPages/LoremTable";
import ToDo from "./mainHeaderPages/ToDo";
import NavBar from "./NavBar";

import { configureFakeBackend } from './configureFakeBackend';
configureFakeBackend();

const App = () => {
    return (
        <div>

            <BrowserRouter>
                <NavBar/>
                <div className="ui container">

                    <Routes>
                        <Route path="/" exact element={<Home/>}/>
                        <Route path="/lorem-table" exact element={<GalleryTable/>}/>
                        <Route path="/gallery-table" exact element={<LoremTable/>}/>
                        <Route path="/todo" exact element={<ToDo/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;