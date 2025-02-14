// import Logo from "path/to/your/logo.png"; // <-- Uncomment and adjust path

import { Link } from "react-router-dom";
import Logo from "../../../assets/Images/FooterLogo.png"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <>

      <div className="bg-primary py-5 mt-4 grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img src={Logo} alt="Footer_Logo" className="h-[60%] " />
            </div>
            <div className="flex flex-col gap-2 text-neutral font-light text-sm">
              <div>
                <p>
                  Businesses like yours need more. To help you keep your
                  momentum Salon delivers two unique experiences - a tablet
                  solution for the front desk and a mobile solution for managing
                  appointments on the go.
                </p>
              </div>
              <div className="flex">
                <div className="flex flex-col gap-3">
                  {/* 1 */}
                  <Link to="#">About Us</Link>
                  <Link to="#">Pricing</Link>
                  <Link to="#"> Blog</Link>
                  <Link to="#">Contact Us</Link>
                </div>
                <div className="flex flex-col gap-3">
                  {/* 2 */}
                  <Link to="#">FAQ</Link>
                  <Link to="#">Privacy Policy</Link>
                  <Link to="#">Terms of Service</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
<div>
    <h1>Subscribe to our newsletter</h1>
</div>
<div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
<div>
    <div>
    <FaTwitter />
    </div>
    <div>
    <FaTwitter />
    </div>
    <div>
    <FaTwitter />
    </div>
</div>
          </div>
        </div>

        <div className=" border-b border-gray-400"></div>
        <div className="text-neutral font-light text-sm text-center">
          <p>© 2022 Salon Inc. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
