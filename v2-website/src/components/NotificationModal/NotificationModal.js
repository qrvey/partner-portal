import React from 'react';
import Modal from 'react-modal';
import './NotificationModal.css'; // Asegúrate de que la ruta es correcta

const NotificationModal = ({ isOpen, onClose, notificationStatus, onSave }) => {
  const [isEnabled, setIsEnabled] = React.useState(notificationStatus);

  const handleSave = () => {
    onSave(isEnabled);
  };

  return (
    <Modal className='NotificationModal' style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 99999999
      },
      content: {
        color: 'black',
        height: 'max-content',
        maxHeight: '90vh',
        backgroundColor: 'white',
        width: '650px',
        maxWidth: '45%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '30px',
        borderRadius: '20px',
      }
    }} isOpen={isOpen} onRequestClose={onClose}>
      <h2>Notifications Preferences</h2>
      <p>To unsubscribe from all notifications, disable the  toggle.</p>
      <div className='toggle-container'><label className="toggle-switch">
        <input
          type="checkbox"
          checked={isEnabled}
          onChange={(e) => setIsEnabled(e.target.checked)}
        />
        <span className="slider round"></span>
      </label>
        <span>Show Notifications
</span>
      </div>
      <table class="dashboard-table">
  <tr>
    <td class="title-cell">Partner Portal</td>
    <td class="content-cell">
      <ul>
        <li>New Release Notes Published <div className='custom-checkbox'>
  <label>
    <input
      type="checkbox"
      checked={isEnabled}
      onChange={(e) => setIsEnabled(e.target.checked)}
    />
    <span></span> {/* Este span será estilizado para parecerse a un checkbox */}
  </label>
  
</div>
</li>
        <li>Updates to Known Issues Article <div className='custom-checkbox'>
  <label>
    <input
      type="checkbox"
      checked={isEnabled}
      onChange={(e) => setIsEnabled(e.target.checked)}
    />
    <span></span> {/* Este span será estilizado para parecerse a un checkbox */}
  </label>
  
</div>
</li>
        <li>Update to Upgrade Notes <div className='custom-checkbox'>
  <label>
    <input
      type="checkbox"
      checked={isEnabled}
      onChange={(e) => setIsEnabled(e.target.checked)}
    />
    <span></span> {/* Este span será estilizado para parecerse a un checkbox */}
  </label>
  
</div>
</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td class="title-cell">Service Announcements</td>
    <td class="content-cell">
      <ul>
        <li><div className='custom-checkbox'>
  <label>
    <input
      type="checkbox"
      checked={isEnabled}
      onChange={(e) => setIsEnabled(e.target.checked)}
    />
    <span></span> {/* Este span será estilizado para parecerse a un checkbox */}
  </label>
  
</div>
 Outages or Services Interruptions</li>
        <li><div className='custom-checkbox'>
  <label>
    <input
      type="checkbox"
      checked={isEnabled}
      onChange={(e) => setIsEnabled(e.target.checked)}
    />
    <span></span> {/* Este span será estilizado para parecerse a un checkbox */}
  </label>
  
</div>
 Feature Deprecation Notice</li>
        <li><div className='custom-checkbox'>
  <label>
    <input
      type="checkbox"
      checked={isEnabled}
      onChange={(e) => setIsEnabled(e.target.checked)}
    />
    <span></span> {/* Este span será estilizado para parecerse a un checkbox */}
  </label>
  
</div>
 Security Incident</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td class="title-cell">Product News</td>
    <td class="content-cell">
      <ul>
        <li><div className='custom-checkbox'>
  <label>
    <input
      type="checkbox"
      checked={isEnabled}
      onChange={(e) => setIsEnabled(e.target.checked)}
    />
    <span></span> {/* Este span será estilizado para parecerse a un checkbox */}
  </label>
  
</div>
 New Release Announcements</li>
        <li><div className='custom-checkbox'>
  <label>
    <input
      type="checkbox"
      checked={isEnabled}
      onChange={(e) => setIsEnabled(e.target.checked)}
    />
    <span></span> {/* Este span será estilizado para parecerse a un checkbox */}
  </label>
  
</div>
 Patch Release Announcements</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td class="title-cell">Company News</td>
    <td class="content-cell">
      <ul>
        <li><div className='custom-checkbox'>
  <label>
    <input
      type="checkbox"
      checked={isEnabled}
      onChange={(e) => setIsEnabled(e.target.checked)}
    />
    <span></span> {/* Este span será estilizado para parecerse a un checkbox */}
  </label>
  
</div>
 Survey Press Release</li>
      </ul>
    </td>
  </tr>
</table>
      <button onClick={handleSave}>Save Preferences</button>
    </Modal>
  );
};

export default NotificationModal;
