import PropTypes from "prop-types";

export default function DashboardNavbar({ tabName = "Dashboard", userName = "Admin" }) {
    const firstLetter = userName?.charAt(0).toUpperCase();
  return (
    <nav className="w-full bg-white shadow-sm px-4 md:px-6 py-3 flex justify-between items-center">
      {/* Left side: Tab Name */}
      <h2 className="text-lg font-semibold text-gray-800">{tabName}</h2>

      {/* Right side: Admin Info */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-semibold text-gray-700">{userName}</p>
          <p className="text-xs text-gray-500">Logged in</p>
        </div>

        {/* Avatar circle with first letter */}
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-lg">
          {firstLetter}
        </div>
      </div>
    </nav>
  );
}


// ✅ Define PropTypes
DashboardNavbar.propTypes = {
  tabName: PropTypes.string,
  userName: PropTypes.string,
};