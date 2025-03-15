import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const EventForm = ({ onAddEvent, onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        location: '',
        description: '',
        category: 'social',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.title || !formData.date || !formData.location) {
            alert('Please fill in all required fields');
            return;
        }

        // Add new event
        onAddEvent({
            ...formData,
            id: Date.now(), // Simple ID generation
        });

        // Reset form
        setFormData({
            title: '',
            date: '',
            location: '',
            description: '',
            category: 'social',
        });

        // Close form
        onClose();
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4"
        >
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                <div className="flex justify-between items-center p-6 border-b">
                    <h3 className="text-xl font-semibold text-gray-900">Add New Event</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                        <FiX className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                Event Title *
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                                Date *
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                                Location *
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                            >
                                <option value="religious">Religious</option>
                                <option value="social">Social</option>
                                <option value="charity">Charity</option>
                                <option value="educational">Educational</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                            ></textarea>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
                        >
                            Add Event
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default EventForm;