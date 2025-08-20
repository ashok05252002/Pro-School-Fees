import React from 'react';
import { motion } from 'framer-motion';
import { formatCurrency } from '../../../../utils/formatting';

const InvoiceHistory: React.FC = () => {
    const history = [
        { invoiceId: 'INV-2025-001', date: '2025-01-16', editor: 'Admin User', action: 'Adjustment', oldVal: 1200, newVal: 1150 },
        { invoiceId: 'INV-2025-002', date: '2025-01-15', editor: 'System', action: 'Generated', oldVal: null, newVal: 1200 },
    ];
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Invoice History & Audit Log</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Invoice ID</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Edited By</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Action</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Old Value</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">New Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-3 px-4 font-medium text-gray-800">{item.invoiceId}</td>
                                <td className="py-3 px-4 text-gray-600">{item.date}</td>
                                <td className="py-3 px-4 text-gray-600">{item.editor}</td>
                                <td className="py-3 px-4 text-gray-600">{item.action}</td>
                                <td className="py-3 px-4 text-gray-600">{item.oldVal !== null ? `OMR ${formatCurrency(item.oldVal)}` : '-'}</td>
                                <td className="py-3 px-4 text-gray-600">{item.newVal !== null ? `OMR ${formatCurrency(item.newVal)}` : '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
};

export default InvoiceHistory;
