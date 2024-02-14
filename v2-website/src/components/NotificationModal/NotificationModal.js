import React from 'react';
import Modal from 'react-modal';
import './NotificationModal.css'; // Asegúrate de que la ruta es correcta

const NotificationModal = ({ isOpen, onClose, notificationStatus, onSave }) => {
  // Estado inicial basado en un objeto de ejemplo. Ajusta según tus datos reales.
  const initialState = {
    pp0001: false,
    pp002: false,
    pp003: false,
    sa001: false,
    sa002: false,
    sa003: false,
    pn001: false,
    pn002: false,
    cn001: false,
  };

  const [notificationPreferences, setNotificationPreferences] = React.useState(notificationStatus || initialState);
  
  const [isEnabled, setIsEnabled] = React.useState(true);

  const handleGlobalToggleChange = (e) => {
    setIsEnabled(e.target.checked);
    if (!e.target.checked) {
      // Establecer todos los valores en false si el interruptor global está desactivado
      const disabledPreferences = Object.keys(notificationPreferences).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      setNotificationPreferences(disabledPreferences);
    }
  };

  const handleChange = (name, value) => {
    setNotificationPreferences(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(notificationPreferences);
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
      <p>To unsubscribe from all notifications, disable the toggle.</p>
      <div className='toggle-container'>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={handleGlobalToggleChange}
          />
          <span className="slider round"></span>
        </label>
        <span>Show Notifications</span>
      </div>
      <table className="dashboard-table" style={{ opacity: isEnabled ? 1 : 0.5, pointerEvents: isEnabled ? 'auto' : 'none' }}>
        {/* Partner Portal */}
        <tr>
          <td className="title-cell">Partner Portal</td>
          <td className="content-cell">
            <ul>
              <li>New Release Notes Published
                <div className='custom-checkbox'>
                  <label>
                    <input
                      type="checkbox"
                      checked={notificationPreferences.pp0001}
                      onChange={(e) => handleChange('pp0001', e.target.checked)}
                      disabled={!isEnabled}
                    />
                    <span></span>
                  </label>
                </div>
              </li>
              <li>Updates to Known Issues Article
                <div className='custom-checkbox'>
                  <label>
                    <input
                      type="checkbox"
                      checked={notificationPreferences.pp002}
                      onChange={(e) => handleChange('pp002', e.target.checked)}
                      disabled={!isEnabled}
                    />
                    <span></span>
                  </label>
                </div>
              </li>
              <li>Update to Upgrade Notes
                <div className='custom-checkbox'>
                  <label>
                    <input
                      type="checkbox"
                      checked={notificationPreferences.pp003}
                      onChange={(e) => handleChange('pp003', e.target.checked)}
                      disabled={!isEnabled}
                    />
                    <span></span>
                  </label>
                </div>
              </li>
            </ul>
          </td>
        </tr>
        {/* Service Announcements */}
        <tr>
          <td className="title-cell">Service Announcements</td>
          <td className="content-cell">
            <ul>
              <li>Outages or Services Interruptions
                <div className='custom-checkbox'>
                  <label>
                    <input
                      type="checkbox"
                      checked={notificationPreferences.sa001}
                      onChange={(e) => handleChange('sa001', e.target.checked)}
                      disabled={!isEnabled}
                    />
                    <span></span>
                  </label>
                </div>
              </li>
              <li>Feature Deprecation Notice
                <div className='custom-checkbox'>
                  <label>
                    <input
                      type="checkbox"
                      checked={notificationPreferences.sa002}
                      onChange={(e) => handleChange('sa002', e.target.checked)}
                      disabled={!isEnabled}
                    />
                    <span></span>
                  </label>
                </div>
              </li>
              <li>Security Incident
                <div className='custom-checkbox'>
                  <label>
                    <input
                      type="checkbox"
                      checked={notificationPreferences.sa003}
                      onChange={(e) => handleChange('sa003', e.target.checked)}
                      disabled={!isEnabled}
                    />
                    <span></span>
                  </label>
                </div>
              </li>
            </ul>
          </td>
        </tr>
        {/* Product News */}
        <tr>
          <td className="title-cell">Product News</td>
          <td className="content-cell">
            <ul>
              <li>New Release Announcements
                <div className='custom-checkbox'>
                  <label>
                    <input
                      type="checkbox"
                      checked={notificationPreferences.pn001}
                      onChange={(e) => handleChange('pn001', e.target.checked)}
                      disabled={!isEnabled}
                    />
                    <span></span>
                  </label>
                </div>
              </li>
              <li>Patch Release Announcements
                <div className='custom-checkbox'>
                  <label>
                    <input
                      type="checkbox"
                      checked={notificationPreferences.pn002}
                      onChange={(e) => handleChange('pn002', e.target.checked)}
                      disabled={!isEnabled}
                    />
                    <span></span>
                  </label>
                </div>
              </li>
            </ul>
          </td>
        </tr>
        {/* Company News */}
        <tr>
          <td className="title-cell">Company News</td>
          <td className="content-cell">
            <ul>
              <li>Survey Press Release
                <div className='custom-checkbox'>
                  <label>
                    <input
                      type="checkbox"
                      checked={notificationPreferences.cn001}
                      onChange={(e) => handleChange('cn001', e.target.checked)}
                      disabled={!isEnabled}
                    />
                    <span></span>
                  </label>
                </div>
              </li>
            </ul>
          </td>
        </tr>
      </table>
      <button onClick={handleSave}>Save Preferences</button>
    </Modal>
  );
};

export default NotificationModal;
