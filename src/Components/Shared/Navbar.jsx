"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiTrophy } from "react-icons/bi";


export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;


    const firstLetter = user?.name?.charAt(0)?.toUpperCase();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "All Facilities", href: "/facilities" },
    ];

    const authLinks = [
        { name: "My Bookings", href: "/bookings" },
        { name: "Add Facility", href: "/add-facility" },
        { name: "Manage My Facilities", href: "/manage-facilities" },
    ];

    const handleLogout = async () => {
        await authClient.signOut();
        router.refresh();
    };

    return (
        <nav className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-(--noir) flex items-center justify-center text-white">
                            <BiTrophy className="h-6 w-6" />
                        </div>

                        <h1 className="text-2xl font-bold text-(--noir)">
                            ArenaHub
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Always visible */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-(--noir) font-medium transition"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {user &&
                            authLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:text-(--noir) font-medium transition"
                                >
                                    {link.name}
                                </Link>
                            ))}
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">
                        {/* Loading */}
                        {isPending ? (
                            <div className="w-10 h-10 rounded-full border-2 border-gray-300 border-t-(--noir) animate-spin"></div>
                        ) : user ? (
                            <>
                                {/* User Avatar */}
                                <div className="relative">
                                    <button
                                        onClick={() => setDropdown(!dropdown)}
                                        className="w-11 h-11 rounded-full border bg-gray-100 overflow-hidden flex items-center justify-center text-lg font-semibold text-gray-700"
                                    >
                                        {user.image ? (
                                            <Image
                                                src={user.image}
                                                alt="user"
                                                width={44}
                                                height={44}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            firstLetter
                                        )}
                                    </button>

                                    {/* Dropdown */}
                                    {dropdown && (
                                        <div className="absolute right-0 mt-3 w-64 bg-white border rounded-2xl shadow-lg overflow-hidden z-50">
                                            <div className="p-4">
                                                <h2 className="font-semibold text-gray-900">
                                                    {user.name}
                                                </h2>

                                                <p className="text-sm text-gray-500">
                                                    {user.email}
                                                </p>
                                            </div>

                                            <div className="flex flex-col">
                                                <Link
                                                    href="/bookings"
                                                    className="px-4 py-3 hover:bg-gray-100 transition"
                                                >
                                                    My Bookings
                                                </Link>

                                                <Link
                                                    href="/add-facility"
                                                    className="px-4 py-3 hover:bg-gray-100 transition"
                                                >
                                                    Add Facility
                                                </Link>

                                                <Link
                                                    href="/manage-facilities"
                                                    className="px-4 py-3 hover:bg-gray-100 transition"
                                                >
                                                    Manage My Facilities
                                                </Link>

                                                <button
                                                    className="text-left px-4 py-3 hover:bg-red-50 text-red-500 transition"
                                                    onClick={handleLogout}
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <Link
                                href="/login"
                                className="px-5 py-2.5 rounded-xl bg-(--noir) hover:bg-(--noir)/90 text-white font-medium transition hidden md:block"
                            >
                                Login
                            </Link>
                        )}

                        {/* Mobile Button */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="md:hidden w-11 h-11 rounded-xl border flex items-center justify-center"
                        >
                            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenu && (
                    <div className="md:hidden py-5 border-t">
                        <div className="flex flex-col gap-4">

                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}


                            {user &&
                                authLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-700 font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                            {/* Mobile User */}
                            {user ? (
                                <button
                                    onClick={handleLogout}
                                    className="text-left text-red-500 font-medium"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    href="/login"
                                    className="w-fit px-5 py-2 rounded-xl bg-(--noir) text-white"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}