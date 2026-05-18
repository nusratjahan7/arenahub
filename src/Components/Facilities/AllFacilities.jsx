"use client";
import { useState, useEffect } from "react";
import FacilityCard from "@/Components/Facilities/FacilityCard";
import { TypeDropdown } from "@/Components/TypeDropdown";

const AllFacilities = () => {
    const [facilities, setFacilities] = useState([]);
    const [search, setSearch] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        const query = new URLSearchParams();
        if (search) query.set('search', search);
        if (type) query.set('type', type);

        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility?${query.toString()}`)
            .then(res => res.json())
            .then(data => setFacilities(data));
    }, [search, type]);

    return (
        <div className="w-11/12 mx-auto my-9 space-y-6">
            {/* Header */}
            <div className="space-y-1">
                <h1 className="text-3xl font-serif font-bold text-(--green)">All Facilities</h1>
                <p className="text-xs text-gray-500">
                    {facilities.length} facili{facilities.length !== 1 ? "ties" : "ty"} ready to book.
                </p>
            </div>

            {/* Search + Filter Row */}
            <div className="flex flex-col sm:flex-row gap-3">
                {/* Search */}
                <div className="relative flex-1">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                    </svg>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search facilities by name..."
                        className="w-full rounded-xl border border-gray-300 pl-10 pr-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-500"
                    />
                    {search && (
                        <button
                            onClick={() => setSearch('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>
                    )}
                </div>

                {/* Dropdown Filter */}
                <TypeDropdown type={type} setType={setType} />

                {/* Reset */}
                {(search || type) && (
                    <button
                        onClick={() => { setSearch(''); setType(''); }}
                        className="sm:w-auto px-4 py-2.5 rounded-xl text-sm font-medium border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
                    >
                        Reset
                    </button>
                )}
            </div>

            {/* Results */}
            {facilities.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-9 gap-3 text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl">🔍</div>
                    <p className="text-gray-700 font-medium">No facilities match your filters.</p>
                    <p className="text-gray-400 text-sm">Try a different name or type.</p>
                    <button
                        onClick={() => { setSearch(''); setType(''); }}
                        className="mt-2 px-5 py-2 rounded-xl text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 transition-colors"
                    >
                        Clear filters
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {facilities.map(facility =>
                        <FacilityCard key={facility._id} facility={facility} />
                    )}
                </div>
            )}
        </div>
    );
};

export default AllFacilities;