import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Percent, Plus, Edit, Trash2 } from 'lucide-react';
import Breadcrumbs from '../../../common/Breadcrumbs';

interface TaxRule {
  id: string;
  region: string;
  taxPercent: number;
  appliesTo: string[];
}

const TaxSettings: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [taxRules, setTaxRules] = useState<TaxRule[]>([
    { id: '1', region: 'Maharashtra, India', taxPercent: 9, appliesTo: ['Tuition Fee', 'Activity Fee'] },
    { id: '2', region: 'Karnataka, India', taxPercent: 12, appliesTo: ['Tuition Fee'] },
  ]);

  return (
    <div className="p-4 lg:p-6">
      <Breadcrumbs items={[{ label: 'Settings' }, { label: 'Tax Configuration' }]} />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tax Configuration</h1>
        <p className="text-gray-600">Set up region-specific tax rules and apply them to fee components.</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Tax Rules</h2>
          <motion.button
            onClick={() => setShowModal(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Tax Rule</span>
          </motion.button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-3 font-medium text-gray-600">Region</th>
                <th className="text-left py-2 px-3 font-medium text-gray-600">Tax %</th>
                <th className="text-left py-2 px-3 font-medium text-gray-600">Applies To</th>
                <th className="text-left py-2 px-3 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {taxRules.map(rule => (
                <tr key={rule.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-3 font-medium text-gray-800">{rule.region}</td>
                  <td className="py-3 px-3 text-gray-700">{rule.taxPercent}%</td>
                  <td className="py-3 px-3 text-gray-700">
                    <div className="flex flex-wrap gap-1">
                      {rule.appliesTo.map(item => (
                        <span key={item} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">{item}</span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-3">
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
      </div>
      <AnimatePresence>
        {showModal && <TaxRuleModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  );
};

const TaxRuleModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const feeComponents = ['Monthly Tuition', 'Bus Route A', 'Annual Sports Fee', 'Lab Fee - Physics', 'Library Fee'];
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedComponents(options);
  };

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
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Add Tax Rule</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
              <input type="text" placeholder="e.g., Maharashtra, India" className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tax Rate (%)</label>
              <input type="number" placeholder="e.g., 9" className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Applies To (Multi-select)</label>
            <select 
              multiple 
              value={selectedComponents}
              onChange={handleSelectChange}
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 h-32 bg-white"
            >
              {feeComponents.map(comp => <option key={comp} value={comp}>{comp}</option>)}
            </select>
            <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple items.</p>
          </div>
          <div className="flex space-x-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-3 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200">Cancel</button>
            <button type="submit" className="flex-1 px-4 py-3 text-white bg-blue-600 rounded-xl hover:bg-blue-700">Save Rule</button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default TaxSettings;
