import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiSearch, FiCalendar } from 'react-icons/fi';

const EventFilter = ({ onFilterChange }) => {
    const [category, setCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        onFilterChange({ category: newCategory, query: searchQuery });
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        onFilterChange({ category, query: e.target.value });
    };

    const categories = [
        { id: 'all', name: 'All' },
        { id: 'religious', name: 'Religious' },
        { id: 'social', name: 'Social' },
        { id: 'charity', name: 'Charity' },
        { id: 'educational', name: 'Educational' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-1/3">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FiSearch className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full p-3 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary focus:outline-none"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>

                <div className="lg:w-1/3">
                    <div className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0">
                        <FiFilter className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium flex-shrink-0">Filter:</span>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryChange(cat.id)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${category === cat.id
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/3">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FiCalendar className="w-5 h-5 text-gray-400" />
                        </div>
                        <select
                            className="block w-full p-3 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-primary focus:border-primary focus:outline-none"
                        >
                            <option value="">All Dates</option>
                            <option value="upcoming">Upcoming</option>
                            <option value="thisWeek">This Week</option>
                            <option value="thisMonth">This Month</option>
                        </select>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default EventFilter;