import React from 'react';
import { motion } from 'framer-motion';
import { Home, FileText, User as UserIcon } from 'lucide-react';

interface ParentBottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ParentBottomNav: React.FC<ParentBottomNavProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'invoices', label: 'Invoices', icon: FileText },
    { id: 'profile', label: 'Profile', icon: UserIcon }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className="relative flex flex-col items-center justify-center w-full h-full text-sm font-medium transition-colors duration-300"
          >
            <item.icon className={`w-6 h-6 mb-1 transition-colors ${activeTab === item.id ? 'text-blue-600' : 'text-gray-500'}`} />
            <span className={`transition-colors ${activeTab === item.id ? 'text-blue-600' : 'text-gray-500'}`}>
              {item.label}
            </span>

            {activeTab === item.id && (
              <motion.div
                layoutId="active-parent-tab-indicator"
                className="absolute bottom-1 w-8 h-1 bg-blue-600 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default ParentBottomNav;
