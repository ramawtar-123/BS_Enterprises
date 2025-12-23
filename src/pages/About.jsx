import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="py-14 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">About Us</h2>
                    <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                        <p>
                            We are a performance-driven advertising agency built for brands that want <strong className="text-black font-semibold">measurable growth</strong>,
                            not empty promises. Our team blends strategic thinking, creative clarity, and data-backed
                            execution to deliver campaigns that actually move the needle.
                        </p>
                        <p>
                            From outdoor media to digital advertising, we help businesses capture attention, build trust, and convert audiences into real customers.
                            Unlike traditional agencies that rely on guesswork, we operate with one clear intention: <strong className="text-black font-semibold">Every campaign must deliver a return.</strong>
                        </p>
                        <p>
                            Today, brands choose us because we combine speed, reliability, and accountability with creativity and strategic precision.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {[
                            { title: "Strategic Approach", text: "We analyze market trends and audience behavior to craft campaigns that hit the right mindset." },
                            { title: "Creative That Converts", text: "Our creatives aren't just 'good-looking' — they're built to push real-world action." },
                            { title: "Full Transparency", text: "Clear pricing, honest reporting, and complete visibility. No hidden charges." }
                        ].map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.15 }}
                                key={i}
                                className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <h4 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-600">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
