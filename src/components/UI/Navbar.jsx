import { NavLink } from 'react-router-dom';
import '../UI/NavBar.scss';

function Navbar() { 
    return(
        <nav>
            <div className = "navItem">
                <NavLink to = "/">Home</NavLink>
            </div>
            <div className = "navItem">
                <p></p>
            </div>
        </nav>
    )
}
export default Navbar;