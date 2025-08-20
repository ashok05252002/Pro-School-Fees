import React from 'react';
import { motion } from 'framer-motion';
import { Save } from 'lucide-react';

const ReminderEngine: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Reminder Engine Configuration</h2>
      <div className="bg-gray-50 rounded-2xl p-6 space-y-6 max-w-lg mx-auto">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Reminder Intervals</label>
            <input type="text" placeholder="e.g., 7, 3, 1" defaultValue="7, 3, 1" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <p className="text-xs text-gray-500 mt-1">Comma-separated list of days before the due date to send reminders.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notification Modes</label>
            <div className="flex items-center space-x-6 pt-2">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="w-4 h-4 mr-2 text-blue-600 rounded border-gray-300" defaultChecked /> Email
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="w-4 h-4 mr-2 text-blue-600 rounded border-gray-300" defaultChecked /> SMS
              </label>
              <label className="flex items-center text-sm">
                <input type="checkbox" className="w-4 h-4 mr-2 text-blue-600 rounded border-gray-300" /> Push Notification
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center space-x-2">
            <Save className="w-4 h-4" />
            <span>Save Reminder Rules</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ReminderEngine;
