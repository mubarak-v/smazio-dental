'use client'; // Required for using hooks and accessing browser-specific features

import React, { useState, useEffect } from 'react';
import Clinics from "../data/clinics"

type appointmentType ={
    name: string,
    phone: string,
    date: string,
    clinic: string,
    message: string,
}

function Appointment() {

    const [formData, setFormData] = useState<appointmentType>({
        name: '',
        phone: '',
        date: '',
        clinic: '',
        message: '',
    });
    
    const [appointments, setAppointments] = useState<appointmentType[]>([]);

    // Load appointments from localStorage on component mount
    useEffect(() => {
        const storedAppointments = localStorage.getItem('appointments');
        if (storedAppointments) {
            setAppointments(JSON.parse(storedAppointments));
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Add the new appointment to the list
        const updatedAppointments = [...appointments, formData];

        // Save to localStorage
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

        // Update state
        setAppointments(updatedAppointments);

        // Clear the form
        setFormData({
            name: '',
            phone: '',
            date: '',
            clinic: '',
            message: '',
        });
    };

    return (
        <main className="container mx-auto p-4">
            <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#98c73d] focus:border-[#98c73d]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#98c73d] focus:border-[#98c73d]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#98c73d] focus:border-[#98c73d]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="clinic" className="block text-sm font-medium text-gray-700">Select Clinic</label>
                        <select
                            id="clinic"
                            name="clinic"
                            value={formData.clinic}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#98c73d] focus:border-[#98c73d]"
                            required
                        >
                            <option value="">Select an option</option>
                            {
                                Clinics.map((clinic) => (
                                    <option key={clinic.id} value={clinic.name}>
                                        {clinic.name}
                                    </option>
                                ))
                            }

                            {/* <option value="general">General Dentistry</option>
                            <option value="orthodontics">Orthodontics</option>
                            <option value="pediatric">Pediatric Dentistry</option>
                            <option value="cosmetic">Cosmetic Dentistry</option> */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#98c73d] focus:border-[#98c73d]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#98c73d] text-white p-2 rounded-md hover:bg-[#86b034]"
                    >
                        Submit
                    </button>
                </form>
            </section>

            <section className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Your Appointments</h2>
                <div className="space-y-4">
                    {appointments.length > 0 ? (
                        appointments.map((appointment, index) => (
                            <div key={index} className="p-4 border border-gray-300 rounded-md shadow-sm">
                                <h3 className="text-lg font-semibold">Appointment {index + 1}</h3>
                                <p><strong>Name:</strong> {appointment.name}</p>
                                <p><strong>Phone:</strong> {appointment.phone}</p>
                                <p><strong>Date:</strong> {appointment.date}</p>
                                <p><strong>Clinic:</strong> {appointment.clinic}</p>
                                <p><strong>Message:</strong> {appointment.message}</p>
                            </div>
                        ))
                    ) : (
                        <p>No appointments found.</p>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Appointment;
