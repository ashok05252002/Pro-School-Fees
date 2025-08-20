import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const ScholarshipMaster: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Scholarship Master List</h2>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>New Scholarship</span>
        </motion.button>
      </div>
      <div className="bg-gray-50 rounded-2xl p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Scholarship Name</label>
            <input type="text" placeholder="e.g., Merit Scholarship 2025" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option>Flat Amount</option>
              <option>Percentage</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Value (OMR or %)</label>
            <input type="number" placeholder="e.g., 5000 or 25" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </div>
          <div className="flex items-center pt-6">
             <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-600">Requires Approval</span>
              </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Eligibility Notes</label>
          <textarea placeholder="Describe eligibility criteria..." rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"></textarea>
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">Save Scholarship</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ScholarshipMaster;
