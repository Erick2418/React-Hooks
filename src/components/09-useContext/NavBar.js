import React from 'react';
import {Link, NavLink} from 'react-router-dom';
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink exact activeClassName="active" className="nav-item nav-link" aria-current="page" to="/">Home</NavLink>
                <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>
                <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">Login</NavLink>
                {/* El activeClassname permite que salga seleccionado, es una clase de bootstrap
                el exact es para que se active solo si el link coincide...el link no nos permite hacer esto
                nav-item nav-link*/}
            </div>
            </div>
        </div>
        </nav>
    )
}
