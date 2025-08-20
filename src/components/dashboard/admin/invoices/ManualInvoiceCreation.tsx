import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatting';

const ManualInvoiceCreation: React.FC = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Create Manual Invoice</h2>
            <div className="bg-gray-50 rounded-2xl p-6 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Student, Class, or Program</label>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" placeholder="Search..." className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Fee Component</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
                            <option>Select component</option>
                            <option>Special Coaching Fee</option>
                            <option>Field Trip Fee</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">OMR</span>
                            <input type="number" placeholder="Enter amount" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        </div>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Tax (auto-calculated)</label>
                        <input type="text" value={`OMR ${formatCurrency(18)}`} readOnly className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                        <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">Generate Invoice</button>
                </div>
            </div>
        </motion.div>
    );
};

export default ManualInvoiceCreation;
