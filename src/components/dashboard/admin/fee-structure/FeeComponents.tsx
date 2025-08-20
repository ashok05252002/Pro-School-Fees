import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { formatCurrency } from '../../../../utils/formatting';

interface FeeComponent {
  id: string;
  name: string;
  category: string;
  frequency: string;
  amount: number;
  taxable: boolean;
  notes?: string;
}

const FeeComponents: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [components, setComponents] = useState<FeeComponent[]>([
    { id: '1', name: 'Monthly Tuition', category: 'Tuition Fee', frequency: 'Monthly', amount: 800, taxable: true },
    { id: '2', name: 'Bus Route A', category: 'Transport Fee', frequency: 'Monthly', amount: 150, taxable: false },
    { id: '3', name: 'Annual Sports Fee', category: 'Activity Fee', frequency: 'Annually', amount: 500, taxable: true },
    { id: '4', name: 'Lab Fee - Physics', category: 'Lab Fee', frequency: 'Term-wise', amount: 120, taxable: false },
  ]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Fee Components</h2>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowModal(true)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          <span>Add Component</span>
        </motion.button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-medium text-gray-900">Component Name</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Frequency</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Taxable</th>
              <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {components.map(component => (
              <tr key={component.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-800">{component.name}</td>
                <td className="py-3 px-4 text-gray-600">{component.category}</td>
                <td className="py-3 px-4 text-gray-600">{component.frequency}</td>
                <td className="py-3 px-4 text-gray-600">OMR {formatCurrency(component.amount)}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    component.taxable ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {component.taxable ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="p-1 text-gray-400 hover:text-blue-600"><Edit className="w-4 h-4" /></button>
                    <button className="p-1 text-gray-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <AnimatePresence>
        {showModal && <ComponentModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </motion.div>
  );
};

const ComponentModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
        className="bg-white rounded-2xl p-6 w-full max-w-lg"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Add Fee Component</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Component Name</label>
              <input type="text" placeholder="e.g., Monthly Tuition" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fee Category</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white">
                <option>Tuition Fee</option>
                <option>Transport Fee</option>
                <option>Activity Fee</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white">
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Annually</option>
                <option>One-time</option>
              </select>
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">OMR</span>
                <input type="number" placeholder="Enter default amount" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
            <textarea placeholder="Optional notes about this component" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"></textarea>
          </div>
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
              <span className="ml-2 text-sm text-gray-600">Tax Applicable</span>
            </label>
          </div>
          <div className="flex space-x-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-3 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200">Cancel</button>
            <button type="submit" className="flex-1 px-4 py-3 text-white bg-blue-600 rounded-xl hover:bg-blue-700">Save Component</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default FeeComponents;
