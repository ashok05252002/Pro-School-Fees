import React from 'react';
import { motion } from 'framer-motion';
import { formatCurrency } from '../../../../utils/formatting';

const AgingReport: React.FC = () => {
    const agingData = [
        { student: 'Rohan Mehta', class: '11C', totalDue: 1600, '0-30': null, '31-60': 1600, '60+': null },
        { student: 'Priya Patel', class: '9B', totalDue: 1850, '0-30': null, '31-60': 1850, '60+': null },
    ];
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Student</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Class</th>
                            <th className="text-right py-3 px-4 font-medium text-gray-900">Total Due</th>
                            <th className="text-right py-3 px-4 font-medium text-gray-900">0-30 Days</th>
                            <th className="text-right py-3 px-4 font-medium text-gray-900">31-60 Days</th>
                            <th className="text-right py-3 px-4 font-medium text-gray-900">60+ Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agingData.map((row, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-3 px-4 font-medium text-gray-800">{row.student}</td>
                                <td className="py-3 px-4 text-gray-600">{row.class}</td>
                                <td className="py-3 px-4 text-right font-semibold text-red-600">OMR {formatCurrency(row.totalDue)}</td>
                                <td className="py-3 px-4 text-right text-gray-600">{row['0-30'] ? `OMR ${formatCurrency(row['0-30'])}` : '-'}</td>
                                <td className="py-3 px-4 text-right text-gray-600">{row['31-60'] ? `OMR ${formatCurrency(row['31-60'])}` : '-'}</td>
                                <td className="py-3 px-4 text-right text-gray-600">{row['60+'] ? `OMR ${formatCurrency(row['60+'])}` : '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default AgingReport;
