async function requestNotifications() {
  // Let's check if the browser supports notifications
  if (!window.Notification) {
    console.warning('This browser does not support desktop notification');
    return false;
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === 'granted') {
    // If it's okay let's create a notification
    return true;
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    const permision = await Notification.requestPermission();
    return permision === 'granted';
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
}

const showNotification = ({ title, body }) => {
  new Notification(title, { body });
};

// Notification.requestPermission().then(function (permission) {
//   console.log(permission);
// });


export default {
  requestNotifications,
  showNotification,
};