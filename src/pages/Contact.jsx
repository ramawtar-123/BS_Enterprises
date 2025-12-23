import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Components/ui/Input';

export default function Contact() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitting(false);
        alert("Message sent successfully!");
        navigate("/");
    };

    return (
        <section className="min-h-screen py-8 bg-gray-50 flex items-center justify-center">
            <div className="max-w-6xl w-full mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div>
                        <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Get in Touch</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">Let's Build Something Great Together</h2>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Ready to scale your brand? Tell us what you need — our team will get back within 24 hours with a custom strategy.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">✉</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Email Us</h4>
                                <p className="text-gray-600">bsenterprises@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">📍</div>
                            <div>
                                <h4 className="font-bold text-gray-900">Valid Office</h4>
                                <p className="text-gray-600">Bhopal, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            id="name"
                            label="Your Name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                        />
                        <Input
                            id="email"
                            label="Email Address"
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />
                        <Input
                            id="phone"
                            label="Phone Number"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            required
                        />

                        <div className="relative mb-8">
                            <textarea
                                required
                                id="message"
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="peer w-full border-b-2 border-gray-300 bg-transparent py-2.5 text-gray-900 placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors min-h-[120px] resize-none"
                                placeholder="Message"
                            />
                            <label htmlFor="message" className="absolute left-0 -top-3.5 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500">
                                Tell us about your project...
                            </label>
                        </div>

                        <button
                            disabled={submitting}
                            className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
                        >
                            {submitting ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : "Send Message"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
