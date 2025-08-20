import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, MessageSquare, LogOut, Upload, Send, Eye, Wallet, PlusCircle } from 'lucide-react';
import ScholarshipApplyModal from '../../common/ScholarshipApplyModal';
import ConfirmationModal from '../../common/ConfirmationModal';
import { formatCurrency } from '../../../utils/formatting';

interface ProfilePageProps {
  onLogout: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('scholarship');
  const [isScholarshipModalOpen, setScholarshipModalOpen] = useState(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [confirmationDetails, setConfirmationDetails] = useState({ title: '', message: '' });

  const scholarships = [
    { name: 'Merit Scholarship 2025', type: 'Flat', value: 5000, status: 'Approved' },
    { name: 'Financial Aid Grant', type: 'Percentage', value: 25, status: 'Pending' },
  ];

  const handleApplyScholarship = () => {
    setScholarshipModalOpen(false);
    setConfirmationDetails({
      title: 'Application Submitted',
      message: 'Your scholarship application has been successfully submitted for review.',
    });
    setConfirmationModalOpen(true);
  };
  
  const handleDisputeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmationDetails({
      title: 'Request Submitted',
      message: 'Your refund/dispute request has been received. We will get back to you shortly.',
    });
    setConfirmationModalOpen(true);
  };

  const getStatusChip = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const renderScholarshipView = () => (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">My Scholarships</h2>
      <div className="space-y-4 mb-6">
        {scholarships.map((item, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.type} - {item.type === 'Flat' ? `OMR ${formatCurrency(item.value)}` : `${item.value}%`}
                </p>
              </div>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusChip(item.status)}`}>{item.status}</span>
            </div>
            <div className="mt-2">
              <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                <Eye className="w-4 h-4 mr-1"/> View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => setScholarshipModalOpen(true)} className="w-full bg-blue-100 text-blue-700 font-semibold py-3 rounded-xl flex items-center justify-center hover:bg-blue-200 transition-colors">
        <Award className="w-4 h-4 mr-2" /> Apply for New Scholarship
      </button>
    </div>
  );

  const renderDisputeForm = () => (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Submit a Request</h2>
      <form onSubmit={handleDisputeSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Request Type</label>
          <select className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white">
            <option>Refund Request</option>
            <option>Fee Dispute</option>
            <option>Other Inquiry</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea rows={5} placeholder="Please describe your request in detail..." className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Attach Proof</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-10 w-10 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
            </div>
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors">
          <Send className="w-4 h-4 mr-2" /> Submit Request
        </button>
      </form>
    </div>
  );

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Profile & Support</h1>

      <div className="bg-white rounded-2xl p-6 shadow-sm flex justify-between items-center">
        <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-green-600" />
            </div>
            <div>
                <p className="text-sm text-gray-500">Wallet Balance</p>
                <p className="text-2xl font-bold text-gray-800">OMR {formatCurrency(54)}</p>
            </div>
        </div>
        <button className="flex items-center space-x-2 text-sm font-semibold text-blue-600">
            <PlusCircle className="w-5 h-5" />
            <span>Add Money</span>
        </button>
      </div>

      <div className="flex bg-gray-200 rounded-xl p-1">
        <button onClick={() => setActiveTab('scholarship')} className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${activeTab === 'scholarship' ? 'bg-white shadow' : 'text-gray-600'}`}>Scholarships</button>
        <button onClick={() => setActiveTab('dispute')} className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${activeTab === 'dispute' ? 'bg-white shadow' : 'text-gray-600'}`}>Refund/Dispute</button>
      </div>

      {activeTab === 'scholarship' ? renderScholarshipView() : renderDisputeForm()}

      <div className="mt-2">
        <button onClick={onLogout} className="w-full bg-red-100 text-red-700 font-semibold py-3 rounded-2xl flex items-center justify-center hover:bg-red-200 transition-colors">
          <LogOut className="w-5 h-5 mr-2" />
          Sign Out
        </button>
      </div>

      <ScholarshipApplyModal isOpen={isScholarshipModalOpen} onClose={() => setScholarshipModalOpen(false)} onApply={handleApplyScholarship} />
      <ConfirmationModal isOpen={isConfirmationModalOpen} onClose={() => setConfirmationModalOpen(false)} title={confirmationDetails.title} message={confirmationDetails.message} />
    </div>
  );
};

export default ProfilePage;
