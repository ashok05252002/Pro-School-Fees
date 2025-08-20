import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Plus, Edit, Trash2, Users } from 'lucide-react';

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Record<string, string[]>;
  userCount: number;
}

const AccessControl: React.FC = () => {
  const [showCreateRole, setShowCreateRole] = useState(false);
  const [roles, setRoles] = useState<Role[]>([
    {
      id: '1',
      name: 'School Admin',
      description: 'Full access to school management features',
      permissions: {
        'Fee Management': ['create', 'view', 'edit', 'delete'],
        'Student Management': ['create', 'view', 'edit', 'delete'],
        'Reporting': ['view', 'export'],
      },
      userCount: 5
    },
    {
      id: '2',
      name: 'Accountant',
      description: 'Access to financial and fee management',
      permissions: {
        'Fee Management': ['create', 'view', 'edit'],
        'Reporting': ['view'],
      },
      userCount: 2
    },
    {
      id: '3',
      name: 'Teacher',
      description: 'Limited access to student information',
      permissions: {
        'Student Management': ['view'],
      },
      userCount: 25
    }
  ]);

  const permissionsMatrix = {
    'Fee Management': ['create', 'view', 'edit', 'delete'],
    'Invoice Management': ['create', 'view', 'edit', 'delete'],
    'Student Management': ['create', 'view', 'edit', 'delete'],
    'Scholarships': ['create', 'view', 'edit', 'approve'],
    'Reporting': ['view', 'export'],
    'User Management': ['create', 'view', 'edit', 'delete'],
  };

  return (
    <div className="p-4 lg:p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Access Control</h1>
        <p className="text-gray-600">Manage user roles and permissions for your school system</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Shield className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-semibold text-gray-900">Roles & Permissions</h2>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowCreateRole(true)}
          className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          <span>Create Role</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role, index) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 transition-colors duration-200">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">{role.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{role.description}</p>

            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Permissions ({Object.keys(role.permissions).length} modules)</p>
              <div className="flex flex-wrap gap-1">
                {Object.keys(role.permissions).slice(0, 3).map((permission) => (
                  <span
                    key={permission}
                    className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-lg"
                  >
                    {permission}
                  </span>
                ))}
                {Object.keys(role.permissions).length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                    +{Object.keys(role.permissions).length - 3} more
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <Users className="w-4 h-4 mr-1" />
              <span>{role.userCount} users assigned</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showCreateRole && (
          <CreateRoleModal
            onClose={() => setShowCreateRole(false)}
            permissionsMatrix={permissionsMatrix}
            onSave={(newRole) => {
              setRoles([...roles, { ...newRole, id: Date.now().toString(), userCount: 0 }]);
              setShowCreateRole(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

interface CreateRoleModalProps {
  onClose: () => void;
  permissionsMatrix: Record<string, string[]>;
  onSave: (role: any) => void;
}

const CreateRoleModal: React.FC<CreateRoleModalProps> = ({ onClose, permissionsMatrix, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    permissions: {} as Record<string, string[]>
  });

  const handlePermissionToggle = (module: string, permission: string) => {
    setFormData(prev => {
      const currentPermissions = prev.permissions[module] || [];
      const newPermissions = currentPermissions.includes(permission)
        ? currentPermissions.filter(p => p !== permission)
        : [...currentPermissions, permission];

      return {
        ...prev,
        permissions: { ...prev.permissions, [module]: newPermissions }
      };
    });
  };

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
        className="bg-white rounded-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Create New Role</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 outline-none"
              placeholder="Enter role name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 outline-none resize-none"
              rows={3}
              placeholder="Describe the role responsibilities"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">Permissions Matrix</label>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-2 px-4 text-left font-medium text-gray-600">Module</th>
                    {Object.values(permissionsMatrix)[0].map(p => (
                      <th key={p} className="py-2 px-4 text-center font-medium text-gray-600 capitalize">{p}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(permissionsMatrix).map(([module, permissions]) => (
                    <tr key={module} className="border-t">
                      <td className="py-3 px-4 font-medium text-gray-800">{module}</td>
                      {permissionsMatrix['Fee Management'].map(p => (
                        <td key={p} className="py-3 px-4 text-center">
                          {permissions.includes(p) ? (
                            <input
                              type="checkbox"
                              checked={(formData.permissions[module] || []).includes(p)}
                              onChange={() => handlePermissionToggle(module, p)}
                              className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                            />
                          ) : <span className="text-gray-300">-</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              className="flex-1 px-4 py-3 text-white bg-purple-600 rounded-xl hover:bg-purple-700 transition-colors duration-200"
            >
              Create Role
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AccessControl;
