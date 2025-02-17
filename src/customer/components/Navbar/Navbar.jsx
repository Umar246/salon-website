import { useState } from "react";
import Logo from "../../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { RiMenu2Fill, RiMenu3Fill } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-neutral">
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
              <a
                href="#home"
                className="hover:text-secondary font-light active:text-secondary"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-secondary font-light active:text-secondary"
              >
                About us
              </a>
              <a
                href="#pricing"
                className="hover:text-secondary font-light active:text-secondary"
              >
                Pricing
              </a>
              <a
                href="#blog"
                className="hover:text-secondary font-light active:text-secondary"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="hover:text-secondary font-light active:text-secondary"
              >
                Contact us
              </a>
              <a
                href="#faq"
                className="hover:text-secondary font-light  active:text-secondary"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Right container: Buttons */}
          <div className="flex justify-end space-x-5">
            {/* <div className="flex items-center "> */}
            <Link
              to={"#"}
              className="flex items-center gap-2 bg-transparent text-neutral font-light px-3 py-1 rounded hover:text-secondary"
            >
              <span className="font-light">
                <FiUser className="font-light" size={20} />
              </span>
              Sign up as customer
            </Link>
            {/* </div> */}
            <button className="bg-neutral  font-light  text-secondary px-6 py-1.5 rounded-md hover:bg-gray-100">
              Login
            </button>
            <button className="bg-secondary hover:bg-yellow-600 text-neutral font-light px-5 py-1.5 rounded-md">
              Start Free trial
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden justify-between items-center px-4 py-4">
       <Link to="/">
        <img src={Logo} alt="Logo" className="h-16" />
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RiMenu3Fill size={32} /> : <RiMenu2Fill size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-primary text-neutral px-4 py-3">
          <div className="flex flex-col space-y-2">
            <a
              href="#home"
              className="hover:text-secondary active:text-secondary"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-secondary active:text-secondary"
            >
              About us
            </a>
            <a
              href="#pricing"
              className="hover:text-secondary active:text-secondary"
            >
              Pricing
            </a>
            <a
              href="#blog"
              className="hover:text-secondary active:text-secondary"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="hover:text-secondary active:text-secondary"
            >
              Contact us
            </a>
            <a
              href="#faq"
              className="hover:text-secondary active:text-secondary"
            >
              FAQ
            </a>
          </div>
          <div className="flex flex-col space-y-3 mt-5 mb-2">
            <Link
              to="#"
              className="flex items-center gap-2 justify-center bg-transparent  text-neutral px-3 py-1 rounded hover:text-secondary"
            >
              <span className="font-light">
                <FiUser className="font-light" size={20} />
              </span>
              Sign up as a customer
            </Link>
            <button className="bg-neutral text-secondary px-3 py-2 rounded-md hover:bg-gray-100">
              Login
            </button>
            <button className="bg-secondary text-primary px-3 py-2 rounded-md">
              Start Free trial
            </button>
          </div>
        </div>  
      )}
    </nav>
  );
};

export default Navbar;
