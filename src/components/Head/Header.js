import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
         
          <button
            
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                
                <Link class="nav-link active" to="/">
                  Demo
                </Link>
                
              </li>
              <li><Link class="nav-link active" to="/employees/list">
                  Employee
                </Link></li>
            </ul>
          </div>
          <Link class="btn m-3" to="/login">Log In</Link>
          
          <Link class="btn m-3" to="/register">Signup</Link>
          
        </div>
      </nav>
    </div>
  );
};

export default Header;
