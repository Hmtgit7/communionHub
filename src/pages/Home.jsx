import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TestimonialCard from '../components/TestimonialCard';
import { FiUsers, FiStar, FiGlobe, FiTrendingUp } from 'react-icons/fi';

const Home = () => {
    const [testimonialIndex, setTestimonialIndex] = useState(0);

    // Testimonial data
    const testimonials = [
        {
            name: "John M.",
            location: "USA",
            testimonial: "Communion has transformed how I connect with my community, fostering unity and understanding among diverse faith traditions.",
            imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            name: "Rohan K.",
            location: "India",
            testimonial: "Being part of Communion is life-changing, blending innovation with spirituality to create a truly inclusive space. The events and discussions are eye-opening.",
            imageSrc: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
        },
        {
            name: "Amira L.",
            location: "UAE",
            testimonial: "Through Communion, I've joined events and discussions that broadened my perspective and connected me globally. The platform is intuitive and engaging.",
            imageSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
        },
        {
            name: "Michael P.",
            location: "Canada",
            testimonial: "The events organized through Communion have helped me connect with people I would have never met otherwise. It's expanding my worldview in meaningful ways.",
            imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            name: "Sarah J.",
            location: "Australia",
            testimonial: "As someone new to my community, Communion has been the perfect platform to connect with like-minded individuals and learn about different faith practices.",
            imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            name: "John M.",
            location: "USA",
            testimonial: "Communion has transformed how I connect with my community, fostering unity and understanding among diverse faith traditions.",
            imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        }
    ];

    // Helper functions for navigation
    const nextTestimonial = () => {
        setTestimonialIndex((prevIndex) =>
            prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
        );
    };

    const prevTestimonial = () => {
        setTestimonialIndex((prevIndex) =>
            prevIndex === 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3
        );
    };

    return (
        <div className="fade-in">
            <HeroSection />

            {/* Why Communion Section */}
            <section id="features" className="py-16 bg-secondary text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Why Communion Rocks!</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-300">
                            Communion is not just another platform—it's a vibrant space that unites diverse faiths, beliefs, and traditions. By promoting collaboration and connection, we're fostering a world where differences become strengths and unity becomes the norm.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 rounded-xl p-6"
                        >
                            <div className="mb-4">
                                <FiUsers className="w-12 h-12 text-primary-light" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Unifying Communities</h3>
                            <p className="text-gray-300">
                                Communion bridges diverse religious communities, becoming the social glue that brings people together across traditional boundaries.
                            </p>
                            <div className="mt-4">
                                <Link to="/events" className="inline-flex items-center text-primary-light font-medium hover:underline">
                                    Learn More
                                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 rounded-xl p-6"
                        >
                            <div className="mb-4">
                                <FiStar className="w-12 h-12 text-primary-light" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Innovative and Fun</h3>
                            <p className="text-gray-300">
                                Experience faith in a fresh way through our interactive features, engaging events, and modern approach to spirituality and community building.
                            </p>
                            <div className="mt-4">
                                <Link to="/events" className="inline-flex items-center text-primary-light font-medium hover:underline">
                                    Learn More
                                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 rounded-xl p-6"
                        >
                            <div className="mb-4">
                                <FiGlobe className="w-12 h-12 text-primary-light" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Promoting Unity</h3>
                            <p className="text-gray-300">
                                We foster understanding and harmony between different faith communities through intentional programming and inclusive design.
                            </p>
                            <div className="mt-4">
                                <Link to="/events" className="inline-flex items-center text-primary-light font-medium hover:underline">
                                    Learn More
                                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="py-12 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-sm"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                                <span className="text-primary font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Happy Community</h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-sm"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                                <span className="text-primary font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">210% Boost in Engagement</h3>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-sm"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                                <span className="text-primary font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">172+ Ranked Communities</h3>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Engagement Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">More Than <span className="text-blue-500">10,000+</span> Engagements daily across the world</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Experience the power of connection with over 10,000 daily interactions worldwide, uniting diverse communities through innovation, collaboration, and shared spirituality.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="grid grid-cols-2 gap-6">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="col-span-2 bg-gray-100 p-4 rounded-2xl overflow-hidden h-64 relative"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                        alt="Team collaboration"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-100 p-4 rounded-2xl overflow-hidden h-40 relative"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80"
                                        alt="Community hands"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-100 p-4 rounded-2xl overflow-hidden h-40 relative"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80"
                                        alt="Community discussion"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </motion.div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <FiGlobe className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Global Connectivity</h3>
                                        <p className="text-gray-600">
                                            Connecting people from diverse religious communities worldwide, fostering meaningful engagement.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <FiUsers className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Foster Inclusive Collaboration</h3>
                                        <p className="text-gray-600">
                                            Engage, collaborate, and connect with diverse people to build inclusive and meaningful relationships.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start mb-4">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <FiStar className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Innovative Technology</h3>
                                        <p className="text-gray-600">
                                            Utilizing cutting-edge tools to enhance user experience and encourage active participation.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <FiTrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Daily Growth</h3>
                                        <p className="text-gray-600">
                                            Over 10,000+ daily engagements, creating a thriving community where spirituality and innovation meet.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">Trusted by Over 1500+ Active Global Users</h2>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Join a growing community of over 1500 users worldwide who trust us to connect, engage, and thrive together.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.slice(testimonialIndex, testimonialIndex + 3).map((testimonial, index) => (
                            <TestimonialCard
                                key={testimonial.name}
                                name={testimonial.name}
                                location={testimonial.location}
                                testimonial={testimonial.testimonial}
                                imageSrc={testimonial.imageSrc}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center mt-10">
                        <div className="flex space-x-2">
                            <button
                                onClick={prevTestimonial}
                                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                </svg>
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                        </motion.div>

                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="border-t border-gray-200 pt-6"
                            >
                                <button className="flex justify-between items-center w-full text-left focus:outline-none">
                                    <h3 className="text-lg font-medium text-gray-900">What is the Communion app?</h3>
                                    <span className="ml-6 flex-shrink-0">
                                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="border-t border-gray-200 pt-6"
                            >
                                <button className="flex justify-between items-center w-full text-left focus:outline-none">
                                    <h3 className="text-lg font-medium text-gray-900">How does it promote social cohesion?</h3>
                                    <span className="ml-6 flex-shrink-0">
                                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="border-t border-gray-200 pt-6"
                            >
                                <button className="flex justify-between items-center w-full text-left focus:outline-none">
                                    <h3 className="text-lg font-medium text-gray-900">Is it free to use?</h3>
                                    <span className="ml-6 flex-shrink-0">
                                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="border-t border-gray-200 pt-6"
                            >
                                <button className="flex justify-between items-center w-full text-left focus:outline-none">
                                    <h3 className="text-lg font-medium text-gray-900">Can I meet new people?</h3>
                                    <span className="ml-6 flex-shrink-0">
                                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="border-t border-gray-200 pt-6"
                            >
                                <button className="flex justify-between items-center w-full text-left focus:outline-none">
                                    <h3 className="text-lg font-medium text-gray-900">What if I have more questions?</h3>
                                    <span className="ml-6 flex-shrink-0">
                                        <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </span>
                                </button>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="mt-10 text-center"
                        >
                            <Link to="/events" className="inline-block text-primary font-medium">
                                View All
                                <svg className="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary">
                <div className="container mx-auto px-4 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-6 text-white"
                    >
                        Ready to connect with diverse communities?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
                    >
                        Join thousands of others building bridges across faiths and cultures.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/events"
                            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-md shadow-lg hover:bg-gray-100 transition-colors duration-300"
                        >
                            Explore Events
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;