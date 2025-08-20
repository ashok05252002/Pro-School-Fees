import React from 'react';
import { motion } from 'framer-motion';
import { formatCurrency } from '../../../../utils/formatting';

const PaymentLedger: React.FC = () => {
  const ledgerData = [
    { student: 'Aarav Sharma', amount: 1200, mode: 'Online', date: '2025-03-15', ref: 'PAY_XYZ123', status: 'Posted' },
    { student: 'Priya Patel', amount: 600, mode: 'Cheque', date: '2025-03-14', ref: 'CHQ_54321', status: 'Pending' },
    { student: 'Rohan Mehta', amount: 1500, mode: 'Cash', date: '2025-03-12', ref: 'N/A', status: 'Posted' },
  ];

  const getStatusChip = (status: string) => {
    return status === 'Posted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Ledger</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-medium text-gray-900">Student</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Mode</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Reference</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
            </tr>
          </thead>
          <tbody>
            {ledgerData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-800">{row.student}</td>
                <td className="py-3 px-4 text-gray-600">OMR {formatCurrency(row.amount)}</td>
                <td className="py-3 px-4 text-gray-600">{row.mode}</td>
                <td className="py-3 px-4 text-gray-600">{row.date}</td>
                <td className="py-3 px-4 text-gray-600">{row.ref}</td>
                <td className="py-3 px-4">
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

export default PaymentLedger;
