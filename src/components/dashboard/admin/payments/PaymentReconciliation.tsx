import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatting';

const PaymentReconciliation: React.FC = () => {
    const reconciliationData = [
        { student: 'Sameer Khan', invoiceAmount: 1250, paidAmount: 1200, mismatch: -50, status: 'Mismatch' },
        { student: 'Anjali Gupta', invoiceAmount: 800, paidAmount: 800, mismatch: 0, status: 'Matched' },
        { student: 'Vikram Kumar', invoiceAmount: 1000, paidAmount: 1050, mismatch: 50, status: 'Mismatch' },
    ];

    const getStatusChip = (status: string) => {
        return status === 'Matched' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800';
    };

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Reconciliation</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Student</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Invoice Amount</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Paid Amount</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Mismatch</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reconciliationData.map((row, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-3 px-4 font-medium text-gray-800">{row.student}</td>
                                <td className="py-3 px-4 text-gray-600">OMR {formatCurrency(row.invoiceAmount)}</td>
                                <td className="py-3 px-4 text-gray-600">OMR {formatCurrency(row.paidAmount)}</td>
                                <td className={`py-3 px-4 font-medium ${row.mismatch < 0 ? 'text-red-600' : row.mismatch > 0 ? 'text-green-600' : 'text-gray-600'}`}>
                                    {row.mismatch !== 0 ? `OMR ${formatCurrency(row.mismatch)}` : `OMR ${formatCurrency(0)}`}
                                </td>
                                <td className="py-3 px-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit ${getStatusChip(row.status)}`}>
                                        {row.status === 'Mismatch' && <AlertTriangle className="w-3 h-3 mr-1" />}
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

export default PaymentReconciliation;
