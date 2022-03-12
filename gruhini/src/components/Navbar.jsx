import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to={'/empower'}></Link>
        </div>
     );
}
 
export default Navbar;