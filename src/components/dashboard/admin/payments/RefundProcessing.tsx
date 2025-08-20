import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatting';

const RefundProcessing: React.FC = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Process Refund</h2>
            <div className="bg-gray-50 rounded-2xl p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Search Invoice / Student</label>
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input type="text" placeholder="Search by Invoice # or Student Name" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                        <input type="text" value="Vikram Kumar" readOnly className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Amount Paid</label>
                        <input type="text" value={`OMR ${formatCurrency(1250)}`} readOnly className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Refund Amount</label>
                        <input type="number" placeholder="Enter amount to refund" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Approver</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
                            <option>Admin User</option>
                            <option>Finance Head</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Refund</label>
                    <textarea placeholder="e.g., Overpayment on invoice INV-2025-001" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"></textarea>
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">Process Refund</button>
                </div>
            </div>
        </motion.div>
    );
};

export default RefundProcessing;
