import React, {useContext, useEffect} from 'react';
import {Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

function Header() {
    const navigate = useNavigate();
    const { success, loading, user, authLogout } = useContext(AuthContext);

    useEffect(() =>{
        if (!user) {
            navigate("/login");
        }
    }, [user]);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MENU APP</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          
         
        </ul>
        
        <ul className='navbar-nav ml-auto'>
        <li className="nav-item">
        <a class="nav-link" href="#">
        <FaUser />
        {user ? user.username :""}
        </a>
        </li>
        <li className="nav-item">
        <a class="nav-link"
            type="button" 
            onClick={() => authLogout()}
             href="/"
             >
             <FaSignOutAlt />
        </a>
        </li>

        </ul>
    </div>
    </div>
  </nav>
  )
}

export default Header;