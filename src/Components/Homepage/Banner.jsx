'use client'
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiRightArrow } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { MdArrowRightAlt, MdVerifiedUser } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
const Banner = () => {
    return (
        <div className="relative bg-[url('/assets/tenis.jpg')] text-white flex justify-between flex-col items-center bg-no-repeat bg-cover gap-5 h-131 md:h-135">
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#000000] opacity-40"></div>

            {/* Content */}
            <div className="relative z-10">
                <div className='max-w-2xl text-center mt-28 md:mt-20'>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className='text-sm uppercase tracking-widest text-(--text3) mb-6'
                    >
                        Now booking 1,200+ venues
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className='font1 text-4xl md:text-6xl font-bold leading-[1.1] mb-6'>
                        Book the perfect  <span className='text-(--moss2) italic'>sports <br /> arena </span> in seconds.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className='text-lg text-[#cdd0d4] mb-9 max-w-lg'>
                        We combine cutting-edge technology with time-honored farming practices to deliver sustainable, high-yield agricultural solutions for the modern world.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45 }}
                        className='flex gap-4 items-center justify-center'>
                        <Button className=" bg-(--moss2) rounded-full text-(--green) font-bold  ">
                            <Link href="/facilities" className='inline-flex items-center gap-1.5'>Explore Facilities <MdArrowRightAlt /></Link>
                        </Button>
                        <Button className='border bg-transparent'>
                            <Link href="/bookings" className='inline-flex items-center rounded-full text-white font-bold  '>List your facility</Link>
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45 }}
                        className='flex gap-4 items-center justify-center mt-7'>
                        <p className="flex items-center gap-2 text-(--text3)"><FaStar className="text-(--moss2)" /> 4.9 average</p>
                        <p className="flex items-center gap-2 text-(--text3)"><SlCalender className="text-(--moss2)" />Instant booking</p>
                        <p className="flex items-center gap-2 text-(--text3)"><MdVerifiedUser className="text-(--moss2)" />Verified venues</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;