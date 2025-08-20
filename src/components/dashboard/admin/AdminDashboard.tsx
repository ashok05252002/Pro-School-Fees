import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, CreditCard, DollarSign, Clock, CheckCircle, AlertTriangle, PieChart, FileText } from 'lucide-react';
import { User } from '../../../App';
import { formatCurrency } from '../../../utils/formatting';

interface AdminDashboardProps {
  user: User;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user }) => {
  const kpiStats = [
    { title: 'Total Fees Invoiced', value: 1254000, icon: CreditCard, change: '+12%', color: 'blue' },
    { title: 'Total Collected', value: 987500, icon: CheckCircle, change: '+15%', color: 'green' },
    { title: 'Outstanding Dues', value: 266500, icon: Clock, change: '-8%', color: 'yellow' },
    { title: 'Active Students', value: 1247, icon: Users, change: '+5%', color: 'purple' }
  ];

  const topDefaulters = [
    { name: 'Aarav Sharma', class: 'Grade 10A', amount: 2400, days: 45 },
    { name: 'Priya Patel', class: 'Grade 9B', amount: 1850, days: 32 },
    { name: 'Rohan Mehta', class: 'Grade 11C', amount: 1600, days: 28 },
    { name: 'Sanya Singh', class: 'Grade 8A', amount: 1450, days: 21 }
  ];

  const recentRefunds = [
    { student: 'Vikram Kumar', amount: 450, reason: 'Overpayment', date: '2025-01-15', status: 'Processed' },
    { student: 'Anjali Gupta', amount: 200, reason: 'Fee Adjustment', date: '2025-01-14', status: 'Pending' },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return { bg: 'bg-blue-500', text: 'text-blue-600', bgLight: 'bg-blue-50' };
      case 'green': return { bg: 'bg-green-500', text: 'text-green-600', bgLight: 'bg-green-50' };
      case 'yellow': return { bg: 'bg-yellow-500', text: 'text-yellow-600', bgLight: 'bg-yellow-50' };
      case 'purple': return { bg: 'bg-purple-500', text: 'text-purple-600', bgLight: 'bg-purple-50' };
      default: return { bg: 'bg-gray-500', text: 'text-gray-600', bgLight: 'bg-gray-50' };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="p-4 lg:p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome back, {user.name}! Here's your school's fee management overview.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {kpiStats.map((stat) => {
          const colors = getColorClasses(stat.color);
          const isCurrency = ['Total Fees Invoiced', 'Total Collected', 'Outstanding Dues'].includes(stat.title);
          return (
            <motion.div
              key={stat.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${colors.bgLight} rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {isCurrency ? `OMR ${formatCurrency(stat.value)}` : stat.value.toLocaleString()}
              </h3>
              <p className="text-gray-500 text-sm">{stat.title}</p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
      >
        <motion.div variants={itemVariants} className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Collection Trends</h3>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <p className="text-gray-500">Line chart visualization will be implemented here</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Collection by Mode</h3>
          <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <p className="text-gray-500">Pie chart visualization</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Top Defaulters</h3>
            <AlertTriangle className="w-5 h-5 text-orange-500" />
          </div>
          <div className="space-y-4">
            {topDefaulters.map((defaulter, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium text-gray-900">{defaulter.name}</p>
                  <p className="text-sm text-gray-500">{defaulter.class}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-red-600">OMR {formatCurrency(defaulter.amount)}</p>
                  <p className="text-xs text-gray-500">{defaulter.days} days overdue</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Refund Summary</h3>
          <div className="space-y-4">
            {recentRefunds.map((refund, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-medium text-gray-900">{refund.student}</p>
                  <p className="text-sm text-gray-500">{refund.reason}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blue-600">OMR {formatCurrency(refund.amount)}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${refund.status === 'Processed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {refund.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
