import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-white to-blue-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <motion.div
                        className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                            Connect Communities
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-600">
                            Bridging gaps between faiths with tech and a dash of fun!
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link to="/events" className="btn-primary inline-block text-center">
                                Explore Events
                            </Link>
                            <a href="#features" className="btn-secondary inline-block text-center">
                                Learn More
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-50"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full opacity-50"></div>
                            <div className="relative z-10 grid grid-cols-2 gap-4 p-4 bg-white rounded-2xl shadow-xl">
                                <div className="col-span-2 p-2 rounded-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                                        alt="Community gathering"
                                        className="w-full h-48 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="p-2 rounded-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2304&q=80"
                                        alt="Community service"
                                        className="w-full h-32 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="p-2 rounded-xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2336&q=80"
                                        alt="Cultural exchange"
                                        className="w-full h-32 object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;