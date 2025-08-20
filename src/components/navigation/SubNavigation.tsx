import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Settings, FileText, Users, CreditCard, Home, Database, Shield, DollarSign, Receipt, Award, Percent, Zap } from 'lucide-react';
import { User } from '../../App';

interface SubNavigationProps {
  user: User;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const SubNavigation: React.FC<SubNavigationProps> = ({ user, activeTab, onTabChange }) => {
  const getNavItems = (role: string) => {
    const adminItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'fee-structure', label: 'Fee Structure', icon: Database },
      { id: 'assign-fees', label: 'Assign Fees', icon: CreditCard },
      { id: 'invoices', label: 'Invoices', icon: Receipt },
      { id: 'payments', label: 'Payments', icon: DollarSign },
      { id: 'scholarships', label: 'Scholarships', icon: Award },
      { id: 'reports', label: 'Reports', icon: BarChart3 },
      { id: 'tax-settings', label: 'Tax Settings', icon: Percent },
    ];

    const superAdminItems = [
      ...adminItems,
      { id: 'access-control', label: 'Access Control', icon: Shield },
      { id: 'system-automation', label: 'Automation', icon: Zap },
      { id: 'currency-gateway', label: 'Currency & Gateway', icon: DollarSign },
      { id: 'notifications', label: 'Notifications', icon: Settings },
    ];

    switch (role) {
      case 'admin':
        return adminItems;
      case 'super-admin':
        return superAdminItems;
      case 'parent':
        return [
          { id: 'dashboard', label: 'Dashboard', icon: Home },
          { id: 'invoices', label: 'Invoices', icon: FileText },
          { id: 'profile', label: 'Profile', icon: Users }
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems(user.role);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 hidden md:block overflow-x-auto">
      <div className="flex space-x-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`relative flex items-center space-x-2 py-4 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
              activeTab === item.id
                ? 'text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
            
            {activeTab === item.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SubNavigation;
