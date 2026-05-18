import React from 'react';
import Link from 'next/link';
import { IoMdFootball } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { GoAlertFill } from 'react-icons/go';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 relative overflow-hidden">

            {/* Field lines background */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" viewBox="0 0 680 520" preserveAspectRatio="xMidYMid slice">
                <rect x="40" y="40" width="600" height="440" rx="8" fill="none" stroke="#354024" strokeWidth="3" />
                <line x1="340" y1="40" x2="340" y2="480" stroke="#354024" strokeWidth="2" />
                <circle cx="340" cy="260" r="70" fill="none" stroke="#354024" strokeWidth="2" />
                <circle cx="340" cy="260" r="4" fill="#354024" />
                <rect x="40" y="155" width="100" height="210" rx="4" fill="none" stroke="#354024" strokeWidth="2" />
                <rect x="540" y="155" width="100" height="210" rx="4" fill="none" stroke="#354024" strokeWidth="2" />
                <rect x="40" y="200" width="45" height="120" rx="2" fill="none" stroke="#354024" strokeWidth="1.5" />
                <rect x="595" y="200" width="45" height="120" rx="2" fill="none" stroke="#354024" strokeWidth="1.5" />
            </svg>

            {/* Badge */}
            <span className="flex items-center gap-1.5 bg-[#c3cf8e] text-[#354024] text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                <GoAlertFill /> Error 404
            </span>

            {/* 404 Number */}
            <div className="flex items-center gap-1 leading-none" style={{ fontSize: 'clamp(96px, 18vw, 140px)', fontWeight: 900, letterSpacing: '-4px' }}>
                <span className="text-[#354024]">4</span>
                <span className="text-[#889063] relative">
                    0
                    <span className="absolute inset-2 rounded-full border-4 border-[#CFBB99]" />
                </span>
                <span className="text-[#354024]">4</span>
            </div>

            {/* Soccer ball icon */}
            <svg width="56" height="56" viewBox="0 0 56 56" className="mt-5">
                <circle cx="28" cy="28" r="26" fill="#E5D7C4" stroke="#889063" strokeWidth="1.5" />
                <polygon points="28,10 35,20 45,20 39,28 42,39 28,33 14,39 17,28 11,20 21,20" fill="none" stroke="#354024" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>

            {/* Text */}
            <h1 className="text-2xl font-bold text-[#382c11] mt-5 text-center">This page is offside</h1>
            <p className="text-[#6C696D] text-sm mt-2 text-center max-w-sm leading-relaxed">
                Looks like the page you're looking for has left the pitch. It may have moved, been removed, or never existed.
            </p>

            {/* Divider */}
            <div className="w-12 h-[3px] bg-[#c3cf8e] rounded-full mt-6" />

            {/* Actions */}
            <div className="flex gap-3 mt-8 flex-wrap justify-center">
                <Link href="/" className="flex items-center gap-2 bg-[#354024] text-[#E5D7C4] px-7 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#889063] transition-colors">
                    <FaHome className='h-4 w-4' /> Back to home
                </Link>
                <Link href="/facilities" className="flex items-center gap-2 border-[1.5px] border-[#889063] text-[#354024] px-7 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#E5D7C4] transition-colors">
                    <IoMdFootball className='h-4 w-4' /> Browse facilities
                </Link>
            </div>
        </div>
    );
};

export default NotFound;