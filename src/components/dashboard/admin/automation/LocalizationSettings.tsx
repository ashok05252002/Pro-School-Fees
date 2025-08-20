import React from 'react';
import { motion } from 'framer-motion';
import { Save } from 'lucide-react';

const LocalizationSettings: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Localization Settings</h2>
      <div className="bg-gray-50 rounded-2xl p-6 space-y-6 max-w-lg mx-auto">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Default Language</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option>English (United States)</option>
              <option>English (United Kingdom)</option>
              <option>Hindi (India)</option>
              <option>Spanish (Spain)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Default Tax Zone</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option>India (GST)</option>
              <option>United States (Sales Tax)</option>
              <option>United Kingdom (VAT)</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">Sets the default tax calculation method for new fee components.</p>
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 flex items-center space-x-2">
            <Save className="w-4 h-4" />
            <span>Save Localization Settings</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LocalizationSettings;
