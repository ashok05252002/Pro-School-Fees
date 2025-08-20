import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatting';

const StudentLedger: React.FC = () => {
  const ledgerData = [
    { date: '2025-01-10', particulars: 'Tuition Fee Invoice', invoice: 'INV-001', debit: 5000, credit: null, balance: 5000 },
    { date: '2025-01-15', particulars: 'Payment Received', invoice: 'INV-001', debit: null, credit: 5000, balance: 0 },
  ];
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Search Student</label>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search by name or ID" className="w-full max-w-sm pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Particulars</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Invoice #</th>
              <th className="text-right py-3 px-4 font-medium text-gray-900">Debit</th>
              <th className="text-right py-3 px-4 font-medium text-gray-900">Credit</th>
              <th className="text-right py-3 px-4 font-medium text-gray-900">Balance</th>
            </tr>
          </thead>
          <tbody>
            {ledgerData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-600">{row.date}</td>
                <td className="py-3 px-4 font-medium text-gray-800">{row.particulars}</td>
                <td className="py-3 px-4 text-gray-600">{row.invoice}</td>
                <td className="py-3 px-4 text-right text-red-600">{row.debit ? `OMR ${formatCurrency(row.debit)}` : '-'}</td>
                <td className="py-3 px-4 text-right text-green-600">{row.credit ? `OMR ${formatCurrency(row.credit)}` : '-'}</td>
                <td className="py-3 px-4 text-right font-semibold text-gray-900">OMR {formatCurrency(row.balance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default StudentLedger;
