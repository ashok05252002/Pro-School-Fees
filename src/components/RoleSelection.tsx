import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Shield, Users } from 'lucide-react';
import { UserRole } from '../App';

interface RoleSelectionProps {
  onRoleSelect: (role: UserRole) => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ onRoleSelect }) => {
  const roles = [
    {
      id: 'admin' as UserRole,
      title: 'Admin',
      icon: Briefcase,
      description: 'Manage school operations',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'super-admin' as UserRole,
      title: 'Super Admin',
      icon: Shield,
      description: 'Full system access',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'parent' as UserRole,
      title: 'Parent',
      icon: Users,
      description: 'View your child\'s information',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
          <span className="text-white font-bold text-xl">PS</span>
        </div>
      </motion.div>

      {/* Welcome Title */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-light text-gray-900 mb-2">Welcome to</h1>
        <h2 className="text-5xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Pro-School
        </h2>
        <p className="text-gray-500 mt-4 text-lg">Choose your role to continue</p>
      </motion.div>

      {/* Role Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {roles.map((role, index) => (
          <motion.button
            key={role.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onRoleSelect(role.id)}
            className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
              <role.icon className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {role.title}
            </h3>
            
            <p className="text-gray-500 text-sm leading-relaxed">
              {role.description}
            </p>

            <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
          </motion.button>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-400 text-sm">
          © 2025 Pro-School. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default RoleSelection;
