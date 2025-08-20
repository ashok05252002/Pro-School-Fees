import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CreditCard, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { User } from '../../App';

interface ParentDashboardProps {
  user: User;
}

const ParentDashboard: React.FC<ParentDashboardProps> = ({ user }) => {
  const stats = [
    { title: 'Outstanding Balance', value: '$1,250', icon: CreditCard, change: '0%', color: 'red' },
    { title: 'Paid This Year', value: '$8,750', icon: CheckCircle, change: '+100%', color: 'green' },
    { title: 'Next Payment', value: 'Mar 15', icon: Clock, change: '5 days', color: 'yellow' },
    { title: 'Payment History', value: '12', icon: TrendingUp, change: 'transactions', color: 'blue' }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return { bg: 'bg-blue-500', text: 'text-blue-600', bgLight: 'bg-blue-50' };
      case 'green': return { bg: 'bg-green-500', text: 'text-green-600', bgLight: 'bg-green-50' };
      case 'yellow': return { bg: 'bg-yellow-500', text: 'text-yellow-600', bgLight: 'bg-yellow-50' };
      case 'red': return { bg: 'bg-red-500', text: 'text-red-600', bgLight: 'bg-red-50' };
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
          Welcome back, {user.name}!
        </h1>
        <p className="text-gray-600">
          Here's your child's fee summary and recent activities.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const colors = getColorClasses(stat.color);
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
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.title}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <CreditCard className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Pay Fees</span>
          </button>
          <button className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">View Receipts</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ParentDashboard;
