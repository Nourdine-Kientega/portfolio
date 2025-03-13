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
    <div className={`panel ${type}`}>
      <div className="panel-icon">
        {type === 'success' ? '✔️' : '❌'}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default PanelComponent;
