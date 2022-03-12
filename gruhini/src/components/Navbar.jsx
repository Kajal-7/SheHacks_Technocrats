import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <div className="navbar">
            Navbar
            <Link to={'/empower'}>Empower</Link>
        </div>
     );
}
 
export default Navbar;