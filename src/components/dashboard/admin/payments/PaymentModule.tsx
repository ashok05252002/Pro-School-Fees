import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, List, RefreshCcw, HandCoins } from 'lucide-react';
import Breadcrumbs from '../../../common/Breadcrumbs';
import ManualPaymentEntry from './ManualPaymentEntry';
import PaymentLedger from './PaymentLedger';
import PaymentReconciliation from './PaymentReconciliation';
import RefundProcessing from './RefundProcessing';

const PaymentModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState('manual-entry');

  const tabs = [
    { id: 'manual-entry', label: 'Manual Entry', icon: Plus },
    { id: 'ledger', label: 'Payment Ledger', icon: List },
    { id: 'reconciliation', label: 'Reconciliation', icon: RefreshCcw },
    { id: 'refunds', label: 'Refund Processing', icon: HandCoins },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'manual-entry': return <ManualPaymentEntry />;
      case 'ledger': return <PaymentLedger />;
      case 'reconciliation': return <PaymentReconciliation />;
      case 'refunds': return <RefundProcessing />;
      default: return null;
    }
  };

  return (
    <div className="p-4 lg:p-6">
      <Breadcrumbs items={[{ label: 'Fee Management' }, { label: 'Payments' }]} />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Management</h1>
        <p className="text-gray-600">Record manual payments, view ledger, and manage refunds.</p>
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

export default PaymentModule;
