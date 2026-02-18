import { useState } from 'react';

function ProfileSettings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: false,
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Settings</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
          <div>
            <h4 className="font-semibold">Push Notifications</h4>
            <p className="text-sm text-gray-600">Receive push notifications</p>
          </div>
          <button
            onClick={() => handleToggle('notifications')}
            className={`w-12 h-6 rounded-full transition-colors ${
              settings.notifications ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.notifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
          <div>
            <h4 className="font-semibold">Email Updates</h4>
            <p className="text-sm text-gray-600">Receive email notifications</p>
          </div>
          <button
            onClick={() => handleToggle('emailUpdates')}
            className={`w-12 h-6 rounded-full transition-colors ${
              settings.emailUpdates ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.emailUpdates ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
          <div>
            <h4 className="font-semibold">Dark Mode</h4>
            <p className="text-sm text-gray-600">Enable dark theme</p>
          </div>
          <button
            onClick={() => handleToggle('darkMode')}
            className={`w-12 h-6 rounded-full transition-colors ${
              settings.darkMode ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full transition-transform ${
                settings.darkMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
