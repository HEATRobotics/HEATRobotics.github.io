import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Side - Logo and Brand */}
                <div className="brand-section">
                    <div className="brand-container">
                        <div className="logo-container">
                            <img
                                src="/assets/team/logo_1.jpg"
                                alt="HEAT Robotics Logo"
                                className="logo"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side - Navigation Links */}
                <nav className="nav-section">
                    <ul className="nav-list">
                        <li>
                            <Link to="/" className="nav-item-container">
                                <span className="nav-item">Home</span>
                                <ChevronRight size={16} className="nav-icon" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/team" className="nav-item-container">
                                <span className="nav-item">Our Team</span>
                                <ChevronRight size={16} className="nav-icon" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-item-container">
                                <span className="nav-item">Contact</span>
                                <ChevronRight size={16} className="nav-icon" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/sponsors" className="nav-item-container">
                                <span className="nav-item">Sponsors</span>
                                <ChevronRight size={16} className="nav-icon" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;