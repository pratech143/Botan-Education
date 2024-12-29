import React, { useState } from 'react';
import axios from 'axios';
import logo from "/png100px/logo.png";

function Contactus() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const sendMail = () => {
        if (!name.trim() || !email.trim() || !number.trim() || !message.trim()) {
            setErrorMessage("Please fill out all fields.");
            setTimeout(() => setErrorMessage(""), 5000);
            return; // Stop further execution if validation fails
        }
        axios
            .get("http://localhost:5000/", {
                params: { name, email, number, message },
            })
            .then(() => {
                setSuccessMessage("Application submitted successfully. We will contact you shortly.");
                setErrorMessage(''); // Clear any previous error message
                // Clear the success message after 5 seconds
                setTimeout(() => setSuccessMessage(''), 5000);
            })
            .catch((err) => {
                console.error("Error sending mail:", err);
                setErrorMessage("An error occurred while sending your application. Please try again later.");
                setSuccessMessage(''); // Clear any previous success message
                // Clear the error message after 5 seconds
                setTimeout(() => setErrorMessage(''), 5000);
            });
    };

    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg dark:bg-gray-800 dark:text-white">
                            <div className='w-[75%]'>
                                <img src={logo} alt="Logo" />
                            </div>
                            <h1 className="text-3xl sm:text-4xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-300 mt-2">
                                Fill in the form to start a conversation
                            </p>
                            <div className="flex items-center mt-8 text-gray-600 dark:text-gray-300">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500 dark:text-gray-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    kathmandu, bagbazar (front of pk campus)
                                </div>
                            </div>
                            <div className="flex items-center mt-4 text-gray-600 dark:text-gray-300">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500 dark:text-gray-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +977 9840044318
                                </div>
                            </div>
                            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-300">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500 dark:text-gray-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    info.botaneducation@gmail.com
                                </div>
                            </div>
                        </div>
                        <form className="p-6 flex flex-col justify-center dark:bg-gray-800 dark:text-white">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">
                                    Telephone Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="message" className="hidden">
                                    Message
                                </label>
                                <input
                                    type="text"
                                    name="message"
                                    id="message"
                                    placeholder="Enter Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <button
                                type="button"
                                className="md:w-32 bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
                                onClick={sendMail}
                            >
                                Submit
                            </button>
                            {successMessage && (
                                <div className="mt-3 p-3 bg-green-100 text-green-700 rounded">
                                    {successMessage}
                                </div>
                            )}
                            {errorMessage && (
                                <div className="mt-3 p-3 bg-red-100 text-red-700 rounded">
                                    {errorMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                <div className='relative border-2 mt-3 dark:border-gray-700 rounded-md'>
                        <h2 className='mt-4 mb-2 text-gray-700 dark:text-white font-semibold text-3xl'>Our Location</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.378418656724!2d85.31773381016535!3d27.70560012547076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19006ea7f52d%3A0xbd69221585be9049!2sBotan%20Education!5e0!3m2!1sen!2snp!4v1734971757057!5m2!1sen!2snp" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </div>
        </div>
    );
}

export default Contactus;
