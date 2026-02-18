import { Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Profile</h1>
      
      {/* Navigation Tabs for Nested Routes */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="flex border-b">
          <Link
            to="/profile"
            end
            className="px-6 py-3 font-semibold text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
          >
            Profile Details
          </Link>
          <Link
            to="/profile/settings"
            className="px-6 py-3 font-semibold text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-600"
          >
            Settings
          </Link>
        </div>
        
        {/* Nested Routes Render Here */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;
