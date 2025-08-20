import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Edit, RefreshCw, Eye, Plus, History, BellRing, HandCoins, Wrench } from 'lucide-react';
import Breadcrumbs from '../../common/Breadcrumbs';
import ManualInvoiceCreation from './invoices/ManualInvoiceCreation';
import PenaltyReminderRules from './invoices/PenaltyReminderRules';
import RefundRequests from './invoices/RefundRequests';
import InvoiceHistory from './invoices/InvoiceHistory';
import ManualAdjustment from './invoices/ManualAdjustment';

interface Invoice {
  id: string;
  studentName: string;
  invoiceNumber: string;
  amount: number;
  paidAmount: number;
  status: 'paid' | 'partial' | 'pending';
  dueDate: string;
}

const InvoiceManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('auto-generated');

  const invoices: Invoice[] = [
    { id: '1', studentName: 'Aarav Sharma', invoiceNumber: 'INV-2025-001', amount: 1200, paidAmount: 1200, status: 'paid', dueDate: '2025-01-15' },
    { id: '2', studentName: 'Priya Patel', invoiceNumber: 'INV-2025-002', amount: 1200, paidAmount: 600, status: 'partial', dueDate: '2025-01-20' },
    { id: '3', studentName: 'Rohan Mehta', invoiceNumber: 'INV-2025-003', amount: 1200, paidAmount: 0, status: 'pending', dueDate: '2025-01-25' },
  ];

  const tabs = [
    { id: 'auto-generated', label: 'Generated Invoices', icon: FileText },
    { id: 'manual-creation', label: 'Manual Creation', icon: Plus },
    { id: 'manual-adjustment', label: 'Manual Adjustment', icon: Wrench },
    { id: 'penalty-rules', label: 'Penalty & Reminders', icon: BellRing },
    { id: 'refund-requests', label: 'Refund Requests', icon: HandCoins },
    { id: 'history', label: 'Audit Log', icon: History }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'auto-generated':
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Invoice Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Student Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Invoice #</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Due Date</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{invoice.studentName}</td>
                      <td className="py-3 px-4 text-gray-600">{invoice.invoiceNumber}</td>
                      <td className="py-3 px-4 text-gray-900 font-medium">OMR {invoice.amount.toLocaleString()}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                          {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{invoice.dueDate}</td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <button className="p-1 text-gray-400 hover:text-blue-600 transition-colors duration-200"><Eye className="w-4 h-4" /></button>
                          <button className="p-1 text-gray-400 hover:text-green-600 transition-colors duration-200"><Edit className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        );
      case 'manual-creation': return <ManualInvoiceCreation />;
      case 'manual-adjustment': return <ManualAdjustment />;
      case 'penalty-rules': return <PenaltyReminderRules />;
      case 'refund-requests': return <RefundRequests />;
      case 'history': return <InvoiceHistory />;
      default: return null;
    }
  };

  return (
    <div className="p-4 lg:p-6">
      <Breadcrumbs items={[{ label: 'Fee Management' }, { label: 'Invoices' }]} />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Invoice Management</h1>
        <p className="text-gray-600">Manage invoices, adjustments, refunds, and audit logs.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default InvoiceManagement;
