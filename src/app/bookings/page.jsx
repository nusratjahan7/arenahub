import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { MdSportsSoccer } from 'react-icons/md';
import { BsCalendarX } from 'react-icons/bs';
import Image from 'next/image';


const MyBookings = async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    const user = session?.user;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
        cache: 'no-store',
    });
    const bookings = await res.json();
    console.log(bookings)

    return (
        <div className="w-11/12 max-w-5xl mx-auto my-10 space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
                <p className="text-sm text-gray-500 mt-1">All your reservations in one place.</p>
            </div>

            {/* Empty State */}
            {bookings.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 gap-5 text-center">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                        <BsCalendarX className="w-9 h-9 text-gray-400" />
                    </div>
                    <div className="space-y-1.5">
                        <h2 className="text-xl font-semibold text-gray-800">No bookings yet</h2>
                        <p className="text-sm text-gray-500 max-w-xs">
                            You haven't booked any facility yet. Explore facilities and plan your next{' '}
                            <MdSportsSoccer className="inline w-4 h-4 text-gray-400 mb-0.5" />!
                        </p>
                    </div>
                    <Link
                        href="/facilities"
                        className="mt-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium px-6 py-2.5 rounded-xl transition-colors"
                    >
                        Explore Facilities
                    </Link>
                </div>
            ) : (
                <>
                    {/* Desktop Table */}
                    <div className="hidden md:block rounded-2xl border border-gray-200 overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    {['Facility', 'Date', 'Slot', 'Hours', 'Price', 'Status', 'Action'].map((h) => (
                                        <th key={h} className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wide px-5 py-3.5">
                                            {h}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                {bookings.map((booking) => (
                                    <tr key={booking._id} className="hover:bg-gray-50 transition-colors">
                                        {/* Facility */}
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                {booking.imageUrl && (
                                                    <Image
                                                        height={400}
                                                        width={400}
                                                        src={booking.imageUrl}
                                                        alt={booking.facilityName}
                                                        className="w-10 h-10 rounded-lg object-cover shrink-0"
                                                    />
                                                )}
                                                <span className="font-medium text-gray-800">{booking.facilityName}</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-gray-600">{booking.date}</td>
                                        <td className="px-5 py-4 text-gray-600">{booking.slot}</td>
                                        <td className="px-5 py-4 text-gray-600">{booking.hours}</td>
                                        <td className="px-5 py-4 font-medium text-gray-800">${booking.totalPrice?.toFixed(2)}</td>
                                        <td className="px-5 py-4">
                                            <span>Confirm</span>
                                        </td>
                                        <td className="px-5 py-4">
                                            {booking.status !== 'cancelled' && (
                                                <button className="text-xs font-medium border border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-600 px-3 py-1.5 rounded-lg transition-colors">
                                                    Cancel
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="flex flex-col gap-4 md:hidden">
                        {bookings.map((booking) => (
                            <div key={booking._id} className="rounded-2xl border border-gray-200 bg-white p-4 space-y-4">
                                <div className="flex items-center gap-3">
                                    {booking.imageUrl && (
                                        <Image
                                            height={400}
                                            width={400}
                                            src={booking.imageUrl}
                                            alt={booking.facilityName}
                                            className="w-12 h-12 rounded-xl object-cover shrink-0"
                                        />
                                    )}
                                    <div>
                                        <p className="font-semibold text-gray-800">{booking.facilityName}</p>
                                        <span>Confirm</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide">Date</p>
                                        <p className="font-medium text-gray-700">{booking.date}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide">Slot</p>
                                        <p className="font-medium text-gray-700">{booking.slot}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide">Hours</p>
                                        <p className="font-medium text-gray-700">{booking.hours}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase tracking-wide">Price</p>
                                        <p className="font-medium text-gray-700">${booking.totalPrice?.toFixed(2)}</p>
                                    </div>
                                </div>
                                {booking.status !== 'cancelled' && (
                                    <button className="w-full text-sm font-medium border border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-600 py-2 rounded-xl transition-colors">
                                        Cancel Booking
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default MyBookings;