import { Route, Routes } from "react-router-dom";
import Navbar from "@/customer/components/Navbar/Navbar";
import Footer from "@/customer/components/Footer/Footer";
import Home from "@/customer/pages/Home/Home";
import Pricing from "@/customer/pages/Pricing/Pricing";
import AboutUs from "@/customer/pages/AboutUs/AboutUs";
import Blog from "@/customer/pages/Blog/Blog";

export default function CustomerRoutes() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/:id" element={<Blog/>} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}
