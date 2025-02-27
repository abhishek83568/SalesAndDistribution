import { createContext, useState } from 'react';

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    taskReminders: true,
    transactionUpdates: true,
    notificationHistory: true,
    offlineNotification: true,
    pendingApprovals: true,
    overdueTasks: true,
    deadlined: true,
    paymentConfirmations: true,
    orderConfirmations: true,
    deliveryConfirmations: true,
    updatesAvailable: true,
    downtime: true,
  });

  const toggleSetting = (key) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: !prevSettings[key],
    }));
  };

  return (
    <NotificationContext.Provider value={{ settings, toggleSetting }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider ;

