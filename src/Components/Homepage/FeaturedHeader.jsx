'use client';

import { motion } from 'framer-motion';

const FeaturedHeader = () => {
    return (
        <div className="mb-8">
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2"
            >
                Top Picks
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-serif font-bold text-(--green) mb-1.5"
            >
                Featured Facilities
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-(--text2)"
            >
                Top-booked arenas this week, hand picked for you.
            </motion.p>
        </div>
    );
};

export default FeaturedHeader;