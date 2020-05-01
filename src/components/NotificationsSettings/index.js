import React, { useState } from 'react';

const NotificationSettings = ({ value, isDisabled }) => {
  const [duration, setDuration] = useState(value || 15);
  const [checked, setChecked] = useState(false);
  const [checkBoxDisabled, setCheckBoxDisabled] = useState(!checked);

  return (
    <div className={`setting ${isDisabled ? 'disabled' : ''}`}>
      <div className="slider">
        <div className="check-box">
          <label className="label" htmlFor="checkbox">Notifikacija</label>
          <input
            checked={checked}
            disabled={isDisabled}
            id="checkbox"
            onChange={(e) => {
              setChecked(e.target.checked);
              setCheckBoxDisabled(!e.target.checked);
            }}
            type="checkbox" />
        </div>
        <input
          className="custom-range"
          defaultValue={duration}
          type="range"
          step="1"
          min="0"
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