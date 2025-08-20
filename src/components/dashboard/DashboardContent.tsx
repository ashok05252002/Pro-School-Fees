import React from 'react';
import { User } from '../../App';
import AdminDashboard from './admin/AdminDashboard';
import SuperAdminDashboard from './admin/SuperAdminDashboard';
import FeeStructure from './admin/FeeStructure';
import AssignFees from './admin/AssignFees';
import InvoiceManagement from './admin/InvoiceManagement';
import Reports from './admin/Reports';
import AccessControl from './admin/AccessControl';
import CurrencyGateway from './admin/CurrencyGateway';
import NotificationSettings from './admin/NotificationSettings';
import TaxSettings from './admin/settings/TaxSettings';
import PaymentModule from './admin/payments/PaymentModule';
import ScholarshipModule from './admin/scholarships/ScholarshipModule';
import SystemAutomation from './admin/SystemAutomation';


interface DashboardContentProps {
  user: User;
  activeTab: string;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ user, activeTab }) => {
  const renderAdminContent = () => {
    switch (activeTab) {
      case 'dashboard': return <AdminDashboard user={user} />;
      case 'fee-structure': return <FeeStructure />;
      case 'assign-fees': return <AssignFees />;
      case 'invoices': return <InvoiceManagement />;
      case 'payments': return <PaymentModule />;
      case 'scholarships': return <ScholarshipModule />;
      case 'reports': return <Reports />;
      case 'tax-settings': return <TaxSettings />;
      default: return <AdminDashboard user={user} />;
    }
  };

  const renderSuperAdminContent = () => {
    switch (activeTab) {
      case 'dashboard': return <SuperAdminDashboard user={user} />;
      case 'access-control': return <AccessControl />;
      case 'system-automation': return <SystemAutomation />;
      case 'currency-gateway': return <CurrencyGateway />;
      case 'notifications': return <NotificationSettings />;
      default: return renderAdminContent(); // Super Admin has access to all admin tabs
    }
  };

  if (user.role === 'admin') {
    return renderAdminContent();
  }

  if (user.role === 'super-admin') {
    return renderSuperAdminContent();
  }

  return null;
};

export default DashboardContent;
