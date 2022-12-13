import React from 'react';
import './Navbar.css';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container d-flex align-center">
            <a className="navbar-brand" href="#programs"><img src="https://www.studentgator.com/assets/images/navbar/studentgator%20icon/logo.svg" alt="Logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                <svg fill='#6f77f4' className='navbar-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item pe-4 px-2 mt-2">
                    <a className="nav-link active" aria-current="page" href="#programs">Home</a>
                </li>
                <li className="nav-item pe-4 px-2 mt-2">
                    <a className="nav-link active" aria-current="page" href="#programs">About</a>
                </li>
                <li className="nav-item pe-4 px-2 mt-2">
                    <a className="nav-link active" aria-current="page" href="#programs">Programs</a>
                </li>
                <li className="nav-item pe-4 px-2 mt-2">
                    <a className="nav-link active" aria-current="page" href="#programs">Blogs</a>
                </li>
                
                </ul>
                <form className='d-flex justify-between align-center' role="search">
                    <a href="#programs"><svg className='search-icon' fill='#6f77f4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg></a>
                <button className="btn login-btn" href="#programs">Login</button>
                </form>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;