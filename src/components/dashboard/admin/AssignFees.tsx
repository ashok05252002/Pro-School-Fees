import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, User, Upload } from 'lucide-react';
import IndividualAssignment from './assign-fees/IndividualAssignment';
import BulkAssignment from './assign-fees/BulkAssignment';

const AssignFees: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'class' | 'individual' | 'bulk'>('class');

  const tabs = [
    { id: 'class', label: 'Assign by Class', icon: Users },
    { id: 'individual', label: 'Individual Assignment', icon: User },
    { id: 'bulk', label: 'Bulk Assignment', icon: Upload }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'class':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Class
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none">
                  <option value="">Choose a class</option>
                  <option value="grade-1a">Grade 1A</option>
                  <option value="grade-1b">Grade 1B</option>
                  <option value="grade-2a">Grade 2A</option>
                  <option value="grade-2b">Grade 2B</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fee Structure Template
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none">
                  <option value="">Select template</option>
                  <option value="primary">Primary School Template</option>
                  <option value="secondary">Secondary School Template</option>
                  <option value="high">High School Template</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currency
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none">
                  <option value="omr">OMR</option>
                  <option value="usd">USD ($)</option>
                  <option value="eur">EUR (€)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Academic Year
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none">
                  <option value="2024-25">2024-2025</option>
                  <option value="2025-26">2025-2026</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200">
                Assign Fees
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors duration-200">
                Preview
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors duration-200">
                Cancel
              </button>
            </div>
          </motion.div>
        );
      case 'individual':
        return <IndividualAssignment />;
      case 'bulk':
        return <BulkAssignment />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 lg:p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assign Fees</h1>
        <p className="text-gray-600">Assign fee structures to students by class, individually, or in bulk</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AssignFees;
