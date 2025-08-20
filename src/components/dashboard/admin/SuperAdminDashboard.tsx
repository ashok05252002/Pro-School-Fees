import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Database, Shield, Globe, Activity } from 'lucide-react';
import { User } from '../../../App';
import { formatCurrency } from '../../../utils/formatting';

interface SuperAdminDashboardProps {
  user: User;
}

const SuperAdminDashboard: React.FC<SuperAdminDashboardProps> = ({ user }) => {
  const systemStats = [
    { title: 'Total Schools', value: 45, icon: Database, change: '+5%', color: 'blue' },
    { title: 'Active Users', value: 2840, icon: Users, change: '+18%', color: 'green' },
    { title: 'Monthly Revenue', value: 150000, icon: TrendingUp, change: '+12%', color: 'purple' },
    { title: 'System Health', value: 99.9, icon: Activity, change: '0%', color: 'green' }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return { bg: 'bg-blue-500', text: 'text-blue-600', bgLight: 'bg-blue-50' };
      case 'green': return { bg: 'bg-green-500', text: 'text-green-600', bgLight: 'bg-green-50' };
      case 'purple': return { bg: 'bg-purple-500', text: 'text-purple-600', bgLight: 'bg-purple-50' };
      default: return { bg: 'bg-gray-500', text: 'text-gray-600', bgLight: 'bg-gray-50' };
    }
  };

  return (
    <div className="p-4 lg:p-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Super Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome back, {user.name}! Monitor system-wide performance and manage platform settings.
        </p>
      </motion.div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {systemStats.map((stat, index) => {
          const colors = getColorClasses(stat.color);
          const isCurrency = stat.title === 'Monthly Revenue';
          const isPercent = stat.title === 'System Health';
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${colors.bgLight} rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stat.change.startsWith('+') ? 'bg-green-100 text-green-800' :
                  stat.change.startsWith('-') ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {isCurrency ? `OMR ${formatCurrency(stat.value)}` : isPercent ? `${stat.value}%` : stat.value.toLocaleString()}
              </h3>
              <p className="text-gray-500 text-sm">{stat.title}</p>
            </motion.div>
          );
        })}
      </div>

      {/* System Overview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Analytics</h3>
          <div className="h-64 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-2" />
              <p className="text-gray-500">System analytics visualization</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Global Usage Map</h3>
          <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Globe className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <p className="text-gray-500">World map with usage statistics</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <Shield className="w-8 h-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Manage Roles</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <Database className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">System Backup</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Analytics</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <Activity className="w-8 h-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">System Health</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SuperAdminDashboard;
