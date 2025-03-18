import Onboarding from "@/onboarding/pages/Onboarding/Onboarding";
import { Route, Routes } from "react-router-dom";

export default function OnboardingRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Onboarding />} />
      </Routes>
    </div>
  );
}
