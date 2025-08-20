import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle, Clock, Smartphone, Receipt, Award, MessageCircleQuestion } from 'lucide-react';
import { User } from '../../../App';
import SchoolBus from '../../assets/SchoolBus';
import PaymentModal from '../../common/PaymentModal';
import { formatCurrency } from '../../../utils/formatting';

interface ParentDashboardPageProps {
  user: User;
  setActiveTab: (tab: string) => void;
  showToast: (message: string) => void;
}

const ParentDashboardPage: React.FC<ParentDashboardPageProps> = ({ user, setActiveTab, showToast }) => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  const feeSummary = {
    total: 12500,
    paid: 11250,
    due: 1250,
    lastPaymentDate: '2025-02-15',
    nextDueDate: '2025-03-15',
  };

  const paidPercentage = (feeSummary.paid / feeSummary.total) * 100;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const quickActions = [
    { label: 'Pay Fees', icon: Smartphone, action: () => setPaymentModalOpen(true) },
    { label: 'Invoices', icon: Receipt, action: () => setActiveTab('invoices') },
    { label: 'Scholarships', icon: Award, action: () => setActiveTab('profile') },
    { label: 'Support', icon: MessageCircleQuestion, action: () => setActiveTab('profile') },
  ];

  return (
    <div className="overflow-x-hidden relative min-h-full">
      <div className="p-4 space-y-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white rounded-3xl shadow-lg p-6 space-y-6"
        >
          <motion.div variants={itemVariants}>
            <p className="text-gray-500">Fee Summary for</p>
            <h2 className="text-2xl font-bold text-gray-800">{user.studentName}</h2>
          </motion.div>

          {/* Progress Bar */}
          <motion.div variants={itemVariants}>
            <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
              <span>Paid: OMR {formatCurrency(feeSummary.paid)}</span>
              <span>Total: OMR {formatCurrency(feeSummary.total)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                className="bg-green-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${paidPercentage}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Due Amount */}
          <motion.div variants={itemVariants} className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <p className="text-sm text-red-700">Amount Due</p>
            <p className="text-3xl font-bold text-red-600">OMR {formatCurrency(feeSummary.due)}</p>
          </motion.div>

          {/* Dates */}
          <motion.div variants={itemVariants} className="space-y-3 text-sm pt-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Last Payment Date</span>
              <span className="font-medium text-gray-800">{feeSummary.lastPaymentDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 flex items-center"><Clock className="w-4 h-4 mr-2 text-orange-500" /> Next Due Date</span>
              <span className="font-medium text-gray-800">{feeSummary.nextDueDate}</span>
            </div>
          </motion.div>

          {/* Pay Now Button */}
          {feeSummary.due > 0 && (
            <motion.div variants={itemVariants}>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setPaymentModalOpen(true)}
                className="w-full bg-blue-600 text-white font-semibold py-4 rounded-2xl flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/30"
              >
                <CreditCard className="w-5 h-5" />
                <span>Pay Now</span>
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white rounded-3xl shadow-lg p-6"
        >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
                {quickActions.map((action, index) => (
                    <motion.button
                        key={index}
                        variants={itemVariants}
                        onClick={action.action}
                        className="flex flex-col items-center space-y-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                            <action.icon className="w-7 h-7 text-blue-600" />
                        </div>
                        <span className="text-xs font-medium">{action.label}</span>
                    </motion.button>
                ))}
            </div>
        </motion.div>
      </div>

      <SchoolBus />

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        showToast={showToast}
        amount={feeSummary.due}
      />
    </div>
  );
};

export default ParentDashboardPage;
