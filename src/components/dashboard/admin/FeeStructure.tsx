import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit, Trash2, Settings, Calendar, Percent, Clock, List } from 'lucide-react';
import Breadcrumbs from '../../common/Breadcrumbs';
import InstallmentSetup from './fee-structure/InstallmentSetup';
import LateFeeConfig from './fee-structure/LateFeeConfig';
import FeeComponents from './fee-structure/FeeComponents';

interface FeeCategory {
  id: string;
  name: string;
  description: string;
  status: boolean;
}

const FeeStructure: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'categories' | 'components' | 'installments' | 'late-fee'>('categories');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit'>('add');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const [categories, setCategories] = useState<FeeCategory[]>([
    { id: '1', name: 'Tuition Fee', description: 'Monthly tuition charges', status: true },
    { id: '2', name: 'Transport Fee', description: 'School bus transportation', status: true },
    { id: '3', name: 'Activity Fee', description: 'Extracurricular activities', status: false },
  ]);

  const handleAddCategory = () => {
    setModalType('add');
    setSelectedItem(null);
    setShowModal(true);
  };

  const handleEditCategory = (category: FeeCategory) => {
    setModalType('edit');
    setSelectedItem(category);
    setShowModal(true);
  };

  const handleSaveCategory = (formData: any) => {
    if (modalType === 'add') {
      const newCategory: FeeCategory = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        status: formData.status
      };
      setCategories([...categories, newCategory]);
    } else {
      setCategories(categories.map(cat => 
        cat.id === selectedItem.id ? { ...cat, ...formData } : cat
      ));
    }
    setShowModal(false);
  };

  const tabs = [
    { id: 'categories', label: 'Fee Categories', icon: Settings },
    { id: 'components', label: 'Fee Components', icon: List },
    { id: 'installments', label: 'Installment Plans', icon: Calendar },
    { id: 'late-fee', label: 'Late Fee Rules', icon: Clock }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'categories':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Fee Categories</h2>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddCategory}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
              >
                <Plus className="w-4 h-4" />
                <span>Add Category</span>
              </motion.button>
            </div>
            <div className="space-y-4">
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      category.status ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {category.status ? 'Active' : 'Inactive'}
                    </span>
                    <button
                      onClick={() => handleEditCategory(category)}
                      className="p-2 text-gray-400 hover:text-blue-600"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'components':
        return <FeeComponents />;
      case 'installments':
        return <InstallmentSetup />;
      case 'late-fee':
        return <LateFeeConfig />;
      default:
        return (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-gray-500">This section is under construction.</p>
          </div>
        );
    }
  };

  return (
    <div className="p-4 lg:p-6">
      <Breadcrumbs items={[{ label: 'Fee Management' }, { label: 'Fee Structure' }]} />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fee Structure Setup</h1>
        <p className="text-gray-600">Configure fee categories, components, and payment schedules</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
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

      <AnimatePresence>
        {showModal && (
          <CategoryModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onSave={handleSaveCategory}
            type={modalType}
            initialData={selectedItem}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// CategoryModal remains the same as before
interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  type: 'add' | 'edit';
  initialData?: FeeCategory | null;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ isOpen, onClose, onSave, type, initialData }) => {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    status: initialData?.status || true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-2xl p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {type === 'add' ? 'Add Fee Category' : 'Edit Fee Category'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none"
              placeholder="Enter category name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 outline-none resize-none"
              rows={3}
              placeholder="Enter category description"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-200"
            >
              {type === 'add' ? 'Add Category' : 'Save Changes'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};


export default FeeStructure;
