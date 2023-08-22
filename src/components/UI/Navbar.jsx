import { NavLink } from 'react-router-dom';
import '../UI/NavBar.scss';

function Navbar() { 
    return(
        <nav>
            <div className = "navItem">
                <NavLink to = "/" className= "navLink">Home</NavLink>
            </div>
            <div className = "navItem">
                <NavLink to ="/" className= "navLink">Add Passwords</NavLink>
            </div>
            <div className = "navItem">
                <NavLink to = "/" className= "navLink">Generate Passwords</NavLink>
            </div>
            <div className = "navItem">
            </div>
        </nav>
    )
}
export default Navbar;