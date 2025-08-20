import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatting';

const DefaulterTracker: React.FC = () => {
    const defaulters = [
        { name: 'Aarav Sharma', class: 'Grade 10A', amount: 2400, days: 45 },
        { name: 'Priya Patel', class: 'Grade 9B', amount: 1850, days: 32 },
    ];
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex justify-end mb-4">
                <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
                    <Download className="w-4 h-4" />
                    <span>Export List</span>
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Student Name</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Class</th>
                            <th className="text-right py-3 px-4 font-medium text-gray-900">Amount Due</th>
                            <th className="text-right py-3 px-4 font-medium text-gray-900">Days Overdue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {defaulters.map((row, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-3 px-4 font-medium text-gray-800">{row.name}</td>
                                <td className="py-3 px-4 text-gray-600">{row.class}</td>
                                <td className="py-3 px-4 text-right font-semibold text-red-600">OMR {formatCurrency(row.amount)}</td>
                                <td className="py-3 px-4 text-right text-gray-600">{row.days}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default DefaulterTracker;
