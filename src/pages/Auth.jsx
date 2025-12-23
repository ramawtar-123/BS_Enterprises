import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Input } from '../Components/ui/Input';

export default function Auth({ mode = "login" }) {
    const isLogin = mode === "login";
    const [form, setForm] = useState({ email: "", password: "", name: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Demo logic
        alert(`${isLogin ? "Logged in" : "Registered"} — demo only`);
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900">{isLogin ? "Welcome Back" : "Create Account"}</h2>
                    <p className="text-sm text-gray-500 mt-2">
                        {isLogin ? "Enter your credentials to access your account" : "Join us to start your journey"}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2">
                    {!isLogin && (
                        <Input
                            id="name"
                            label="Full Name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                    )}

                    <Input
                        id="email"
                        label="Email Address"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />

                    <Input
                        id="password"
                        label="Password"
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />

                    <button className="w-full mt-6 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform">
                        {isLogin ? "Log in" : "Create account"}
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-gray-600">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <Link to={isLogin ? "/register" : "/login"} className="font-bold text-orange-600 hover:underline">
                        {isLogin ? "Sign up" : "Log in"}
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
