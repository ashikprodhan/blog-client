import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar text-white navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-white">Blog</Link>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-link active text-white" aria-current="page">Home</Link>
                            
                            <Link to="/dashboard" className="nav-link active text-white">Dashboard</Link>
                            <Link to="/createAdmin" className="nav-link active text-white">Create admin</Link>
                            
                            <Link to="/login" className="nav-link active text-white">Login</Link>


                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <form action="" className="d-flex">
                        <input className="form-control me-2" type="search" />
                        <button className="btn btn-outline-success" type="submit">search</button>
                    </form>
                </div>

            </nav>



        </div>
    );
};

export default Header;