import React from 'react';
import { motion } from 'framer-motion';

const PenaltyReminderRules: React.FC = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Penalty & Reminder Rules</h2>
            <div className="bg-gray-50 rounded-2xl p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Grace Period (Days)</label>
                        <input type="number" placeholder="e.g., 5" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Auto Penalty Amount (OMR)</label>
                        <input type="number" placeholder="e.g., 50" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Reminder Intervals (Days before due)</label>
                        <input type="text" placeholder="e.g., 7, 3, 1" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Notification Mode</label>
                        <div className="flex items-center space-x-4 pt-3">
                            <label className="flex items-center"><input type="checkbox" className="w-4 h-4 mr-2" defaultChecked /> Email</label>
                            <label className="flex items-center"><input type="checkbox" className="w-4 h-4 mr-2" defaultChecked /> SMS</label>
                            <label className="flex items-center"><input type="checkbox" className="w-4 h-4 mr-2" /> Push</label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">Save Rules</button>
                </div>
            </div>
        </motion.div>
    );
};

export default PenaltyReminderRules;
