import React from 'react';
import { motion } from 'framer-motion';
import { Save } from 'lucide-react';

const AutoFeeScheduler: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Auto Fee Generation Scheduler</h2>
      <div className="bg-gray-50 rounded-2xl p-6 space-y-6 max-w-lg mx-auto">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Annually</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">Determines how often invoices are generated automatically.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time of Day</label>
            <input type="time" defaultValue="02:00" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <p className="text-xs text-gray-500 mt-1">Time to run the scheduler (e.g., during off-peak hours).</p>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-medium text-gray-700">Send Notifications on Generation</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center space-x-2">
            <Save className="w-4 h-4" />
            <span>Save Schedule</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AutoFeeScheduler;
