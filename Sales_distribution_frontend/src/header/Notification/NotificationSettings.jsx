import Not from './NotificationSettings.module.css'; // Import the CSS module
import { useContext } from 'react';
import { NotificationContext } from '../../contexts/NotificationContext';

const NotificationSettings = () => {
  const { settings, toggleSetting } = useContext(NotificationContext);

  return (
    <div className={Not['notification-settings']}>
      <h1 className={Not.title}>Notification Settings</h1>
      <div className={Not.section}>
        <h2>System Alerts</h2>
        <div className={Not.setting}>
          <label className={Not.label}>
            Task Reminders
          </label>
          <input
            type="checkbox"
            checked={settings.taskReminders}
            onChange={() => toggleSetting('taskReminders')}
            className={Not.checkbox}
          />
        </div>
        <div className={Not.setting}>
          <label className={Not.label}>
            Transaction Updates
          </label>
          <input
            type="checkbox"
            checked={settings.transactionUpdates}
            onChange={() => toggleSetting('transactionUpdates')}
            className={Not.checkbox}
          />
        </div>
        <div className={Not.setting}>
          <label className={Not.label}>
            Notification History
          </label>
          <input
            type="checkbox"
            checked={settings.notificationHistory}
            onChange={() => toggleSetting('notificationHistory')}
            className={Not.checkbox}
          />
        </div>
        <div className={Not.setting}>
          <label className={Not.label}>
            Offline Notification
          </label>
          <input
            type="checkbox"
            checked={settings.offlineNotification}
            onChange={() => toggleSetting('offlineNotification')}
            className={Not.checkbox}
          />
        </div>
      </div>

      <div className={Not.section}>
        <h2>Maintenance</h2>
        <div className={Not.setting}>
          <label className={Not.label}>
            Pending Approvals
          </label>
          <input
            type="checkbox"
            checked={settings.pendingApprovals}
            onChange={() => toggleSetting('pendingApprovals')}
            className={Not.checkbox}
          />
        </div>
        <div className={Not.setting}>
          <label className={Not.label}>
            Overdue Tasks
          </label>
          <input
            type="checkbox"
            checked={settings.overdueTasks}
            onChange={() => toggleSetting('overdueTasks')}
            className={Not.checkbox}
          />
        </div>
        <div className={Not.setting}>
          <label className={Not.label}>
            Deadlined
          </label>
          <input
            type="checkbox"
            checked={settings.deadlined}
            onChange={() => toggleSetting('deadlined')}
            className={Not.checkbox}
          />
        </div>
        <div className={Not.setting}>
          <label className={Not.label}>
            Payment Confirmed
          </label>
          <input
            type="checkbox"
            checked={settings.paymentConfirmations}
            onChange={() => toggleSetting('paymentConfirmations')}
            className={Not.checkbox}
          />
        </div>
        <div className={Not.setting}>
          <label className={Not.label}>
            Order Confirmed
          </label>
          <input
            type="checkbox"
            checked={settings.orderConfirmations}
            onChange={() => toggleSetting('orderConfirmations')}
            className={Not.checkbox}
          />
        </div>
        <div className={Not.setting}>
          <label className={Not.label}>
            Delivery Confirmed
          </label>
          <input
            type="checkbox"
            checked={settings.deliveryConfirmations}
            onChange={() => toggleSetting('deliveryConfirmations')}
            className={Not.checkbox}
          />
        </div>
      </div>

      <div className={Not.section}>
        <h2>Updates Available</h2>
        <div className={Not.setting}>
          <label className={Not.label}>
            Updates Available
          </label>
          <input
            type="checkbox"
            checked={settings.updatesAvailable}
            onChange={() => toggleSetting('updatesAvailable')}
            className={Not.checkbox}
          />
        </div>
        <div className={Not.setting}>
          <label className={Not.label}>
            Downtime
          </label>
          <input
            type="checkbox"
            checked={settings.downtime}
            onChange={() => toggleSetting('downtime')}
            className={Not.checkbox}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;