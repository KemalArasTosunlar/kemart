import React from 'react';

const ContactPageDesktop = () => {
    return (
        <div className="container mx-auto px-8 py-16">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <form className="space-y-6">
                <div>
                    <label className="block text-lg font-medium text-gray-700">Name</label>
                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3" />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3" />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700">Message</label>
                    <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3" rows="6"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md">Send Message</button>
            </form>
        </div>
    );
};

export default ContactPageDesktop;
