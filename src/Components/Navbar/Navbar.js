import React from 'react'
import './Navbar.css'
// Imported logo
import logo from '../../assest/logo.svg'


const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-md bg-body-tertiary">
            <div class="container-fluid container-lg">
                {/* Logo */}
                <a class="navbar-brand" href="./home">
                <img src={logo} alt="logo" />
                </a>

                {/* Icon menu */}
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex gx-5">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">
                                Features
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">
                                Pricing
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href='/'>
                                Resources
                            </a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <button class="btn rounded-pill px-4" type="submit">
                            Login
                        </button>
                        <button class="btn General-btn rounded-pill px-4" type="submit">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
            </nav>
        </div>
    );
}

export default Navbar
