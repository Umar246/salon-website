import { useState } from "react";
import {
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

// React Icons (choose whichever icons you prefer)
import { FaBars, FaRegCalendarCheck } from "react-icons/fa";

// shadcn/ui Sheet components (copy them from https://ui.shadcn.com/docs/components/sheet)
import { SheetContent, Sheet } from "@/components/ui/sheet";
import Clients from "./DashboardComponents/Clients";
// import Subscriptions from "./DashboardComponents/Subscriptions";
import DashboardNavbar from "./DashboardNavbar";
// import UserProfilePage from "./DashboardComponents/UserProfilePage";
import BusinessInfo from "./DashboardComponents/BusinessInfo";
import Services from "./DashboardComponents/Services";
import Staff from "./DashboardComponents/Staff";
import Appointments from "./DashboardComponents/Appointments";
import { HiUsers } from "react-icons/hi2";
import { MdBusinessCenter, MdPeopleOutline } from "react-icons/md";
import { BsScissors } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { supabase } from "@/config/supabaseClient";
import { toast } from "react-toastify";

// Example pages
// import AdminDashboard from "./AdminDashboard";
// import Products from "./Products";
// import Orders from "./Orders";
// import Customers from "./Customers";
// import AddProduct from "./AddProduct";

function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Define your menu items here
  const menuItems = [
    {
      text: "Appointments",
      icon: <FaRegCalendarCheck />,
      path: "/dashboard/",
    },
    {
      text: "Services",
      icon: <BsScissors />,
      path: "/dashboard/services",
    },
    { text: "Clients", icon: <HiUsers />, path: "/dashboard/clients" },
     {
      text: "Staff",
      icon: <MdPeopleOutline />,
      path: "/dashboard/staff",
    },
    { text: "Business Info", icon: <MdBusinessCenter />, path: "/dashboard/business-info" },

   

    // {
    //   text: "Settings",
    //   icon: <FaPlusSquare />,
    //   path: "/dashboard/settings",
    // },
    // {
    //   text: "User Reports",
    //   icon: <FaPlusSquare />,
    //   path: "/dashboard/user-reports",
    // },
    // {
    //   text: "Categories",
    //   icon: <FaPlusSquare />,
    //   path: "/dashboard/categories",
    // },
  ];

  const handleToggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      console.log("Logged out successfully");
      // Redirect to login page or show a success message
      navigate("/auth");
      toast.success("Logged out successfully");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen font-mulish">
      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden md:flex flex-col w-54 bg-primary text-white">
        {/* Scrollable area for menu */}
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col items-center">
            <div>
              <img src="/logo.png" alt="Logo" className="w-26 pt-3 pb-7 px-2" />
            </div>
            <div className="flex flex-col w-full">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.text}
                    to={item.path}
                    className={`flex w-full py-3 ps-4 font-light hover:bg-[#242424] opacity-[90%] ${
                      isActive ? "bg-[#242424] opacity-[90%]" : ""
                    }`}
                  >
                    <span className="mr-2 flex items-center gap-3">
                      {item.icon}
                      {item.text}
                    </span>
                    {/* {item.text} */}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Account link at the bottom */}
        <div className="flex flex-col w-full">
          <Button
            onClick={handleLogout}
            className={`flex items-center w-full py-5 ps-4 font-light bg-red-700 hover:bg-red-800 rounded-none  opacity-[90%] `}
          >
            <FiLogOut className="mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* ===== Mobile Top Bar (shown on small screens) ===== */}
      <header className="md:hidden flex items-center bg-primary text-white w-full p-4">
        <button onClick={handleToggleSidebar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl">Admin Panel</h1>
      </header>

      {/* ===== Mobile Sidebar via shadcn/ui Sheet ===== */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="left"
          className="p-0 bg-primary text-white border-0"
        >
          <div className="text-center w-full">
            <img src="/logo.png" alt="Logo" className="w-26 py-3 px-2" />
          </div>

          <div className="flex flex-col h-full">
            {/* Menu items */}
            <nav className="flex-1 overflow-y-auto">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.text}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3 hover:bg-[#242424] opacity-[90%] ${
                      isActive ? "bg-[#242424] opacity-[90%]" : ""
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.text}
                  </Link>
                );
              })}
            </nav>

            {/* Account link */}
            <div>
              <Button
                onClick={handleLogout}
                className={`flex items-center w-full py-5 ps-4 font-light bg-red-700 hover:bg-red-800 rounded-none  opacity-[90%] `}
              >
                <FiLogOut className="mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* ===== Main Content Area ===== */}
      <main className="flex-1 flex flex-col bg-info  overflow-y-auto">
        {/* Renders the nested route content (from react-router-dom) */}
        <Outlet />

        {/* Define your routes here if you want them in the same file */}
        <DashboardNavbar />
        <Routes>
          <Route path="/business-info" element={<BusinessInfo />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/" element={<Appointments />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminLayout;
