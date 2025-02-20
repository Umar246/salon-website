import { Route, Routes } from "react-router-dom";
import Navbar from "@/customer/components/Navbar/Navbar";
import Footer from "@/customer/components/Footer/Footer";
import Home from "@/customer/pages/Home/Home";

export default function CustomerRoutes() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}
