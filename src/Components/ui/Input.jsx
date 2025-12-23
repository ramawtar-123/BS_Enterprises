import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Input = ({ label, error, id, ...props }) => {
    return (
        <div className="relative mb-6">
            <input
                id={id}
                {...props}
                className={`peer w-full border-b-2 border-gray-300 bg-transparent py-2.5 text-gray-900 placeholder-transparent focus:border-orange-500 focus:outline-none transition-colors
          ${error ? 'border-red-500' : ''}
        `}
                placeholder={label}
            />
            <label
                htmlFor={id}
                className={`absolute left-0 -top-3.5 text-sm text-gray-600 transition-all 
        peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
        peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-orange-500
        ${error ? 'text-red-500 peer-focus:text-red-500' : ''}
        `}
            >
                {label}
            </label>
            <AnimatePresence>
                {error && (
                    <motion.span
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute left-0 -bottom-5 text-xs text-red-500"
                    >
                        {error}
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
    );
};
