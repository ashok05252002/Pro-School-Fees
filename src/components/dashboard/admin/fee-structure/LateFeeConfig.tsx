import React from 'react';
import { motion } from 'framer-motion';
import { Save } from 'lucide-react';

const LateFeeConfig: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="border border-gray-200 rounded-xl p-6 space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Configure Late Fee Rule</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rule Name</label>
            <input type="text" placeholder="e.g., Standard Late Fee" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fee Type</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white">
              <option>Percentage</option>
              <option>Flat Amount</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Value (OMR or %)</label>
            <input type="number" placeholder="e.g., 10 or 50" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Delay Threshold (Days)</label>
            <input type="number" placeholder="Apply after how many days?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Applicable Fee Components</label>
            <select multiple className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 h-24 bg-white">
              <option>Tuition Fee</option>
              <option>Transport Fee</option>
              <option>Activity Fee</option>
            </select>
          </div>
          <div className="flex items-center justify-between md:col-span-2">
            <span className="text-sm font-medium text-gray-700">Auto-apply Rule</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="flex space-x-3 pt-4">
          <button className="flex-1 px-4 py-3 text-white bg-blue-600 rounded-xl hover:bg-blue-700 flex items-center justify-center space-x-2">
            <Save className="w-4 h-4" />
            <span>Save Rule</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LateFeeConfig;
