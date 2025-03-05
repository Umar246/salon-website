// import SignIn from "@/onboarding/components/AuthComponents/SignIn";
import Auth from "@/onboarding/pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";

export default function OnboardingRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth/>} />
      </Routes>
    </div>
  );
}
