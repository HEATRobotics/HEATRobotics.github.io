import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu
import './navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="header">
            <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-brand">
                        <img
                            src="./assets/team/logo_2.png"
                            alt="HEAT Robotics Logo"
                            className="navbar-logo desktop-logo"
                        />
                        <img
                            src="./assets/team/logo_3.png"
                            alt="HEAT Robotics Mobile Logo"
                            className="navbar-logo mobile-logo"
                        />
                    </Link>


                    {/* Mobile Menu Button */}
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>

                    {/* Nav Links */}
                    <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
                        {["/", "/team", "/contact", "/sponsors"].map((path) => (
                            <Link
                                key={path}
                                to={path}
                                className={`nav-link ${location.pathname === path ? "active" : ""}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {path === "/" ? "Home" : path.substring(1).replace("-", " ")}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;