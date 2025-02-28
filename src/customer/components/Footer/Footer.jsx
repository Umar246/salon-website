// import Logo from "path/to/your/logo.png"; // <-- Uncomment and adjust path

import { Link } from "react-router-dom";
import Logo from "../../../assets/Images/FooterLogo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className="bg-primary py-5 mt-4 grid grid-cols-1 gap-4 font-mulish">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] md:gap-[6rem] py-8 justify-between w-[95%] mx-auto">
            {/* Logo & Text Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 px-3 items-start">
              <div className="flex items-center justify-center">
                <img src={Logo} alt="Footer_Logo" className="h-[10rem]" />
              </div>
              <div className="flex flex-col gap-8 text-neutral  text-sm">
                <div>
                  <p className="text-justify">
                    Businesses like yours need more. To help you keep your
                    momentum Salon delivers two unique experiences - a tablet
                    solution for the front desk and a mobile solution for
                    managing appointments on the go.
                  </p>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col gap-3 text-sm">
                    {/* 1 */}
                    <Link to="/about">About Us</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/blog"> Blog</Link>
                    <Link to="/contact">Contact Us</Link>
                  </div>
                  <div className="flex flex-col gap-3 text-sm">
                    {/* 2 */}
                    <Link to="/faq">FAQ</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-of-service">Terms of Service</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Side */}
            <div className="flex flex-col items-center lg:items-end gap-8  px-3 md:px-[3.2rem]">
              <div className=" w-full">
                <h1 className="font-bold  text-2xl text-center lg:text-start text-neutral font-playfair">
                  Subscribe to our newsletter
                </h1>
              </div>
              <div className="flex w-full max-w-md items-center text-end space-x-2 md:space-x-4">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-neutral py-6 rounded-lg w-full"
                />
                <Button
                  type="submit"
                  className="animated-btn py-6 md:px-6 bg-secondary rounded-lg hover:bg-amber-600"
                >
                  Subscribe
                </Button>
              </div>
              <div className="flex gap-6 md:gap-8 lg:gap-3 justify-center  tems-center  me-2 ">
                <div className="bg-neutral animated-btn p-2 md:p-4 lg:p-2 flex rounded-full hover:bg-gray-200">
                  <RiInstagramFill size={18} />
                </div>
                <div className="bg-neutral animated-btn p-2 md:p-4 lg:p-2 flex rounded-full hover:bg-gray-200">
                  <FaFacebookF size={18} />
                </div>
                <div className="bg-neutral animated-btn p-2 md:p-4 lg:p-2 flex rounded-full hover:bg-gray-200">
                  <FaTwitter size={18} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className=" border-b border-gray-400"></div>

        <div className="text-neutral font-light text-sm text-center w-[95%] mx-auto">
          <p>© 2022 Salon Inc. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
