import React from 'react';
import { motion } from 'framer-motion';

const SchoolBus: React.FC = () => {
  return (
    <motion.div
      className="absolute bottom-0 left-0"
      initial={{ x: '-150%' }}
      animate={{ x: '100vw' }}
      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      style={{ willChange: 'transform' }}
    >
      <svg width="120" height="70" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <path d="M5 20C5 14.4772 9.47715 10 15 10H95C100.523 10 105 14.4772 105 20V55H15C9.47715 55 5 50.5228 5 45V20Z" fill="#FFD15C"/>
        {/* Roof */}
        <path d="M15 10H95V20H15V10Z" fill="#FCAE1E"/>
        {/* Windows */}
        <rect x="20" y="25" width="20" height="15" rx="3" fill="#A8D5E2"/>
        <rect x="45" y="25" width="20" height="15" rx="3" fill="#A8D5E2"/>
        <rect x="70" y="25" width="20" height="15" rx="3" fill="#A8D5E2"/>
        {/* Stripe */}
        <rect x="5" y="42" width="100" height="5" fill="#333"/>
        {/* Wheels */}
        <circle cx="25" cy="55" r="10" fill="#333"/>
        <circle cx="25" cy="55" r="5" fill="#fff"/>
        <circle cx="85" cy="55" r="10" fill="#333"/>
        <circle cx="85" cy="55" r="5" fill="#fff"/>
        {/* Lights */}
        <circle cx="102" cy="45" r="3" fill="red"/>
        <circle cx="8" cy="45" r="3" fill="white"/>
      </svg>
    </motion.div>
  );
};

export default SchoolBus;
