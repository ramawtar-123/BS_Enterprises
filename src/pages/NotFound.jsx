import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-4 text-center">
            <div className="max-w-md">
                <h1 className="text-9xl font-bold text-orange-200">404</h1>
                <h2 className="text-3xl font-bold text-gray-900 mt-4">Page not found</h2>
                <p className="text-gray-600 mt-4 mb-8">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                </p>
                <Link to="/" className="inline-block px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition">
                    Back to Home
                </Link>
            </div>
        </section>
    );
}
