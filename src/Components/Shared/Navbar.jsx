"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Avatar, CloseIcon } from "@heroui/react";
import { TrophyIcon } from "lucide-react";
import Image from "next/image";


const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const { data: session } = authClient.useSession();
    const user = session?.user;

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const guestLinks = [
        { label: "Home", href: "/" },
        { label: "All Facilities", href: "/facilities" },
    ];

    const authLinks = [
        { label: "Home", href: "/" },
        { label: "All Facilities", href: "/facilities" },
        { label: "My Bookings", href: "/bookings" },
        { label: "Add Facility", href: "/facilities-add" },
        { label: "Manage My Facilities", href: "/facilities-manage" },
    ];

    const navLinks = user ? authLinks : guestLinks;

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
                            <div className="w-8 h-8 bg-(--noir) text-white rounded-lg flex items-center justify-center">
                                <TrophyIcon />
                            </div>
                            <span className="text-[15px] font-bold text-(--noir) tracking-tight">
                                ArenaHub
                            </span>
                        </Link>

                        {/* Desktop Nav Links */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-1.5 rounded-md transition-colors duration-150 font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Right Side */}
                        <div className="flex items-center gap-2">
                            {!user && (
                                <button
                                    onClick={() => router.push("/login")}
                                    className="hidden md:inline-flex items-center bg-(--noir) hover:bg-(--noir)/80 text-white text-sm font-medium px-4 py-1.5 rounded-lg transition-colors duration-150"
                                >
                                    Login
                                </button>
                            )}

                            {user && (
                                <div className="relative hidden md:block" ref={dropdownRef}>
                                    <button
                                        onClick={() => setDropdownOpen((prev) => !prev)}
                                        className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors overflow-hidden"
                                    >
                                        {user.image ? (
                                            <Image
                                                src={user.image}
                                                alt={user.name}
                                                height={44}
                                                width={44}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            (user.name?.[0] || "U").toUpperCase()
                                        )}
                                    </button>

                                    {dropdownOpen && (
                                        <div className="absolute right-0 top-10 w-52 bg-white rounded-xl border border-gray-100 shadow-lg py-1.5 z-50">
                                            <div className="px-4 py-2.5 border-b border-gray-100 mb-1">
                                                <p className="text-sm font-semibold text-gray-900">{user.name}</p>
                                                <p className="text-xs text-gray-500 mt-0.5 truncate">{user.email}</p>
                                            </div>

                                            {[
                                                { label: "My Bookings", href: "/bookings" },
                                                { label: "Add Facility", href: "/facilities/add" },
                                                { label: "Manage My Facilities", href: "/facilities/manage" },
                                            ].map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setDropdownOpen(false)}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}

                                            <div className="border-t border-gray-100 mt-1 pt-1">
                                                <button
                                                    onClick={() => authClient.signOut()}
                                                    className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="md:hidden w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                                <HamburgerIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl p-4">
                        <div className="flex justify-end">
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
                            >
                                <CloseIcon />
                            </button>
                        </div>

                        <nav className="flex flex-col mt-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-6 py-3.5 text-[15px] text-gray-800 hover:bg-gray-50 transition-colors border-b border-gray-50 font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Bottom Login / Logout */}
                        <div className="mt-4">
                            {!user ? (
                                <button
                                    onClick={() => { router.push("/login"); setMobileMenuOpen(false); }}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg"
                                >
                                    Login
                                </button>
                            ) : (
                                <button
                                    onClick={() => { authClient.signOut(); setMobileMenuOpen(false); }}
                                    className="w-full border border-red-200 text-red-500 hover:bg-red-50 text-sm font-medium py-2.5 rounded-lg"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
function HamburgerIcon() { return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <line x1="3" y1="6" x2="21" y2="6" /> <line x1="3" y1="12" x2="21" y2="12" /> <line x1="3" y1="18" x2="21" y2="18" /> </svg>); }

export default Navbar;