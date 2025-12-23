import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
    return (
        <div className="overflow-hidden">
            <Hero />
            <SlidesCarousel />
            <QuickServices />
            <WhyChoose />
            <CaseHighlights />
            <CTASection />
        </div>
    );
}

/* ---------- HERO ---------- */
function Hero() {
    return (
        <section className="relative py-10 sm:py-20 lg:py-16 bg-[#FCF8F1]">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-100/80 text-orange-600 text-sm font-bold tracking-wider mb-6">
                        PREMIER ADVERTISING AGENCY
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Scale Your Business With <span className="text-orange-500">Smart Digital Solutions</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
                        We revolutionize industries with dynamic digital solutions tailored to meet contemporary demands and drive impactful transformations.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4 items-center">
                        <Link to="/schedule-meeting" className="inline-flex items-center px-8 py-4 text-base font-bold text-white bg-black rounded-full hover:bg-gray-800 hover:scale-105 transition-all shadow-lg">
                            Schedule a Meeting
                            <svg className="w-5 h-5 ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M13 9l3 3m0 0l-3 3m3-3H8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>

                        <Link to="/register" className="group flex items-center gap-3 px-6 py-4 rounded-full text-base font-medium text-gray-700 hover:bg-orange-50 transition-colors">
                            <span>Create Account</span>
                            <span className="bg-orange-100 text-orange-600 p-1.5 rounded-full group-hover:bg-orange-200 transition-colors">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center lg:justify-end relative"
                >
                    <div className="absolute top-10 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                    <img
                        src="https://creativewebsitemarketing.com/wp-content/uploads/how-to-choose-digital-marketing-agency.png"
                        alt="Agency Team"
                        className="relative z-10 w-full max-w-xl rounded-lg filter drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                    />
                </motion.div>
            </div>
        </section>
    );
}

