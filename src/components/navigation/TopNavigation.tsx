import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ChevronDown, User as UserIcon, Settings, LogOut } from 'lucide-react';
import { User } from '../../App';

interface TopNavigationProps {
  user: User;
  onLogout: () => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'from-blue-500 to-blue-600';
      case 'super-admin': return 'from-purple-500 to-purple-600';
      case 'parent': return 'from-green-500 to-green-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-blue-100 text-blue-800';
      case 'super-admin': return 'bg-purple-100 text-purple-800';
      case 'parent': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="https://staging.iproat.com/wp-content/uploads/2025/01/pro-school-new-logo-300x212.png"
            alt="Pro-School Logo"
            className="h-12 w-auto mr-3"
          />
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Pro-School</h1>
            <p className="text-sm text-gray-500 hidden sm:block">School Fee Management System</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              <div className={`w-8 h-8 bg-gradient-to-br ${getRoleColor(user.role)} rounded-lg flex items-center justify-center`}>
                <UserIcon className="w-4 h-4 text-white" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className={`text-xs px-2 py-0.5 rounded-full ${getRoleBadgeColor(user.role)} capitalize`}>
                  {user.role.replace('-', ' ')}
                </p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  
                  <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    <Settings className="w-4 h-4 mr-3" />
                    Settings
                  </button>
                  
                  <button
                    onClick={onLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Sign Out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
