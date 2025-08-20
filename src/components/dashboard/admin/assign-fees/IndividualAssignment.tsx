import React from 'react';
import { motion } from 'framer-motion';
import { Search, UserPlus } from 'lucide-react';

const IndividualAssignment: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Individual Fee Assignment</h2>
      
      {/* Student Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search for a student by name or ID..."
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Student Details & Form */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <UserPlus className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Aarav Sharma</h3>
            <p className="text-sm text-gray-500">Grade 10A, Student ID: 10234</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fee Structure Template</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
              <option>Select template</option>
              <option>High School Template</option>
              <option>Custom Fee Plan</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Academic Year</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">
              <option>2024-2025</option>
              <option>2025-2026</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6 flex space-x-3">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">Assign & Generate Invoice</button>
          <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200">Cancel</button>
        </div>
      </div>
    </motion.div>
  );
};

export default IndividualAssignment;
