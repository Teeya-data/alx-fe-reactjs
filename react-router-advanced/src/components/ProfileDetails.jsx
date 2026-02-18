function ProfileDetails() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Details</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            JD
          </div>
          <div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Bio</h4>
          <p className="text-gray-600">
            Full-stack developer with a passion for React and modern web technologies.
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Location</h4>
          <p className="text-gray-600">San Francisco, CA</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;
