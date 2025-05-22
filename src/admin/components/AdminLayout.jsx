import { useState } from "react";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";

// React Icons (choose whichever icons you prefer)
import {
  FaBars,
  FaTachometerAlt,
  FaShoppingCart,
  FaUsers,
  FaUserCircle,
  FaList,
  FaPlusSquare,
} from "react-icons/fa";

// shadcn/ui Sheet components (copy them from https://ui.shadcn.com/docs/components/sheet)
import { SheetContent, Sheet } from "@/components/ui/sheet";
import Clients from "./DashboardComponents/Clients";
import Subscriptions from "./DashboardComponents/Subscriptions";
import DashboardNavbar from "./DashboardNavbar";
import UserProfilePage from "./DashboardComponents/UserProfilePage";
import BusinessInfo from "./DashboardComponents/BusinessInfo";

// Example pages
// import AdminDashboard from "./AdminDashboard";
// import Products from "./Products";
// import Orders from "./Orders";
// import Customers from "./Customers";
// import AddProduct from "./AddProduct";

function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Define your menu items here
  const menuItems = [
    { text: "Business Info", icon: <FaTachometerAlt />, path: "/dashboard/" },
    { text: "Clients", icon: <FaShoppingCart />, path: "/dashboard/clients" },
    {
      text: "Services",
      icon: <FaUsers />,
      path: "/dashboard/subscription",
    },
    {
      text: "Staff",
      icon: <FaList />,
      path: "/dashboard/purchase-services",
    },
    {
      text: "Appointments",
      icon: <FaPlusSquare />,
      path: "/dashboard/roles",
    },
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
        {/* <div className="flex flex-col items-center">
          <Link
            to="/admin/account"
            className={`flex items-center w-full py-3 hover:bg-[#2ba9db] ${
              location.pathname === "/admin/account" ? "bg-[#2ba9db]" : ""
            }`}
          >
            <FaUserCircle className="mr-2" />
            Account
          </Link>
        </div> */}
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
              <Link
                to="/admin/account"
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 hover:bg-[#2ba9db] ${
                  location.pathname === "/admin/account" ? "bg-[#2ba9db]" : ""
                }`}
              >
                <FaUserCircle className="mr-2" />
                Account
              </Link>
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
          <Route path="/" element={<BusinessInfo />} />
          <Route path="/:userId" element={<UserProfilePage />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/subscription" element={<Subscriptions />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products/create" element={<AddProduct />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default AdminLayout;
