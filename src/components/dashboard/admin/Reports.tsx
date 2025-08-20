import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Printer, Filter, BarChart, User, AlertOctagon, LineChart, PieChart, GitCompareArrows, FileSpreadsheet } from 'lucide-react';
import Breadcrumbs from '../../common/Breadcrumbs';
import StudentLedger from './reports/StudentLedger';
import AgingReport from './reports/AgingReport';
import DefaulterTracker from './reports/DefaulterTracker';
import CollectionReport from './reports/CollectionReport';
import ReconciliationReport from './reports/ReconciliationReport';
import DetailedReport from './reports/DetailedReport';

const Reports: React.FC = () => {
  const [activeTab, setActiveTab] = useState('collection-report');

  const tabs = [
    { id: 'collection-report', label: 'Collection Report', icon: LineChart },
    { id: 'reconciliation-report', label: 'Reconciliation', icon: GitCompareArrows },
    { id: 'detailed-analytics', label: 'Detailed Analytics', icon: FileSpreadsheet },
    { id: 'student-ledger', label: 'Student Ledger', icon: User },
    { id: 'aging-report', label: 'Aging Report', icon: BarChart },
    { id: 'defaulter-tracker', label: 'Defaulter Tracker', icon: AlertOctagon },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'collection-report': return <CollectionReport />;
      case 'reconciliation-report': return <ReconciliationReport />;
      case 'detailed-analytics': return <DetailedReport />;
      case 'student-ledger': return <StudentLedger />;
      case 'aging-report': return <AgingReport />;
      case 'defaulter-tracker': return <DefaulterTracker />;
      default: return null;
    }
  };

  return (
    <div className="p-4 lg:p-6">
      <Breadcrumbs items={[{ label: 'Fee Management' }, { label: 'Reports' }]} />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fee Reports & Analytics</h1>
        <p className="text-gray-600">Generate and view detailed fee collection and analytics reports.</p>
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

export default Reports;
