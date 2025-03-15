import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigation = [
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
        { name: 'Communities', path: '#' },
        { name: 'Leaders', path: '#' },
        { name: 'Support', path: '#' },
    ];

    return (
        <header className="sticky top-0 bg-white z-50 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center">
                            <div className="text-primary text-3xl font-bold">
                                <span className="text-primary flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 mr-2"
                                        viewBox="0 0 24 24"
                                        fill="#0047AB"
                                    >
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                    </svg>
                                    Communion
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`px-1 py-2 text-base font-medium transition-colors duration-300 ${location.pathname === item.path
                                    ? 'text-primary border-b-2 border-primary'
                                    : 'text-gray-700 hover:text-primary'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Link
                        to="#"
                        className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md font-medium transition-all duration-300"
                    >
                        Sign in
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
                    >
                        {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-white"
                >
                    <div className="px-4 pt-2 pb-4 space-y-1 border-t">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === item.path
                                        ? 'text-primary bg-blue-50'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="#"
                            className="block w-full text-center mt-4 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign in
                        </Link>
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Header;