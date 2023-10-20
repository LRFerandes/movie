import React from "react";

import 'bootswatch/dist/simplex/bootstrap.css';







function NavBar() {

    
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/login">Login</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="/CreateMovie">CreateMovie
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/CreateSession">CreateSession</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/UpdateSession">UpdateSession</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/UpdateMovie">UpdateMovie</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/DeleteMovie">DeleteMovie</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/DeleteSession">DeleteSession</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/TabelaSession">ListSession</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/TabelaMovie">ListMovie</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>



        </div>
    );
  }
  
  export default NavBar;