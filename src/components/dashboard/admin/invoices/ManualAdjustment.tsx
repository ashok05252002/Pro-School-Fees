import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const ManualAdjustment: React.FC = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Manual Fee Adjustment</h2>
            <div className="bg-gray-50 rounded-2xl p-6 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search Student</label>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="text" placeholder="Search by Student Name or ID" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                        <input type="text" value="Aarav Sharma" readOnly className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Invoice</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
                            <option>INV-2025-001 (Due: OMR 1,200)</option>
                            <option>INV-2025-005 (Due: OMR 150)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Adjustment Type</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
                            <option>Waiver</option>
                            <option>Penalty</option>
                            <option>Correction</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">OMR</span>
                            <input type="number" placeholder="Enter adjustment amount" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Notes / Reason</label>
                    <textarea placeholder="Provide a reason for this adjustment" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"></textarea>
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">Submit Adjustment</button>
                </div>
            </div>
        </motion.div>
    );
};

export default ManualAdjustment;
