import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { FiCalendar, FiMapPin, FiUsers } from 'react-icons/fi';

const EventCard = ({ event, delay = 0 }) => {
    const { title, date, location, description, category, image } = event;

    // Determine category badge color
    const getCategoryColor = (cat) => {
        switch (cat.toLowerCase()) {
            case 'religious':
                return 'bg-purple-100 text-purple-800';
            case 'social':
                return 'bg-blue-100 text-blue-800';
            case 'charity':
                return 'bg-green-100 text-green-800';
            case 'educational':
                return 'bg-yellow-100 text-yellow-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image || 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
                        {category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>

                <div className="flex items-center mb-3 text-gray-600">
                    <FiCalendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{format(new Date(date), 'MMMM dd, yyyy')}</span>
                </div>

                <div className="flex items-center mb-3 text-gray-600">
                    <FiMapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{location}</span>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

                <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-500">
                        <FiUsers className="w-4 h-4 mr-1" />
                        <span className="text-sm">12 attending</span>
                    </div>

                    <button className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md transition-colors duration-300 text-sm font-medium">
                        View Details
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default EventCard;