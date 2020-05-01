import React, { useState } from 'react';
import './notifications.scss';

const NotificationSettings = ({ isDisabled, id, title }) => {
  const [duration, setDuration] = useState(15);
  const [checked, setChecked] = useState(false);
  const [checkBoxDisabled, setCheckBoxDisabled] = useState(!checked);

  return (
    <div className={`notification ${isDisabled ? 'disabled' : ''}`}>
      <div className="slider">
        <div className="check-box">
          <label className="label" htmlFor={id}>{title}</label>
          <input
            checked={checked}
            disabled={isDisabled}
            id={id}
            onChange={(e) => {
              setChecked(e.target.checked);
              setCheckBoxDisabled(!e.target.checked);
            }}
            type="checkbox" />
        </div>
        <input
          className="custom-range range"
          defaultValue={duration}
          type="range"
          step="1"
          min="1"
          max="60"
          disabled={checkBoxDisabled}
          onChange={(e) => {
            setDuration(e.target.value);
          }} />

        {!checkBoxDisabled && duration > 0 ?
          <div>
            {duration} minuta prije nastupanja
          </div>
          : null
        }
      </div>
    </div>
  );
};

export default NotificationSettings;