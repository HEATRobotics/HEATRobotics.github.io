import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header">
            <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-brand">
                        <img
                            src="./assets/team/logo_2.png"
                            alt="HEAT Robotics Logo"
                            className="navbar-logo"
                        />
                    </Link>

                    <div className="nav-links">
                        <Link
                            to="/"
                            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/team"
                            className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}
                        >
                            Our Team
                        </Link>
                        <Link
                            to="/contact"
                            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/sponsors"
                            className={`nav-link ${location.pathname === '/sponsors' ? 'active' : ''}`}
                        >
                            Sponsors
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;