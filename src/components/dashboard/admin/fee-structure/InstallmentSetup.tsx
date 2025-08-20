import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Calendar, Percent, Save } from 'lucide-react';

const InstallmentSetup: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Installment Plans</h2>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>New Plan</span>
        </motion.button>
      </div>

      <div className="border border-gray-200 rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Create/Edit Installment Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Plan Name</label>
            <input type="text" placeholder="e.g., Standard Monthly Plan" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Term-wise</option>
              <option>Custom</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of Installments</label>
            <input type="number" placeholder="e.g., 12" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Grace Period (days)</label>
            <input type="number" placeholder="e.g., 5" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Linked Late Fee Rule</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white">
              <option>Standard Late Fee (10% after 5 days)</option>
              <option>No Late Fee</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Due Dates</label>
          <div className="space-y-2">
            <div className="flex items-center gap-4 p-2 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-600">Installment 1:</span>
              <input type="date" className="px-3 py-1.5 text-sm rounded-lg border border-gray-300" />
            </div>
            <div className="flex items-center gap-4 p-2 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-600">Installment 2:</span>
              <input type="date" className="px-3 py-1.5 text-sm rounded-lg border border-gray-300" />
            </div>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-800 mt-2">+ Add another installment</button>
        </div>

        <div className="flex space-x-3 pt-4">
          <button className="flex-1 px-4 py-3 text-white bg-blue-600 rounded-xl hover:bg-blue-700 flex items-center justify-center space-x-2">
            <Save className="w-4 h-4" />
            <span>Save Plan</span>
          </button>
          <button className="flex-1 px-4 py-3 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200">
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default InstallmentSetup;
