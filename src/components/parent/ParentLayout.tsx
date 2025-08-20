import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { User } from '../../App';
import ParentTopNav from './ParentTopNav';
import ParentBottomNav from './ParentBottomNav';
import ParentDashboardPage from './pages/ParentDashboardPage';
import InvoicesPage from './pages/InvoicesPage';
import ProfilePage from './pages/ProfilePage';
import Toast from '../common/Toast';

interface ParentLayoutProps {
  user: User;
  onLogout: () => void;
  onShowNotifications: () => void;
}

const ParentLayout: React.FC<ParentLayoutProps> = ({ user, onLogout, onShowNotifications }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [toast, setToast] = useState({ message: '', visible: false });

  const showToast = (message: string) => {
    setToast({ message, visible: true });
  };

  const renderContent = () => {
    const pageProps = {
      user,
      setActiveTab,
      showToast,
      onLogout,
    };
    switch (activeTab) {
      case 'dashboard':
        return <ParentDashboardPage {...pageProps} />;
      case 'invoices':
        return <InvoicesPage {...pageProps} />;
      case 'profile':
        return <ProfilePage {...pageProps} />;
      default:
        return <ParentDashboardPage {...pageProps} />;
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-100 font-sans">
      <ParentTopNav user={user} onShowNotifications={onShowNotifications} />
      
      <main className="flex-1 overflow-y-auto pt-20 pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <ParentBottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      <Toast 
        message={toast.message} 
        visible={toast.visible} 
        onHide={() => setToast({ ...toast, visible: false })} 
      />
    </div>
  );
};

export default ParentLayout;
