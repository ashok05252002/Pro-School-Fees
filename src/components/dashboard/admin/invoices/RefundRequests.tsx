import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatting';

const RefundRequests: React.FC = () => {
    const requests = [
        { student: 'Vikram Kumar', amount: 450, reason: 'Overpayment', date: '2025-01-15' },
        { student: 'Anjali Gupta', amount: 200, reason: 'Fee Adjustment', date: '2025-01-14' },
    ];
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Pending Refund Requests</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Student</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Reason</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-3 px-4 font-medium text-gray-800">{req.student}</td>
                                <td className="py-3 px-4 text-gray-600">OMR {formatCurrency(req.amount)}</td>
                                <td className="py-3 px-4 text-gray-600">{req.reason}</td>
                                <td className="py-3 px-4 text-gray-600">{req.date}</td>
                                <td className="py-3 px-4">
                                    <div className="flex space-x-2">
                                        <button className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600"><Check className="w-4 h-4" /></button>
                                        <button className="p-2 text-white bg-red-500 rounded-lg hover:bg-red-600"><X className="w-4 h-4" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default RefundRequests;
