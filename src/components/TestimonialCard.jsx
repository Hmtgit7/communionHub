import { motion } from 'framer-motion';

const TestimonialCard = ({ name, location, testimonial, imageSrc, delay = 0 }) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
        >
            <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{testimonial}</p>
            <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                    <img
                        className="h-12 w-12 rounded-full object-cover"
                        src={imageSrc}
                        alt={name}
                    />
                </div>
                <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{location}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;