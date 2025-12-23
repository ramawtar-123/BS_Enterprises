import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
    const services = [
        { icon: "📢", title: "Social Media Marketing", desc: "Build a strong social presence that engages followers and enhances brand awareness.", link: "#" },
        { icon: "🚚", title: "Search Engine Optimization", desc: "Rank higher on search results to build trust and attract organically.", link: "#" },
        { icon: "💻", title: "Web Development", desc: "Stunning, user-friendly websites that drive results and elevate online presence.", link: "#" },
        { icon: "🎯", title: "Digital Advertising", desc: "Cutting-edge digital ads to unlock your brand's full potential.", link: "#" },
        { icon: "🎨", title: "Graphic Designing", desc: "Unleash the power of creativity with professional design services.", link: "#" },
    ];

    return (
        <section className="py-8 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-lg text-gray-600"
                    >
                        High-impact advertising solutions built to increase brand visibility, attract customers, and drive measurable growth across all channels.
                    </motion.p>
                </div>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group p-10 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{s.title}</h3>
                            <p className="mt-4 text-gray-600 leading-relaxed mb-8">
                                {s.desc}
                            </p>
                            <a href={s.link} className="inline-flex items-center text-sm font-bold text-black group-hover:text-orange-600 transition-colors">
                                Learn More
                                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
