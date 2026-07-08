import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' } : undefined}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={twMerge("glass-panel p-6 rounded-2xl shadow-premium overflow-hidden", className)}
    >
      {children}
    </motion.div>
  );
};