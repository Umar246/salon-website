import AdminDashboard from "@/admin/pages/AdminDashboard";
import { Route, Routes } from "react-router-dom";

export default function OnboardingRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminDashboard/>} />
      </Routes>
    </div>
  );
}
