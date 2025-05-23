import useAuth from "@/context/useAuth";
import PropTypes from "prop-types";

export default function DashboardNavbar() {
    const { session } = useAuth();
    const bussinessName = session?.user?.user_metadata?.business_name
    const userName = session?.user?.user_metadata?.user_name

    const firstLetter = userName?.charAt(0).toUpperCase();
  return (
    <nav className="w-full bg-white shadow-sm px-4 md:px-6 py-3 font-mulish flex justify-between items-center">
      {/* Left side: Tab Name */}
      <h2 className="text-2xl font-mulish font-bold text-primary">{bussinessName}</h2>

      {/* Right side: Admin Info */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-semibold text-gray-700 font-mulish">{userName}</p>
          <p className="text-xs text-secondary font-mulish">Logged in</p>
        </div>

        {/* Avatar circle with first letter */}
        <div className="font-mulish w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-lg">
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