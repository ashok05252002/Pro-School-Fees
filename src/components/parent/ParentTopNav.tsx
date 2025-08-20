import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import { User } from '../../App';

interface ParentTopNavProps {
  user: User;
  onShowNotifications: () => void;
}

const ParentTopNav: React.FC<ParentTopNavProps> = ({ user, onShowNotifications }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 px-4 py-3 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://staging.iproat.com/wp-content/uploads/2025/01/pro-school-new-logo-300x212.png"
            alt="Pro-School Logo"
            className="h-8 w-auto"
          />
          <div>
            <p className="text-sm text-gray-500">Student</p>
            <h1 className="font-semibold text-gray-800">{user.studentName}</h1>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onShowNotifications}
          className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Bell className="w-6 h-6" />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full" />
        </motion.button>
      </div>
    </header>
  );
};

export default ParentTopNav;
