import Link from 'next/link';
import Image from 'next/image';
import BookingCard from '@/Components/Facilities/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export async function generateMetadata({ params }) {
    return {
        title: "ArenaHub | Facility Details",
        description: "View facility details",
    };
}

const FacilityDetails = async ({ params }) => {
    const { id } = await params;
    const token = await auth.api.getToken({
        headers: await headers()
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility/${id}`, {
        headers: {
            authorization: `Bearer ${token.token}`
        },
        cache: 'no-store',
    });
    const facility = await res.json();

    const {
        facilityName,
        type,
        description,
        imageUrl,
        location,
        capacity,
        price,
        slots,
    } = facility;

    const slotsArray = Array.isArray(slots)
        ? slots
        : typeof slots === 'string'
            ? slots.split(',')
            : [];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="w-11/12 max-w-6xl mx-auto py-8 space-y-8">

                {/* Back */}
                <Link
                    href="/facilities"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    Back
                </Link>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">

                    {/* Left — Details */}
                    <div className="space-y-6">
                        {/* Image */}
                        <div className="rounded-2xl overflow-hidden h-72 sm:h-96 w-full">
                            {imageUrl ? (
                                <Image
                                    src={imageUrl}
                                    height={400}
                                    width={400}
                                    alt={facilityName}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-400 text-sm">No image available</span>
                                </div>
                            )}
                        </div>

                        {/* Title row */}
                        <div className="flex flex-wrap items-start justify-between gap-3">
                            <div className="space-y-2">
                                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                                    {type}
                                </span>
                                <h1 className="text-3xl font-bold text-gray-900">{facilityName}</h1>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        {location}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                        </svg>
                                        Capacity {capacity}
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-3xl font-bold text-gray-900">${price}</span>
                                <span className="text-sm text-gray-400">/hr</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

                        {/* Time Slots */}
                        <div className="space-y-3">
                            <h3 className="font-semibold text-gray-800 text-sm">Available time slots</h3>
                            <div className="flex flex-wrap gap-2">
                                {slotsArray.map((slot, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-1.5 text-xs font-medium border border-gray-200 bg-white text-gray-600 px-3 py-1.5 rounded-full"
                                    >
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        {slot}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — Booking Card */}
                    <BookingCard facility={facility} />
                </div>
            </div>
        </div>
    );
};

export default FacilityDetails;