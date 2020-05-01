import React, { useState } from 'react';

// Import components and services
import NotificationSettings from '../NotificationsSettings';
import notifications from '../../services/notifications';

// Import styles
import './settings.scss';
import 'bootstrap/dist/css/bootstrap.css';

export default () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(Notification.permission === 'granted');
  // useEffect(() => {
  //   if (notificationsEnabled) {
  //     notifications.showNotification({ title: 'Vaktija', body: 'Uskoro ce aksam' });
  //   }
  // }, [notificationsEnabled]);

  const NotificationButton = () => {
    return (
      !notificationsEnabled ?
        (<button className="form-control" onClick={async () => {
          const permission = await notifications.requestNotifications();
          setNotificationsEnabled(permission);
        }}>Omoguci obavijesti</button>)
        : null
    );
  };

  return (
    <div className="settings">
      <div className="title-wrapper">
        <div className="title">Obavijesti</div>
      </div>
      <NotificationButton />
      <NotificationSettings id={0} title={'Zora'} isDisabled={!notificationsEnabled} />
      <NotificationSettings id={1} title={'Sabah'} isDisabled={!notificationsEnabled} />
      <NotificationSettings id={2} title={'Podne'} isDisabled={!notificationsEnabled} />
      <NotificationSettings id={3} title={'Ikindija'} isDisabled={!notificationsEnabled} />
      <NotificationSettings id={4} title={'Akšam'} isDisabled={!notificationsEnabled} />
      <NotificationSettings id={5} title={'Jacija'} isDisabled={!notificationsEnabled} />
    </div>
  );
};