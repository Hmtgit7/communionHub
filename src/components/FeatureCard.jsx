import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, delay = 0 }) => {
    return (
        <motion.div
            className="feature-card bg-white rounded-xl p-6 shadow-md h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
        >
            <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-full bg-blue-100">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600 flex-grow">{description}</p>
            <div className="mt-4">
                <a
                    href="#"
                    className="inline-flex items-center text-primary font-medium hover:underline"
                >
                    Learn More
                    <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        ></path>
                    </svg>
                </a>
            </div>
        </motion.div>
    );
};

export default FeatureCard;