import { useState } from "react";
import Logo from "../../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { RiMenu2Fill, RiMenu3Fill } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import useAuth from "@/context/useAuth";
import { supabase } from "@/config/supabaseClient";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { session } = useAuth();
  const isAuth = session?.user?.email ? true : false;
  console.log("session in navbar", session);


  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
    } else {
      console.log("Logged out successfully");
    }
  };
  

  return (
    <nav className="bg-primary text-neutral font-mulish">
      <div className="w-[95%] mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="hidden lg:grid grid-cols-2 items-center py-4">
          {/* Left container: Logo + Links */}
          <div className="flex items-center gap-5">
            <div>
              <Link to="/">
                <img src={Logo} alt="Logo" className="h-16" />
              </Link>
            </div>
            {/* Minimal space between logo and links */}
            <div className="flex space-x-10 ml-4">
              <Link
                to="/"
                className="animated-btn hover:text-secondary text-sm font-light active:text-secondary"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-secondary animated-btn  text-sm  font-light active:text-secondary"
              >
                About us
              </Link>
              <Link
                to="/pricing"
                className="hover:text-secondary animated-btn  text-sm  font-light active:text-secondary"
              >
                Pricing
              </Link>
              <Link
                to="/blog"
                className="hover:text-secondary animated-btn  text-sm  font-light active:text-secondary"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="hover:text-secondary animated-btn  text-sm  font-light active:text-secondary"
              >
                Contact us
              </Link>
              <Link
                to="/faq"
                className="hover:text-secondary animated-btn text-sm  font-light  active:text-secondary"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Right container: Buttons */}
          <div className="flex justify-end space-x-5">
            {isAuth ? (
              <>
                <Link
                  to="/dashboard"
                  className="animated-btn bg-secondary hover:bg-amber-600 text-white font-light px-5 py-1.5 rounded-md"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="animated-btn outline-2 outline-red-700 hover:bg-red-700 text-white font-light px-5 py-1.5 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth/signup"
                  className="flex items-center animated-btn gap-2 bg-transparent text-neutral font-light px-3 py-1 rounded hover:text-secondary"
                >
                  <FiUser size={20} /> Sign up as customer
                </Link>
                <Link
                  to="/auth/"
                  className="animated-btn bg-neutral font-light text-secondary px-6 py-1.5 rounded-md hover:bg-gray-300"
                >
                  Login
                </Link>
                <button className="animated-btn bg-secondary hover:bg-yellow-600 text-neutral font-light px-5 py-1.5 rounded-md">
                  Start Free trial
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden justify-between items-center px-4 py-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-16" />
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <RiMenu3Fill className="animated-btn" size={32} />
          ) : (
            <RiMenu2Fill className="animated-btn" size={32} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-primary text-neutral px-4 py-3">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className="hover:text-secondary animated-btn active:text-secondary"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-secondary animated-btn active:text-secondary"
            >
              About us
            </Link>
            <Link
              to="/pricing"
              className="hover:text-secondary animated-btn active:text-secondary"
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="hover:text-secondary animated-btn active:text-secondary"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="hover:text-secondary animated-btn active:text-secondary"
            >
              Contact us
            </Link>
            <Link
              to="/faq"
              className="hover:text-secondary animated-btn active:text-secondary"
            >
              FAQ
            </Link>
          </div>
          <div className="flex flex-col space-y-3 mt-5 mb-2">
            {isAuth ? (
              <>
                <Link
                  to="/admin"
                  className="bg-secondary hover:bg-amber-600 text-white animated-btn px-3 py-2 rounded-md text-center"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="outline outline-red-700 hover:bg-red-700 text-white animated-btn px-3 py-2 rounded-md text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth/signup"
                  className="flex items-center justify-center gap-2 bg-transparent text-neutral px-3 py-1 rounded hover:text-secondary"
                >
                  <FiUser size={20} /> Sign up as a customer
                </Link>
                <Link
                  to="/auth/"
                  className="bg-neutral text-secondary px-3 py-2 rounded-md hover:bg-gray-300 text-center"
                >
                  Login
                </Link>
                <button className="bg-secondary animated-btn text-primary px-3 py-2 rounded-md">
                  Start Free trial
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
