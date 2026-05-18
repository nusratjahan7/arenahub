'use client';

import { useState } from 'react';
import { Select, ListBox, Label } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { FiArrowRight } from 'react-icons/fi';

const BookingCard = ({ facility }) => {
    const { _id, facilityName, price, slots, imageUrl } = facility;
    const [hours, setHours] = useState(1);
    const [selectedSlot, setSelectedSlot] = useState('');
    const [date, setDate] = useState('');
    const [booked, setBooked] = useState(false);

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const total = (price * hours).toFixed(2);

    const handleBooking = async () => {

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: user?.id,
                    userImage: user?.image,
                    userName: user?.name,
                    userEmail: user?.email,
                    facilityId: _id,
                    facilityName,
                    imageUrl,
                    date,
                    slot: selectedSlot,
                    hours,
                    totalPrice: Number(total),
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Booking failed');

            setBooked(true);
            toast.success('Booked Successfully!');
        } catch (err) {
            console.error(err);
            toast.error(err.message || 'Something went wrong.');
        }
    };

    return (
        <div className="rounded-2xl border border-gray-200 shadow-lg bg-white p-6 flex flex-col gap-5 sticky top-6">
            <h2 className="text-xl font-bold text-gray-900">Book this facility</h2>

            {/* Facility name (read-only) */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Facility</label>
                <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-500">
                    {facilityName}
                </div>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Booking date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    disabled={booked}
                    className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
            </div>

            {/* Time Slot */}
            <div className="flex flex-col gap-1.5">
                <Select
                    placeholder="Choose a slot"
                    selectedKeys={selectedSlot}
                    onSelectionChange={(key) => setSelectedSlot(key)}
                    className="w-full"
                >
                    <Label className="text-sm font-medium text-gray-700">Time slot</Label>
                    <Select.Trigger className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm">
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            {slots?.map((slot) => (
                                <ListBox.Item key={slot} id={slot} textValue={slot}>
                                    {slot}
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            ))}
                        </ListBox>
                    </Select.Popover>
                </Select>
            </div>

            {/* Hours */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Hours</label>
                <input
                    type="number"
                    min={1}
                    max={12}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    disabled={booked}
                    className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-(--noir) transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pt-1 border-t border-gray-100">
                <span className="text-sm text-gray-500">Total</span>
                <span className="text-2xl font-bold text-gray-900">${total}</span>
            </div>

            {/* Button */}
            <button
                onClick={handleBooking}
                disabled={booked}
                className={`w-full transition-colors text-white text-sm font-medium py-2.5 rounded-lg flex items-center justify-center gap-2
                        ${booked
                        ? "bg-gray-400! cursor-not-allowed"
                        : "bg-(--noir) hover:bg-(--noir)/90 cursor-pointer"
                    }`}
            >
                {booked ? "Booked" : "Book Now"}
                {!booked && <FiArrowRight className="w-4 h-4" />}
            </button>
        </div>
    );
};

export default BookingCard;