import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
    /* ================= DATA ================= */
    const services = [
        { id: 1, title: "Hoardings", category: "Hoardings", image: "https://www.idroidbecanceindia.com/assets/images/services/hording.webp" },
        { id: 2, title: "Bus Branding", category: "Transit", image: "https://www.idroidbecanceindia.com/assets/images/services/bus.webp" },
        { id: 3, title: "LED Display Van", category: "Transit", image: "https://www.idroidbecanceindia.com/assets/images/services/led-van.webp" },
        { id: 4, title: "360° Digital Marketing", category: "Digital Display", image: "https://www.idroidbecanceindia.com/assets/images/services/digital-media.webp" },
        { id: 5, title: "Mall & Shop Branding", category: "Mall & Shops", image: "https://www.idroidbecanceindia.com/assets/images/services/inshop-branding.webp" },
        { id: 6, title: "Airline & Airport", category: "Transit", image: "https://www.idroidbecanceindia.com/assets/images/services/airplane-in.webp" },
        { id: 7, title: "Newspaper Advertising", category: "Print", image: "https://www.idroidbecanceindia.com/assets/images/services/newspaper.webp" },
        { id: 8, title: "Radio Jingles", category: "Other", image: "https://www.idroidbecanceindia.com/assets/images/services/radio-jingle.webp" },
        { id: 9, title: "Print & Offset", category: "Print", image: "https://www.idroidbecanceindia.com/assets/images/services/offset-printing.webp" },
    ];

    const categories = ["All", "Hoardings", "Transit", "Digital Display", "Mall & Shops", "Print", "Other"];

    const [active, setActive] = useState("All");

    const filteredServices = active === "All" ? services : services.filter((item) => item.category === active);

    return (
        <section className="min-h-screen py-14 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Our Gallery</h2>
                    <p className="mt-4 text-gray-600">A showcase of our versatile advertising campaigns</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                ${active === cat
                                    ? "bg-black text-white shadow-lg scale-105"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence>
                        {filteredServices.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-20">
                                    <h3 className="text-white font-bold text-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                                    <span className="text-orange-300 text-xs font-semibold uppercase tracking-wider">{item.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
