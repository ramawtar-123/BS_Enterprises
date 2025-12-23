import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/bs-logo.png";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* BRAND */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block bg-white p-1 rounded-lg">
                            <img
                                src={Img}
                                alt="Idroid Becance"
                                className="h-16 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            We offer customized, unique, and best-suitable solutions to all our clients by understanding their requirements. Grow with BS Enterprises.
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div>
                        <h4 className="text-base font-bold text-orange-500 mb-6 uppercase tracking-wider">
                            Navigate
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/our-services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-base font-bold text-orange-500 mb-6 uppercase tracking-wider">
                            Contact
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-orange-500">✉</span> bsenterprises@gmail.com
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-orange-500">📍</span> Bhopal, India
                            </li>
                        </ul>
                    </div>

                    {/* LEGAL */}
                    <div>
                        <h4 className="text-base font-bold text-orange-500 mb-6 uppercase tracking-wider">
                            Legal
                        </h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">

                    <div className="text-center md:text-left">
                        © {new Date().getFullYear()} <span className="font-semibold text-white">BS Enterprises</span>. All rights reserved.
                    </div>

                    <div className="text-center md:text-right">
                        Designed & Developed by <span className="font-medium text-orange-500">BS Enterprises</span>
                    </div>

                </div>
            </div>
        </footer>
    );
}
