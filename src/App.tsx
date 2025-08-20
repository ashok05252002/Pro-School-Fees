import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RoleSelection from './components/RoleSelection';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import NotificationsPage from './components/parent/pages/NotificationsPage';

export type UserRole = 'admin' | 'super-admin' | 'parent';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  studentName?: string;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<'role-selection' | 'login' | 'dashboard' | 'notifications'>('role-selection');
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setCurrentScreen('login');
  };

  const handleLoginSuccess = (userData: User) => {
    setUser(userData);
    setCurrentScreen('dashboard');
  };

  const handleBackToRoleSelection = () => {
    setSelectedRole(null);
    setCurrentScreen('role-selection');
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedRole(null);
    setCurrentScreen('role-selection');
  };
  
  const handleShowNotifications = () => {
    if (user?.role === 'parent') {
      setCurrentScreen('notifications');
    }
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence mode="wait">
        {currentScreen === 'role-selection' && (
          <motion.div
            key="role-selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <RoleSelection onRoleSelect={handleRoleSelect} />
          </motion.div>
        )}

        {currentScreen === 'login' && selectedRole && (
          <motion.div
            key="login"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <LoginScreen 
              role={selectedRole} 
              onLoginSuccess={handleLoginSuccess}
              onBack={handleBackToRoleSelection}
            />
          </motion.div>
        )}

        {currentScreen === 'dashboard' && user && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Dashboard user={user} onLogout={handleLogout} onShowNotifications={handleShowNotifications} />
          </motion.div>
        )}

        {currentScreen === 'notifications' && user && (
           <motion.div
            key="notifications"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <NotificationsPage onBack={handleBackToDashboard} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