/* ---------- Slides Carousel (5 slides) ---------- */
function SlidesCarousel() {
    const slides = [
        { title: "Digital Media Ads", desc: "Screens and devices displaying dynamic digital content.", img: "https://www.idroidbecanceindia.com/assets/images/projects/dmads.webp" },
        { title: "Event Management", desc: "Planning and hosting public and private events seamlessly.", img: "https://www.idroidbecanceindia.com/assets/images/projects/event.webp" },
        { title: "Airline/Train Ads", desc: "Impactful billboards reaching millions on the move.", img: "https://www.idroidbecanceindia.com/assets/images/projects/metro-airport-ads.webp" },
        { title: "Non-traditional Ads", desc: "Innovative, experiential, and ambient media formats.", img: "https://www.idroidbecanceindia.com/assets/images/projects/ntmads.webp" },
        { title: "Transit Media Ads", desc: "Engaging ads on buses, trains, and taxis.", img: "https://www.idroidbecanceindia.com/assets/images/projects/transitmedia.webp" },
        { title: "Cinema, Radio & TV", desc: "Broaden reach with cinema, radio, and TV advertising.", img: "https://www.idroidbecanceindia.com/assets/images/projects/cinema-radio.webp" },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
        return () => clearInterval(t);
    }, [slides.length]);

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold tracking-wider text-orange-500 uppercase">Our Expertise</h2>
                    <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">What We Do Best</h3>
                </div>

                <div className="relative bg-gray-50 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="h-[400px] sm:h-[500px] grid grid-cols-1 lg:grid-cols-3 gap-0">
                        {/* Left: animated big slide */}
                        <div className="col-span-2 relative overflow-hidden group">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <img src={slides[index].img} alt={slides[index].title} className="object-cover w-full h-full transition-transform duration-[10s] group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    <div className="absolute left-8 bottom-8 md:left-12 md:bottom-12 max-w-lg text-white">
                                        <motion.h3
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-3xl md:text-4xl font-bold"
                                        >
                                            {slides[index].title}
                                        </motion.h3>
                                        <motion.p
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                            className="mt-4 text-base md:text-lg text-gray-200"
                                        >
                                            {slides[index].desc}
                                        </motion.p>
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="mt-6"
                                        >
                                            <Link to="/our-services" className="text-sm font-bold uppercase tracking-widest text-orange-400 hover:text-orange-300">
                                                Explore service →
                                            </Link>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right: small navigation cards */}
                        <div className="hidden lg:flex flex-col border-l border-gray-200 bg-white">
                            <div className="flex-1 overflow-y-auto hide-scrollbar p-2 space-y-2">
                                {slides.map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${i === index
                                                ? "bg-orange-50 ring-1 ring-orange-200"
                                                : "hover:bg-gray-50"
                                            }`}
                                    >
                                        <img src={s.img} alt="" className="w-16 h-12 object-cover rounded-md shadow-sm" />
                                        <div>
                                            <div className={`font-semibold text-sm ${i === index ? "text-orange-600" : "text-gray-900"}`}>
                                                {s.title}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* controls (Mobile/Tablet) */}
                    <div className="absolute right-4 top-4 flex gap-2 lg:hidden">
                        <button onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)} className="p-2 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20">
                            ‹
                        </button>
                        <button onClick={() => setIndex((i) => (i + 1) % slides.length)} className="p-2 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20">
                            ›
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Quick Services (icons + short) ---------- */
function QuickServices() {
    const services = [
        { title: "Hoardings/Banners", description: "High-visibility billboard advertising." },
        { title: "Mobile/Active Van", description: "Advertising on the move with trucks." },
        { title: "Digital Displays", description: "High-tech screens for engaging content." },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-100"
                        >
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-2xl">
                                {i === 0 ? "🏙️" : i === 1 ? "🚚" : "🖥️"}
                            </div>
                            <div className="text-xl font-bold text-gray-900 mb-3">{s.title}</div>
                            <p className="text-gray-600 leading-relaxed">{s.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------- WhyChoose ---------- */
function WhyChoose() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-sm font-bold tracking-wider text-orange-500 uppercase mb-3">Why Us</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Clients Choose Results, Not Just Promises.</h3>
                    <ul className="space-y-6 text-gray-700">
                        {[
                            "Proven ROI, Not Stories.",
                            "Fast Execution Without Messing Up.",
                            "Transparent Pricing & No Hidden Add-Ons.",
                            "Professional Handling: Communication & Reporting.",
                            "Creative That Actually Converts."
                        ].map((item, i) => (
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                key={i}
                                className="flex items-center gap-4 text-lg font-medium"
                            >
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" alt="Why choose us" className="w-full object-cover" />
                </div>
            </div>
        </section>
    );
}

/* ---------- Case Highlights ---------- */
function CaseHighlights() {
    const cases = [
        { name: "Market Leader", result: "Top Outdoor Advertising Agency In India", img: "https://www.idroidbecanceindia.com/assets/images/news/India-topadvertising-agency.webp" },
        { name: "Digital Excellence", result: "Best Digital Marketing Agency in Mumbai.", img: "https://www.idroidbecanceindia.com/assets/images/news/digital_marketing_agency_in_mumbai.webp" },
        { name: "Airport Branding", result: "Best Airline/Airport Branding Agency", img: "https://www.idroidbecanceindia.com/assets/images/news/best_airport_advertising_agency.webp" },
    ];
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h4 className="text-3xl font-bold mb-12 text-center">Latest Insights</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((c, i) => (
                        <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
                            <div className="overflow-hidden">
                                <img src={c.img} alt={c.name} className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="text-xs font-bold text-orange-500 uppercase tracking-wide">{c.name}</div>
                                <div className="text-lg font-bold text-gray-900 mt-2 group-hover:text-orange-600 transition-colors">{c.result}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------- CTA ---------- */
function CTASection() {
    return (
        <section className="py-24 bg-black text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Ready to scale your brand?</h3>
                <p className="mt-6 text-xl text-gray-400">Book a strategy call and we’ll audit your ad campaigns — completely free.</p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link to="/schedule-meeting" className="px-8 py-4 rounded-full bg-orange-500 font-bold text-white hover:bg-orange-600 transition transform hover:scale-105">Book Free Audit</Link>
                    <Link to="/our-services" className="px-8 py-4 rounded-full border border-white/20 font-bold hover:bg-white/10 transition">See Services</Link>
                </div>
            </div>
        </section>
    );
}
