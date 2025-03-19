// React Icons (choose whichever icons you prefer)
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaUsers,
  FaUserCircle,
  FaList,
  FaPlusSquare,
} from "react-icons/fa";
import OnboardingHome from "./OnboardingHome";

// shadcn/ui Sheet components (copy them from https://ui.shadcn.com/docs/components/sheet)

function OnboardingLayout() {
  //   const location = useLocation();

  // Define your menu items here
  const menuItems = [
    { text: "Dashboard", icon: <FaTachometerAlt /> },
    { text: "Products", icon: <FaShoppingCart /> },
    { text: "Customers", icon: <FaUsers /> },
    { text: "Orders", icon: <FaList /> },
    {
      text: "Add Product",
      icon: <FaPlusSquare />,
    },
  ];

  return (
    <div className="flex h-screen overflow-x-hidden">
      <aside className="flex flex-col w-12 md:w-16 bg-primary text-white">
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col items-center">
            <div>
              <img src="/logo.png" alt="Logo" className="w-16 py-5 px-2" />
            </div>
            {menuItems.map((item) => {
              //   const isActive = location.pathname === item.path;
              return (
                <button
                  disabled
                  key={item.text}
                  className={`flex items-center justify-center w-full py-3 `}
                >
                  <span className="text-xl text-[#939393]">{item.icon}</span>
                  {/* {item.text} */}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Account link at the bottom */}
        <div className="flex flex-col items-center">
          <button
            disabled
            className={`flex items-center justify-center w-full py-3 `}
          >
            <FaUserCircle className="text-xl text-[#939393]" />
            {/* Account */}
          </button>
        </div>
      </aside>

      <div className="flex-1 overflow-x-hidden">
        <main className="flex flex-col bg-info py-7 md:py-10 px-3 md:px-8 overflow-y-auto max-w-full">
          {<OnboardingHome />}
        </main>
      </div>
    </div>
  );
}

export default OnboardingLayout;
