import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, UserPlus, CheckSquare } from 'lucide-react';
import Breadcrumbs from '../../../common/Breadcrumbs';
import ScholarshipMaster from './ScholarshipMaster';
import ApplyScholarshipAdmin from './ApplyScholarshipAdmin';
import ScholarshipApprovals from './ScholarshipApprovals';

const ScholarshipModule: React.FC = () => {
    const [activeTab, setActiveTab] = useState('master');

    const tabs = [
        { id: 'master', label: 'Scholarship Master', icon: Award },
        { id: 'apply', label: 'Apply to Student', icon: UserPlus },
        { id: 'approvals', label: 'Approvals', icon: CheckSquare },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'master': return <ScholarshipMaster />;
            case 'apply': return <ApplyScholarshipAdmin />;
            case 'approvals': return <ScholarshipApprovals />;
            default: return null;
        }
    };

    return (
        <div className="p-4 lg:p-6">
            <Breadcrumbs items={[{ label: 'Fee Management' }, { label: 'Scholarships' }]} />
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Scholarships & Discounts</h1>
                <p className="text-gray-600">Manage scholarships, apply them to students, and handle approvals.</p>
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

export default ScholarshipModule;
