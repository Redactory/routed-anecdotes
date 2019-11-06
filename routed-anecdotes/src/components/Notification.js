import React from 'react';

const styling = (notification) => {
  if (notification.length > 0) {
    return {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
  }

  return {
    display: 'none'
  };
}

const Notification = (props) => {  
  return (
    <div style={styling(props.notification)}>
      {props.notification}
    </div>
  );
}

export default Notification;
