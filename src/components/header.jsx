import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaPhone, FaBars, FaTimes, FaUser } from 'react-icons/fa';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white shadow-md fixed w-full z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold flex items-center">
                    <FaHome className="mr-2" />
                    CrudApp
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-yellow-400 flex items-center">
                        <FaHome className="mr-2" />
                        Home
                    </Link>
                    <Link to="/user-list" className="hover:text-yellow-400 flex items-center">
                        <FaUser className="mr-2" />
                        User List
                    </Link>
                    <Link to="/about" className="hover:text-yellow-400 flex items-center">
                        <FaInfoCircle className="mr-2" />
                        About
                    </Link>
                    <Link to="/contact" className="hover:text-yellow-400 flex items-center">
                        <FaPhone className="mr-2" />
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={toggleMobileMenu}
                    className="text-2xl md:hidden focus:outline-none"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-md">
                        <Link to="/" onClick={toggleMobileMenu} className="block py-2 px-4 hover:bg-gray-700">
                            <FaHome className="inline-block mr-2" />
                            Home
                        </Link>
                        <Link to="/user-list" onClick={toggleMobileMenu} className="block py-2 px-4 hover:bg-gray-700">
                            <FaInfoCircle className="inline-block mr-2" />
                            User List
                        </Link>
                        <Link to="/about" onClick={toggleMobileMenu} className="block py-2 px-4 hover:bg-gray-700">
                            <FaInfoCircle className="inline-block mr-2" />
                            About
                        </Link>
                        <Link to="/contact" onClick={toggleMobileMenu} className="block py-2 px-4 hover:bg-gray-700">
                            <FaPhone className="inline-block mr-2" />
                            Contact
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
