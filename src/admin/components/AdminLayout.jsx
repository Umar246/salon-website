
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
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
  Sheet,
} from "@/components/ui/sheet";

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
    { text: "Dashboard", icon: <FaTachometerAlt />, path: "/admin/" },
    { text: "Products", icon: <FaShoppingCart />, path: "/admin/products" },
    { text: "Customers", icon: <FaUsers />, path: "/admin/customers" },
    { text: "Orders", icon: <FaList />, path: "/admin/orders" },
    {
      text: "Add Product",
      icon: <FaPlusSquare />,
      path: "/admin/products/create",
    },
  ];

  const handleToggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* ===== Desktop Sidebar ===== */}
      <aside className="hidden md:flex flex-col w-16 bg-primary text-white">
        {/* Scrollable area for menu */}
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col items-center">
        <div>
            <img src="/logo.png" alt="Logo" className="w-16 py-5 px-2" />
        </div>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.text}
                  to={item.path}
                  className={`flex items-center justify-center w-full py-3 hover:bg-[#2ba9db] ${
                    isActive ? "bg-[#2ba9db]" : ""
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {/* {item.text} */}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Account link at the bottom */}
        <div className="flex flex-col items-center">
          <Link
            to="/admin/account"
            className={`flex items-center justify-center w-full py-3 hover:bg-[#2ba9db] ${
              location.pathname === "/admin/account" ? "bg-[#2ba9db]" : ""
            }`}
          >
            <FaUserCircle className="mr-2" />
            {/* Account */}
          </Link>
        </div>
      </aside>

      {/* ===== Mobile Top Bar (shown on small screens) ===== */}
      <header className="md:hidden flex items-center bg-[#01518C] text-white w-full p-4">
        <button onClick={handleToggleSidebar}>
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl">Admin Panel</h1>
      </header>

      {/* ===== Mobile Sidebar via shadcn/ui Sheet ===== */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="p-0 bg-[#01518C] text-white">
          <SheetHeader className="p-4 border-b border-white">
            <SheetTitle>Admin Panel</SheetTitle>
            <SheetDescription>Navigation</SheetDescription>
            <SheetClose className="absolute right-4 top-4" />
          </SheetHeader>

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
                    className={`flex items-center px-4 py-3 hover:bg-[#2ba9db] ${
                      isActive ? "bg-[#2ba9db]" : ""
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
      <main className="flex-1 flex flex-col bg-[#edeee9] p-4 overflow-y-auto">
        {/* Renders the nested route content (from react-router-dom) */}
        <Outlet />

        {/* Define your routes here if you want them in the same file */}
        <Routes>
          <Route path="/" element={<div>Home of onboarding</div>} />
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
