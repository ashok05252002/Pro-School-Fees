import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, FileText, Download, Check, ChevronsUpDown } from 'lucide-react';

const BulkAssignment: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Bulk Fee Assignment</h2>
      
      <div className="bg-gray-50 rounded-2xl p-6 space-y-6">
        <h3 className="text-lg font-medium text-gray-800">1. Select Assignment Criteria</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Academic Year</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option>2025-2026</option>
              <option>2024-2025</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Fee Structure Template</label>
            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option>Primary School Template</option>
              <option>Secondary School Template</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Class/Group (Multi-select)</label>
            <select multiple className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 h-24">
              <option>Grade 9A</option>
              <option>Grade 9B</option>
              <option>Grade 10A</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
              <span className="ml-2 text-sm text-gray-600">Apply eligible scholarships automatically?</span>
            </label>
          </div>
        </div>
        
        <div className="flex justify-end">
          <button className="font-medium text-blue-700 hover:text-blue-600 flex items-center bg-blue-100 px-4 py-2 rounded-lg">
            <Download className="w-4 h-4 mr-2"/> Download Filtered Student List (CSV)
          </button>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-6 text-center">
        <h3 className="text-lg font-medium text-gray-800 mb-4">2. Upload Student List</h3>
        <UploadCloud className="w-12 h-12 text-blue-500 mx-auto mb-2" />
        <p className="text-gray-500 mb-6">Upload the CSV with student IDs to assign fees to.</p>
        
        <div className="mt-1 flex justify-center px-6 pt-8 pb-8 border-2 border-gray-300 border-dashed rounded-xl">
          <div className="space-y-1 text-center">
            <div className="flex text-sm text-gray-600">
              <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none px-4 py-2 border border-gray-300">
                <span>Choose a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-2">CSV file up to 5MB</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
          Upload and Process Assignment
        </button>
      </div>
    </motion.div>
  );
};

export default BulkAssignment;
