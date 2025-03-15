import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 mr-2"
                                viewBox="0 0 24 24"
                                fill="white"
                            >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                            <span className="text-2xl font-bold">Communion</span>
                        </div>
                        <p className="mb-6 text-gray-300">
                            Discover the power of connection with Communion. Uniting diverse communities through spirituality and innovation, we foster inclusivity, collaboration, and social cohesion for a better world.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                <FaTwitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors">
                                <FaYoutube className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-300 hover:text-white transition-colors">Communities</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-300 hover:text-white transition-colors">Leaders</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-300 hover:text-white transition-colors">Support</Link>
                            </li>
                            <li>
                                <Link to="#" className="text-gray-300 hover:text-white transition-colors">Profile</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <p className="text-gray-300 mb-4">contact@communionhub.org</p>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your email"
                                    className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors"
                            >
                                Subscribe to Newsletter
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">© 2024. All rights reserved to Communion</p>
                    <div className="mt-4 md:mt-0 space-x-6">
                        <Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;