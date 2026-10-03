// PanelComponent.tsx
import React, { useEffect } from 'react';

interface PanelComponentProps {
  type: 'success' | 'error';
  title: string;
  description: string;
  onClose: () => void;
}

const PanelComponent: React.FC<PanelComponentProps> = ({ type, title, description, onClose }) => {

  useEffect(() => {
    // Set a timeout to hide the panel after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 6000);

    // Clear the timeout if the component unmounts to prevent memory leaks
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`form-panel ${type}`}>
      {type === 'success' ? (
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="green"></circle>
          <path d="M17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z" fill="white"></path>
        </svg>
      ) : (
        <svg className="icon " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="white"></circle>
          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z" fill="red"></path>
        </svg>
      )}
      <h2 className="title">{title}</h2>
      <div className="content">{description}</div>
      <button className="panel-btn" onClick={onClose}>Fermer</button>
    </div>
  );
};

export default PanelComponent;
