import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './NotificationModal.css';
import toast from 'react-hot-toast';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


const NotificationModal = ({ isOpen, onClose, notificationStatus, userEmail }) => {

  const { siteConfig } = useDocusaurusContext();
  const { apiUrlNotificationPost, apiUrlNotificationResult, apiKey } = siteConfig.customFields;

  const initialState = {
    pp001: false,
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

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const resetPreferences = () => {
      setNotificationPreferences(initialState);
      setIsEnabled(true); 
    };
  
    const fetchData = async () => {
      resetPreferences(); 
      setIsLoading(true);
  
      const apiURL = apiUrlNotificationResult;
      const data = {
        logic: [
          {
            filters: [
              {
                operator: "AND",
                expressions: [
                  {
                    questionid: "5G7NcDu9J",
                    questionType: "TEXT_LABEL",
                    validationType: "EQUAL",
                    value: [userEmail]
                  }
                ]
              }
            ]
          }
        ],
        skip: 0,
        take: 50,
        expanded: false,
        select: [
          {
            questionid: "5G7NcDu9J",
            questionType: "TEXT_LABEL"
          },
          {
            questionid: "5i2wcfPxL",
            questionType: "TEXT_LABEL"
          }
        ]
      };
  
      try {
        const response = await fetch(apiURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
          },
          body: JSON.stringify(data)
        });
  
        if (!response.ok) throw new Error('Network response was not ok.');
  
        const json = await response.json();
        if (json.items && json.items.data && json.items.data[0] && json.items.data[0].length > 1) {
          const notificationConfigString = json.items.data[0][1];
          const notificationConfigObject = processNotificationConfig(notificationConfigString);
          setNotificationPreferences(notificationConfigObject);
          setIsEnabled(true);
        } else {
          setIsEnabled(false);
        }
      } catch (error) {
        console.error('Error fetching notification configuration:', error);
        setIsEnabled(false); 
      }
      setIsLoading(false);
    };
  
    fetchData();
  }, [userEmail]); 
  

  const processNotificationConfig = (configString) => {
    const configArray = configString.split("##").filter(Boolean).map(item => item.replace(/#/g, ''));
    const configObject = configArray.reduce((acc, cur) => {
      acc[cur] = true;
      return acc;
    }, {});
    return configObject;
  };

  const handleGlobalToggleChange = (e) => {
    setIsEnabled(e.target.checked);
    if (!e.target.checked) {
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

  const handleSave = async () => {
    if (isEnabled && !Object.values(notificationPreferences).includes(true)) {
      toast.error("Please select at least one notification preference before saving.");
      return;
    }

    setIsLoading(true); 

    const apiURL = apiUrlNotificationPost;
    const notificationConfig = Object.keys(notificationPreferences).filter(key => notificationPreferences[key]).map(key => `#${key}#`).join("");
    const dataToSend = {
      datasetId: "ptokaq6lz",
      data: [
        {
          email: userEmail, 
          notificationConfig: notificationConfig,
          frecuency: "INSTANT" 
        }
      ]
    };
  
    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        },
        body: JSON.stringify(dataToSend)
      });
  
      if (!response.ok) throw new Error('Network response was not ok.');
  
      const responseData = await response.json();
      console.log('Success:', responseData);
      toast.success('Preferences saved successfully!');
      onClose();
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to save preferences.');
    }
    setIsLoading(false);
};

  

  return (
    <Modal className='NotificationModal' style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 9999
      },
      content: {
        color: 'black',
        height: 'max-content',
        maxHeight: '90vh',
        backgroundColor: 'white',
        width: '640px',
        maxWidth: '45%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '30px',
        borderRadius: '20px',
      }
    }} isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
      {isLoading ? (
      <div className="loader" style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '20px'}}></div>
    ) : (
      <div className='NotificationModal'>
        <a onClick={onClose} style={{float: 'right', cursor: 'pointer', background: 'none', border: 'none', fontSize: '1.8rem', color: '#C0C0C0', position: 'absolute', right: '30px', top: '25px'}}>
        &times;
      </a>
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
      <tbody>
        <tr>
          <td className="title-cell">Partner Portal</td>
          <td className="content-cell">
            <ul>
              <li>New Release Notes Published
                <div className='custom-checkbox'>
                  <label>
                    <input
                      type="checkbox"
                      checked={notificationPreferences.pp001}
                      onChange={(e) => handleChange('pp001', e.target.checked)}
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
        </tbody>
      </table>
      <button onClick={handleSave}>Save Preferences</button>
      </div>
      )}
    </Modal>
  );
};

export default NotificationModal;
