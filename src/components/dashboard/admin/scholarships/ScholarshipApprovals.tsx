import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const ScholarshipApprovals: React.FC = () => {
  const approvalRequests = [
    { student: 'Sameer Khan', scholarship: 'Merit Scholarship 2025', appliedBy: 'Admin User', date: '2025-03-10' },
    { student: 'Anjali Gupta', scholarship: 'Sibling Discount', appliedBy: 'Admin User', date: '2025-03-11' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Pending Scholarship Approvals</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-medium text-gray-900">Student</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Scholarship</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Applied By</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {approvalRequests.map((req, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-800">{req.student}</td>
                <td className="py-3 px-4 text-gray-600">{req.scholarship}</td>
                <td className="py-3 px-4 text-gray-600">{req.appliedBy}</td>
                <td className="py-3 px-4 text-gray-600">{req.date}</td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="p-2 text-white bg-green-500 rounded-lg hover:bg-green-600"><Check className="w-4 h-4" /></button>
                    <button className="p-2 text-white bg-red-500 rounded-lg hover:bg-red-600"><X className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ScholarshipApprovals;
