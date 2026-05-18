'use client';

import { useState } from 'react';
import { Button, FieldError, Input, Label, TextField, Select, ListBox, TextArea, Chip, Form } from '@heroui/react';
import { toast } from 'sonner';
import { redirect } from 'next/dist/server/api-utils';

const AddFacilityForm = ({ userId }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const facility = Object.fromEntries(formData.entries());


        const payload = {
            ...facility,
            userId,
            price: Number(facility.price),
            capacity: Number(facility.capacity),
            slots: facility.slots.split(',').map(s => s.trim()).filter(Boolean),
        };

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facility`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            // console.log(data)

            if (!res.ok) throw new Error(data.message || 'Failed to add facility');

            if (data) {
                toast.success('Facility added successfully!');
                e.target.reset();

            }

        } catch (err) {
            console.error(err);
            toast.error(err.message || 'Something went wrong.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form onSubmit={onSubmit} className="p-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Facility Name */}
                <div className="md:col-span-2">
                    <TextField name="facilityName" isRequired>
                        <Label>Facility Name</Label>
                        <Input placeholder="Enter your facility name" className="rounded-2xl" />
                        <FieldError />
                    </TextField>
                </div>

                {/* Type */}
                <div>
                    <Select name="type" isRequired className="w-full" placeholder="Select type">
                        <Label>Facility type</Label>
                        <Select.Trigger className="rounded-2xl">
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                {['Football', 'Basketball', 'Tennis', 'Swimming', 'Cricket', 'Gym', 'Badminton', 'Volleyball', 'Other'].map((type) => (
                                    <ListBox.Item key={type} id={type} textValue={type}>
                                        {type}
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                ))}
                            </ListBox>
                        </Select.Popover>
                    </Select>
                </div>

                {/* Location */}
                <TextField name="location" isRequired>
                    <Label>Location</Label>
                    <Input placeholder="Dhaka" className="rounded-2xl" />
                    <FieldError />
                </TextField>

                {/* Image URL */}
                <div className="md:col-span-2">
                    <TextField name="imageUrl" isRequired>
                        <Label>Image URL</Label>
                        <Input type="url" placeholder="https://i.ibb.co/..." className="rounded-2xl" />
                        <FieldError />
                    </TextField>
                </div>

                {/* Price */}
                <TextField name="price" isRequired>
                    <Label>Price per hour ($)</Label>
                    <Input type="number" placeholder="0" className="rounded-2xl" />
                    <FieldError />
                </TextField>

                {/* Capacity */}
                <TextField name="capacity" isRequired>
                    <Label>Capacity</Label>
                    <Input type="number" placeholder="1" className="rounded-2xl" />
                    <FieldError />
                </TextField>

                {/* Time Slots */}
                <div className="md:col-span-2 flex flex-col gap-2 w-full">
                    <TextField name="slots" isRequired>
                        <Label>Available time slots</Label>
                        <Input placeholder="08:00-09:00, 09:00-10:00, 18:00-19:00" />
                        <FieldError />
                    </TextField>
                    <span className="text-slate-400 text-xs mt-0.5">
                        Comma-separated time ranges
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                        {['08:00-09:00', '09:00-10:00', '18:00-19:00'].map((slot, i) => (
                            <Chip
                                key={i}
                                size="sm"
                                variant="flat"
                                className={{
                                    base: 'bg-blue-50 border border-blue-100',
                                    content: 'text-blue-700 text-xs font-medium px-1',
                                }}
                            >
                                {slot}
                            </Chip>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                    <TextField name="description" isRequired>
                        <Label>Description</Label>
                        <TextArea placeholder="Describe the facility..." rows={4} className="rounded-2xl" />
                        <FieldError />
                    </TextField>
                </div>
            </div>

            <Button
                type="submit"
                isDisabled={isSubmitting}
                className="rounded-none w-full bg-(--noir) text-white"
            >
                {isSubmitting ? 'Submitting...' : 'Add Facility'}
            </Button>
        </Form>
    );
};

export default AddFacilityForm;