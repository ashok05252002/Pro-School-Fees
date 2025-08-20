import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CreditCard, FileText } from 'lucide-react';
import PaymentModal from '../../common/PaymentModal';
import { formatCurrency } from '../../../utils/formatting';

interface InvoicesPageProps {
  showToast: (message: string) => void;
}

const InvoicesPage: React.FC<InvoicesPageProps> = ({ showToast }) => {
  const [activeTab, setActiveTab] = useState('installments');
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const installments = [
    { no: 1, amount: 1250, dueDate: '2025-01-15', status: 'Paid' },
    { no: 2, amount: 1250, dueDate: '2025-02-15', status: 'Paid' },
    { no: 3, amount: 1250, dueDate: '2025-03-15', status: 'Due' },
    { no: 4, amount: 1250, dueDate: '2025-04-15', status: 'Upcoming' },
  ];

  const invoices = [
    { no: 'INV-001', date: '2025-01-10', amount: 1250, status: 'Paid' },
    { no: 'INV-002', date: '2025-02-10', amount: 1250, status: 'Paid' },
    { no: 'INV-003', date: '2025-03-10', amount: 1250, status: 'Due' },
  ];

  const handlePayNow = (amount: number) => {
    setPaymentAmount(amount);
    setPaymentModalOpen(true);
  };

  const handleDownload = () => {
    showToast('Receipt downloaded successfully!');
  };

  const getStatusChip = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Due': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const renderInstallments = () => (
    <div className="space-y-4">
      {installments.map((item, index) => (
        <motion.div
          key={item.no}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm"
        >
          <div>
            <p className="font-bold text-gray-800">Installment #{item.no}</p>
            <p className="text-sm text-gray-500">Due: {item.dueDate}</p>
            <p className="text-lg font-semibold text-gray-900 mt-1">OMR {formatCurrency(item.amount)}</p>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusChip(item.status)}`}>{item.status}</span>
            {item.status === 'Due' && (
              <button onClick={() => handlePayNow(item.amount)} className="mt-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                <CreditCard className="w-4 h-4 mr-1.5" /> Pay Now
              </button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderInvoices = () => (
     <div className="space-y-4">
        {invoices.map((item, index) => (
          <motion.div
            key={item.no}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm"
          >
            <div>
              <p className="font-bold text-gray-800">{item.no}</p>
              <p className="text-sm text-gray-500">Date: {item.date}</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">OMR {formatCurrency(item.amount)}</p>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusChip(item.status)}`}>{item.status}</span>
              <button onClick={handleDownload} className="p-2 text-gray-500 hover:text-blue-600">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Payments</h1>

      <div className="flex bg-gray-200 rounded-xl p-1 mb-6">
        <button onClick={() => setActiveTab('installments')} className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${activeTab === 'installments' ? 'bg-white shadow' : 'text-gray-600'}`}>Installments</button>
        <button onClick={() => setActiveTab('invoices')} className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${activeTab === 'invoices' ? 'bg-white shadow' : 'text-gray-600'}`}>Invoices & Receipts</button>
      </div>

      {activeTab === 'installments' ? renderInstallments() : renderInvoices()}

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        showToast={showToast}
        amount={paymentAmount}
      />
    </div>
  );
};

export default InvoicesPage;
