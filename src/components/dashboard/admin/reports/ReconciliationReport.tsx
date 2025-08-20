import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Download } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatting';

const ReconciliationReport: React.FC = () => {
  const reconciliationData = [
    { 
      date: '2025-03-15',
      studentName: 'Sameer Khan',
      studentId: 'SK101',
      class: '10A',
      feeCategory: 'Tuition',
      feeComponent: 'Term 2 Fee',
      invoiceNumber: 'INV-2025-004',
      invoiceDate: '2025-03-01',
      dueDate: '2025-03-15',
      invoiceAmount: 1250,
      amountPaid: 1200,
      outstandingAmount: 50,
      paymentMode: 'Online (PG)',
      paymentDate: '2025-03-14',
      paymentRef: 'raz_Gk1j2kH3L4mN5o',
      status: 'Mismatch',
      scholarshipApplied: 0,
      lateFee: 0,
      refundProcessed: 0,
      netCollected: 1200,
      postedToLedger: true,
      mismatchReason: 'Short payment by parent.',
      processedBy: 'System'
    },
    { 
      date: '2025-03-16',
      studentName: 'Anjali Gupta',
      studentId: 'AG202',
      class: '9B',
      feeCategory: 'Transport',
      feeComponent: 'Monthly Bus Fee',
      invoiceNumber: 'INV-2025-005',
      invoiceDate: '2025-03-02',
      dueDate: '2025-03-10',
      invoiceAmount: 800,
      amountPaid: 800,
      outstandingAmount: 0,
      paymentMode: 'Cash',
      paymentDate: '2025-03-08',
      paymentRef: 'N/A',
      status: 'Matched',
      scholarshipApplied: 0,
      lateFee: 0,
      refundProcessed: 0,
      netCollected: 800,
      postedToLedger: true,
      mismatchReason: '',
      processedBy: 'Admin User'
    },
  ];

  const getStatusChip = (status: string) => {
    switch (status) {
      case 'Matched': return 'bg-green-100 text-green-800';
      case 'Mismatch': return 'bg-orange-100 text-orange-800';
      case 'Unpaid': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <input type="date" title="Start Date" className="px-3 py-2 text-sm rounded-lg border border-gray-300" />
          <input type="date" title="End Date" className="px-3 py-2 text-sm rounded-lg border border-gray-300" />
          <select className="px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white"><option>All Classes</option></select>
          <select className="px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white"><option>All Fee Categories</option></select>
          <select className="px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white"><option>All Statuses</option></select>
          <select className="px-3 py-2 text-sm rounded-lg border border-gray-300 bg-white"><option>All Payment Modes</option></select>
          <input type="text" placeholder="Search Student/ID..." className="col-span-2 lg:col-span-4 px-3 py-2 text-sm rounded-lg border border-gray-300" />
          <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg"><Filter className="w-4 h-4 mr-2" /> Apply</button>
          <button className="flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg"><Download className="w-4 h-4 mr-2" /> Export</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm whitespace-nowrap">
          <thead>
            <tr className="border-b text-left">
              <th className="py-2 px-3 font-medium text-gray-600">Student</th>
              <th className="py-2 px-3 font-medium text-gray-600">Invoice #</th>
              <th className="py-2 px-3 font-medium text-gray-600">Fee Details</th>
              <th className="py-2 px-3 font-medium text-gray-600">Invoice Date</th>
              <th className="py-2 px-3 font-medium text-gray-600">Payment Date</th>
              <th className="py-2 px-3 font-medium text-gray-600 text-right">Invoice Amt</th>
              <th className="py-2 px-3 font-medium text-gray-600 text-right">Paid Amt</th>
              <th className="py-2 px-3 font-medium text-gray-600 text-right">Outstanding</th>
              <th className="py-2 px-3 font-medium text-gray-600">Payment Mode</th>
              <th className="py-2 px-3 font-medium text-gray-600">Status</th>
              <th className="py-2 px-3 font-medium text-gray-600">Posted to Ledger</th>
            </tr>
          </thead>
          <tbody>
            {reconciliationData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-3">
                  <p className="font-medium text-gray-800">{row.studentName}</p>
                  <p className="text-xs text-gray-500">{row.studentId} | {row.class}</p>
                </td>
                <td className="py-3 px-3 text-gray-600">{row.invoiceNumber}</td>
                <td className="py-3 px-3">
                    <p className="font-medium text-gray-800">{row.feeComponent}</p>
                    <p className="text-xs text-gray-500">{row.feeCategory}</p>
                </td>
                <td className="py-3 px-3 text-gray-600">{row.invoiceDate}</td>
                <td className="py-3 px-3 text-gray-600">{row.paymentDate}</td>
                <td className="py-3 px-3 text-right font-medium">OMR {formatCurrency(row.invoiceAmount)}</td>
                <td className="py-3 px-3 text-right text-green-600 font-medium">OMR {formatCurrency(row.amountPaid)}</td>
                <td className="py-3 px-3 text-right text-red-600 font-medium">OMR {formatCurrency(row.outstandingAmount)}</td>
                <td className="py-3 px-3 text-gray-600">{row.paymentMode}</td>
                <td className="py-3 px-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusChip(row.status)}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-3 px-3 text-center">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${row.postedToLedger ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                    {row.postedToLedger ? 'Yes' : 'No'}
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

export default ReconciliationReport;
