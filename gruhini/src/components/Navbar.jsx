import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from "../data/auth";
import { useState } from "react";
import { Button } from '@material-ui/core';

const Navbar = () => {

    const {logout } = useAuthContext();
    const [error, setError] = useState("");

      const handleLogout = async () => {
        setError("");
        try {
          await logout();
        } catch (error) {
          console.log("Error logout" + error.message);
          setError("Failed to logout");
        }
      };

    return ( 
        <div className="navbar">
            Navbar
            {error && <div>{error.message}</div>}
            <Link to={'/empower'}>Empower</Link>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
     );
}
 
export default Navbar;