import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Download } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatting';

const DetailedReport: React.FC = () => {
    const reportData = [
        { student: 'Aarav Sharma', class: '10A', totalFee: 5000, paid: 5000, due: 0, status: 'Paid' },
        { student: 'Priya Patel', class: '9B', totalFee: 4500, paid: 3000, due: 1500, status: 'Partial' },
        { student: 'Rohan Mehta', class: '11C', totalFee: 5500, paid: 0, due: 5500, status: 'Overdue' },
    ];
    
    const getStatusChip = (status: string) => {
        switch (status) {
            case 'Paid': return 'bg-green-100 text-green-800';
            case 'Partial': return 'bg-yellow-100 text-yellow-800';
            case 'Overdue': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <input type="date" className="px-3 py-2 text-sm rounded-lg border border-gray-300" />
                    <input type="date" className="px-3 py-2 text-sm rounded-lg border border-gray-300" />
                    <select className="px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white"><option>All Classes</option></select>
                    <select className="px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white"><option>All Payment Modes</option></select>
                    <select className="px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white"><option>All Fee Categories</option></select>
                    <input type="text" placeholder="Search Student..." className="col-span-2 lg:col-span-3 px-3 py-2 text-sm rounded-lg border border-gray-300" />
                    <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg"><Filter className="w-4 h-4 mr-2" /> Apply</button>
                    <button className="flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg"><Download className="w-4 h-4 mr-2" /> Export</button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-2 px-3 font-medium text-gray-600">Student Name</th>
                            <th className="text-left py-2 px-3 font-medium text-gray-600">Class</th>
                            <th className="text-right py-2 px-3 font-medium text-gray-600">Total Fee</th>
                            <th className="text-right py-2 px-3 font-medium text-gray-600">Amount Paid</th>
                            <th className="text-right py-2 px-3 font-medium text-gray-600">Amount Due</th>
                            <th className="text-left py-2 px-3 font-medium text-gray-600">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.map((row, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-3 px-3 font-medium text-gray-800">{row.student}</td>
                                <td className="py-3 px-3 text-gray-600">{row.class}</td>
                                <td className="py-3 px-3 text-right">OMR {formatCurrency(row.totalFee)}</td>
                                <td className="py-3 px-3 text-right text-green-600">OMR {formatCurrency(row.paid)}</td>
                                <td className="py-3 px-3 text-right text-red-600">OMR {formatCurrency(row.due)}</td>
                                <td className="py-3 px-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusChip(row.status)}`}>
                                        {row.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default DetailedReport;
