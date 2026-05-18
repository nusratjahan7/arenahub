"use client"
import { MailCheck, MapPinCheck } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { BiPhone, BiTrophy } from 'react-icons/bi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { PiXLogo } from 'react-icons/pi';

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-(--bone)/10">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--noir) text-white">
                            <BiTrophy className="h-5 w-5" />
                        </div>
                        <span className="text-lg font-bold tracking-tight text-(--noir)">ArenaHub</span>
                    </div>
                    <p className="mt-4 max-w-xs text-sm text-gray-700">
                        Book the best sports facilities in your city, by the hour. From turf to tennis, indoor courts to pools.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold">Explore</h4>
                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                        <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
                        <li><Link href="/facilities" className="hover:text-gray-900">All Facilities</Link></li>
                        <li><Link href="/add-facility" className="hover:text-gray-900">List your facility</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-semibold">Contact</h4>
                    <ul className="mt-4 space-y-3 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                            <MailCheck className="h-4 w-4" /> hello@arenahub.app
                        </li>
                        <li className="flex items-center gap-2">
                            <BiPhone className="h-4 w-4" /> +1 (555) 010-2025
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPinCheck className="h-4 w-4" /> 221B Sports St, NY
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-semibold">Follow us</h4>
                    <div className="mt-4 flex items-center gap-3">
                        <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-900" aria-label="Facebook">
                            <FaFacebook className="h-4 w-4" />
                        </a>
                        <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-900" aria-label="Instagram">
                            <FaInstagram className="h-4 w-4" />
                        </a>
                        <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-gray-200 hover:text-gray-900" aria-label="X">
                            <PiXLogo className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200">
                <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-gray-700 sm:px-6 lg:px-8">
                    © {new Date().getFullYear()} ArenaHub. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;