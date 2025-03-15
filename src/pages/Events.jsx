import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';

import EventFilter from '../components/EventFilter';
import EventCard from '../components/EventCard';
import EventForm from '../components/EventForm';

// Sample event data
const initialEvents = [
    {
        id: 1,
        title: 'Interfaith Prayer Service',
        date: '2025-04-10',
        location: 'Community Center, New York',
        description: 'Join us for an evening of prayer and reflection where leaders from various faith traditions will guide us in a shared spiritual experience.',
        category: 'Religious',
        image: 'https://images.unsplash.com/photo-1476829280216-a1b80c2f7287?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 2,
        title: 'Community Food Drive',
        date: '2025-04-15',
        location: 'Downtown Food Bank, Chicago',
        description: 'Help us collect and distribute food to families in need. This is a collaborative effort across multiple faith communities to support our neighbors.',
        category: 'Charity',
        image: 'https://images.unsplash.com/photo-1593113598332-cd59a0c3015c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 3,
        title: 'Faith & Technology Conference',
        date: '2025-04-22',
        location: 'Tech Hub, San Francisco',
        description: 'Explore the intersection of faith and technology in this one-day conference featuring speakers from diverse religious backgrounds and tech industries.',
        category: 'Educational',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80'
    },
    {
        id: 4,
        title: 'Cultural Exchange Dinner',
        date: '2025-04-28',
        location: 'Community Hall, Austin',
        description: 'Share a meal with people from different cultural and religious backgrounds. Bring a dish from your tradition to share with others.',
        category: 'Social',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 5,
        title: 'Youth Leadership Workshop',
        date: '2025-05-05',
        location: 'Youth Center, Boston',
        description: 'A workshop designed for young leaders from diverse faith backgrounds to develop leadership skills and build bridges across communities.',
        category: 'Educational',
        image: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
        id: 6,
        title: 'Meditation Retreat',
        date: '2025-05-10',
        location: 'Nature Sanctuary, Boulder',
        description: 'A weekend retreat featuring meditation practices from various spiritual traditions. Open to practitioners of all levels.',
        category: 'Religious',
        image: 'https://images.unsplash.com/photo-1603688042193-80392d483c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
];

const Events = () => {
    const [events, setEvents] = useState(initialEvents);
    const [filteredEvents, setFilteredEvents] = useState(initialEvents);
    const [showForm, setShowForm] = useState(false);
    const [filters, setFilters] = useState({ category: 'all', query: '' });

    // Apply filters
    useEffect(() => {
        let filtered = [...events];

        // Filter by category
        if (filters.category !== 'all') {
            filtered = filtered.filter(event =>
                event.category.toLowerCase() === filters.category.toLowerCase()
            );
        }

        // Filter by search query
        if (filters.query) {
            const query = filters.query.toLowerCase();
            filtered = filtered.filter(event =>
                event.title.toLowerCase().includes(query) ||
                event.description.toLowerCase().includes(query) ||
                event.location.toLowerCase().includes(query)
            );
        }

        setFilteredEvents(filtered);
    }, [events, filters]);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const handleAddEvent = (newEvent) => {
        setEvents(prev => [...prev, newEvent]);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover and join events that connect diverse communities through faith, culture, and shared experiences.
                    </p>
                </motion.div>

                <div className="flex justify-between items-center mb-8">
                    <button
                        onClick={() => setShowForm(true)}
                        className="flex items-center bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors duration-300"
                    >
                        <FiPlus className="mr-2" /> Add New Event
                    </button>
                </div>

                <EventFilter onFilterChange={handleFilterChange} />

                {filteredEvents.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <p className="text-xl text-gray-500">No events match your search criteria.</p>
                        <button
                            onClick={() => setFilters({ category: 'all', query: '' })}
                            className="mt-4 text-primary font-medium hover:underline"
                        >
                            Clear filters
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredEvents.map((event, index) => (
                            <EventCard key={event.id} event={event} delay={index * 0.1} />
                        ))}
                    </motion.div>
                )}
            </div>

            <AnimatePresence>
                {showForm && (
                    <EventForm
                        onAddEvent={handleAddEvent}
                        onClose={() => setShowForm(false)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Events;