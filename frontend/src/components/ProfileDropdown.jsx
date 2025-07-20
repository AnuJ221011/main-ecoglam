const ProfileDropdown = ({ userData, handleLogout }) => (
  <div className="relative group">
    <div className="avatar cursor-pointer">
      <div className="w-10 h-10 rounded-full">
        <img
          src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740"
          alt="profile"
          className="w-full h-full rounded-full"
        />
      </div>
    </div>

    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="px-4 py-3 border-b border-gray-200">
        <p className="text-sm font-medium text-gray-900">{userData?.name}</p>
        <p className="text-sm text-gray-500 truncate">{userData?.email}</p>
      </div>
      <div className="py-1">
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Sign out
        </button>
      </div>
    </div>
  </div>
);

export default ProfileDropdown;
