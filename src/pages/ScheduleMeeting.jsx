import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '../components/ui/Input';

export default function ScheduleMeeting() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        budget: '',
        goals: '',
        date: ''
    });

    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => s - 1);

    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">

                {/* Sidebar / Progress */}
                <div className="bg-black text-white p-10 md:w-1/3 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-orange-600/10 z-0"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold leading-tight">Schedule Your Strategy Call</h2>
                        <p className="mt-4 text-gray-400 text-sm">We just need a few details to prepare for our meeting.</p>
                    </div>

                    <div className="relative z-10 mt-10 space-y-6">
                        <StepIndicator num={1} title="About You" current={step} />
                        <StepIndicator num={2} title="Project Scope" current={step} />
                        <StepIndicator num={3} title="Confirm" current={step} />
                    </div>

                    <div className="relative z-10 mt-auto pt-10">
                        <div className="text-xs text-gray-500 uppercase tracking-widest">Step {step} of 3</div>
                        <div className="mt-2 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(step / 3) * 100}%` }}
                                className="h-full bg-orange-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Form Area */}
                <div className="p-10 md:w-2/3 flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's start with the basics</h3>
                                <Input
                                    id="name"
                                    label="Full Name"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                                <Input
                                    id="email"
                                    label="Work Email"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                                <Input
                                    id="company"
                                    label="Company Name"
                                    value={formData.company}
                                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                                />
                                <div className="pt-4 flex justify-end">
                                    <button onClick={nextStep} className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition">Next Step →</button>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tell us about your needs</h3>
                                <div className="space-y-4 mb-6">
                                    <label className="block text-sm text-gray-600 font-semibold mb-2">Estimated Budget</label>
                                    <div className="flex gap-3 flex-wrap">
                                        {["<$1k", "$1k-5k", "$5k-10k", "$10k+"].map(opt => (
                                            <button
                                                key={opt}
                                                onClick={() => setFormData({ ...formData, budget: opt })}
                                                className={`px-4 py-2 border rounded-lg text-sm transition ${formData.budget === opt ? "bg-orange-500 text-white border-orange-500" : "hover:border-black"}`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative">
                                    <textarea
                                        className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-orange-500 min-h-[100px] resize-none"
                                        placeholder="Briefly describe your goals..."
                                        value={formData.goals}
                                        onChange={e => setFormData({ ...formData, goals: e.target.value })}
                                    />
                                </div>

                                <div className="pt-4 flex justify-between items-center">
                                    <button onClick={prevStep} className="text-gray-500 hover:text-black font-semibold">Back</button>
                                    <button onClick={nextStep} className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition">Next Step →</button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                                    ✓
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">You're All Set!</h3>
                                <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                                    Thanks {formData.name}, we've received your details. Our team will review them and reach out to <strong>{formData.email}</strong> shortly to coordinate the time.
                                </p>

                                <a href="/" className="inline-block px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition">Return Home</a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

function StepIndicator({ num, title, current }) {
    const active = current >= num;
    return (
        <div className={`flex items-center gap-4 transition-opacity duration-300 ${active ? "opacity-100" : "opacity-40"}`}>
            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm 
         ${current === num ? "border-orange-500 text-orange-500" : active ? "bg-orange-500 border-orange-500 text-white" : "border-gray-600"}`}>
                {active && current > num ? "✓" : num}
            </div>
            <span className="font-medium tracking-wide">{title}</span>
        </div>
    );
}
