import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../assets/bs-logo.png";

export default function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-[#FCF8F1] bg-opacity-80 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img src={Img} alt="BS Enterprises" className="h-16 w-auto" />
                        </Link>
                    </div>

                    <nav className="hidden lg:flex lg:items-center lg:space-x-8 font-medium">
                        <NavLink to="/">HOME</NavLink>
                        <NavLink to="/about-us">ABOUT US</NavLink>
                        <NavLink to="/gallery">GALLERY</NavLink>
                        <NavLink to="/contact-us">CONTACT US</NavLink>
                    </nav>

                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/our-services" className="px-5 py-2.5 rounded-full bg-orange-100 text-orange-900 font-semibold hover:bg-orange-200 transition-colors">
                            Our Services
                        </Link>
                        <Link to="/login" className="px-5 py-2.5 text-white bg-black rounded-full hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
                            Log in
                        </Link>
                    </div>

                    {/* mobile menu trigger */}
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}

function NavLink({ to, children }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`relative text-sm font-bold tracking-wide transition-colors duration-200 hover:text-orange-600
        ${isActive ? 'text-orange-600' : 'text-gray-800'}
      `}
        >
            {children}
            {isActive && (
                <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-orange-500"
                />
            )}
        </Link>
    );
}

function MobileMenu() {
    const [open, setOpen] = useState(false);
    return (
        <div className="lg:hidden">
            <button
                aria-label="Toggle menu"
                onClick={() => setOpen((s) => !s)}
                className="p-2 rounded-md hover:bg-black/5"
            >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute right-4 top-20 z-50 w-72 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
                    >
                        <div className="flex flex-col gap-4">
                            <Link to="/" onClick={() => setOpen(false)} className="block text-lg font-medium hover:text-orange-500">Home</Link>
                            <Link to="/about-us" onClick={() => setOpen(false)} className="block text-lg font-medium hover:text-orange-500">About</Link>
                            <Link to="/gallery" onClick={() => setOpen(false)} className="block text-lg font-medium hover:text-orange-500">Gallery</Link>
                            <Link to="/our-services" onClick={() => setOpen(false)} className="block text-lg font-medium hover:text-orange-500">Our Services</Link>
                            <Link to="/contact-us" onClick={() => setOpen(false)} className="block text-lg font-medium hover:text-orange-500">Contact</Link>
                            <hr className="border-gray-100" />
                            <Link to="/schedule-meeting" onClick={() => setOpen(false)} className="block font-semibold bg-orange-100 text-orange-900 px-4 py-3 rounded-xl text-center">Schedule Meeting</Link>
                            <Link to="/login" onClick={() => setOpen(false)} className="block font-semibold bg-black text-white px-4 py-3 rounded-xl text-center">Log In</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
