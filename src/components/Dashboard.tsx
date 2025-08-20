import React from 'react';
import { User } from '../App';
import TopNavigation from './navigation/TopNavigation';
import SubNavigation from './navigation/SubNavigation';
import DashboardContent from './dashboard/DashboardContent';
import ParentLayout from './parent/ParentLayout';

interface DashboardProps {
  user: User;
  onLogout: () => void;
  onShowNotifications: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout, onShowNotifications }) => {

  // Parent Mobile UI
  if (user.role === 'parent') {
    return <ParentLayout user={user} onLogout={onLogout} onShowNotifications={onShowNotifications} />;
  }

  // Admin & Super Admin Desktop UI
  const [activeTab, setActiveTab] = React.useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation user={user} onLogout={onLogout} />
      <SubNavigation user={user} activeTab={activeTab} onTabChange={setActiveTab} />
      <main>
        <DashboardContent user={user} activeTab={activeTab} />
      </main>
    </div>
  );
};

export default Dashboard;
