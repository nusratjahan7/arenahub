'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const reviews = [
    {
        id: 1,
        name: "Rafiul Islam",
        role: "Football Player",
        photo:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        rating: 5,
        text: "Absolutely world-class facilities. The turf quality is unmatched and booking was seamless. Will definitely come back every weekend!",
        facility: "Green Arena",
    },
    {
        id: 2,
        name: "Nusrat Jahan",
        role: "Badminton Enthusiast",
        photo:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        rating: 5,
        text: "The indoor courts are spotless and well-maintained. Staff is super friendly and the lighting is perfect for evening sessions.",
        facility: "Smash Court",
    },
    {
        id: 3,
        name: "Tanvir Ahmed",
        role: "Cricket Coach",
        photo:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        rating: 4,
        text: "Great practice nets and ample space for team drills. Booking system is very convenient. Highly recommended for serious players.",
        facility: "Cricket Hub",
    },
    {
        id: 4,
        name: "Sadia Rahman",
        role: "Yoga Instructor",
        photo:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
        rating: 5,
        text: "The studio space is calm, clean and perfectly sized. Natural lighting makes every session feel refreshing. Love this place!",
        facility: "Yoga & Wellness Studio",
    },
    {
        id: 5,
        name: "Mehedi Hasan",
        role: "Basketball Player",
        photo:
            "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
        rating: 4,
        text: "Solid court with good grip. The locker rooms are clean and the overall vibe is very professional. Great value for money.",
        facility: "Indoor Basketball Hub",
    },
    {
        id: 6,
        name: "Lamia Sultana",
        role: "Swimmer",
        photo:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        rating: 5,
        text: "The pool is always crystal clear and the lanes are well-marked. Early morning slots are perfect. Best swimming facility in Dhaka!",
        facility: "Blue Wave Swimming Complex",
    },
];

const StarRating = ({ rating }) => (
    <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
            <svg
                key={star}
                className={`w-4 h-4 ${star <= rating ? 'text-amber-400' : 'text-gray-200'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
        ))}
    </div>
);

const ReviewCard = ({ review }) => (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 h-full">
        <StarRating rating={review.rating} />
        <p className="text-gray-600 text-sm leading-relaxed flex-1">"{review.text}"</p>
        <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
            <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs font-bold shrink-0">
                <Image
                    height={40}
                    width={40}
                    src={review.photo}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
            </div>
            <div>
                <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                <p className="text-xs text-gray-400">{review.role} · {review.facility}</p>
            </div>
        </div>
    </div>
);

const Review = () => {
    const [swiper, setSwiper] = useState(null);

    return (
        <section className="py-16 px-4 max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2"
                    >
                        What People Say
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-serif font-bold text-(--green)"
                    >
                        Player Reviews
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 text-sm mt-1.5"
                    >
                        Real experiences from real athletes across our facilities.
                    </motion.p>
                </div>

                {/* Nav Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex gap-2 shrink-0"
                >
                    <button
                        onClick={() => swiper?.slidePrev()}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                    >
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => swiper?.slideNext()}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
                    >
                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </motion.div>
            </div>

            {/* Swiper */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Swiper
                    modules={[Autoplay, Pagination]}
                    onSwiper={setSwiper}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-10"
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <ReviewCard review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </section>
    );
};

export default Review;