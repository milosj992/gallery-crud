import {Link} from "react-router-dom";

const NavBar=()=>{
return(
    <div>
        <Link to="/gallery-table">
            GalleryTable
        </Link>
        <Link to="/lorem-table">
            LoremTable
        </Link>
        <Link to="/todo">
            TODO
        </Link>
    </div>
)
}
export default NavBar;