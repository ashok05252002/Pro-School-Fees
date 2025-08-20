import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, BellRing, Globe } from 'lucide-react';
import Breadcrumbs from '../../common/Breadcrumbs';
import AutoFeeScheduler from './automation/AutoFeeScheduler';
import ReminderEngine from './automation/ReminderEngine';
import LocalizationSettings from './automation/LocalizationSettings';

const SystemAutomation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('scheduler');

  const tabs = [
    { id: 'scheduler', label: 'Auto Fee Scheduler', icon: Clock },
    { id: 'reminders', label: 'Reminder Engine', icon: BellRing },
    { id: 'localization', label: 'Localization', icon: Globe },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'scheduler': return <AutoFeeScheduler />;
      case 'reminders': return <ReminderEngine />;
      case 'localization': return <LocalizationSettings />;
      default: return null;
    }
  };

  return (
    <div className="p-4 lg:p-6">
      <Breadcrumbs items={[{ label: 'Super Admin' }, { label: 'System Automation' }]} />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">System Automation & Settings</h1>
        <p className="text-gray-600">Configure schedulers, reminders, and localization for the platform.</p>
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

export default SystemAutomation;
