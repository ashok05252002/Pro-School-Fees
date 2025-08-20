import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Bell } from 'lucide-react';

interface NotificationsPageProps {
  onBack: () => void;
}

const NotificationsPage: React.FC<NotificationsPageProps> = ({ onBack }) => {
  const notifications = [
    { id: 1, title: 'Payment Received', message: 'Your payment of $1250 has been successfully processed.', time: '2h ago', read: false },
    { id: 2, title: 'Fee Reminder', message: 'Installment #3 is due on March 15, 2025.', time: '1 day ago', read: false },
    { id: 3, title: 'Scholarship Update', message: 'Your application for Merit Scholarship 2025 has been approved.', time: '3 days ago', read: true },
    { id: 4, title: 'School Announcement', message: 'Parent-teacher meetings will be held next week.', time: '5 days ago', read: true },
  ];

  return (
    <div className="h-screen w-full flex flex-col bg-gray-100 font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 px-4 py-3 z-50">
        <div className="flex items-center">
          <button onClick={onBack} className="p-2 -ml-2 mr-2">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Notifications</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pt-20">
        <div className="p-4 space-y-3">
          {notifications.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-4 flex items-start space-x-4 ${!item.read ? 'border-l-4 border-blue-500' : ''}`}
            >
              {!item.read && <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>}
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-sm text-gray-600">{item.message}</p>
                <p className="text-xs text-gray-400 mt-2">{item.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NotificationsPage;
