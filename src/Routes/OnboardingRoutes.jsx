// import SignIn from "@/onboarding/components/AuthComponents/SignIn";
import ForgotPasswordMultiStep from "@/onboarding/components/AuthComponents/ForgotPasswordMultiStep";
// import ResetPassword from "@/onboarding/components/AuthComponents/ResetPassword";
import SignUpEmailOTPSteps from "@/onboarding/components/AuthComponents/SignUpEmailOTPSteps";
import SignUpPhoneOTPSteps from "@/onboarding/components/AuthComponents/SignUpPhoneOTPSteps";
import SignUpSteps from "@/onboarding/components/AuthComponents/SignUpSteps";
import Auth from "@/onboarding/pages/Auth/Auth";
import { Route, Routes } from "react-router-dom";

export default function OnboardingRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/forgot-password" element={<ForgotPasswordMultiStep/>} />
        <Route path="/signup" element={<SignUpSteps/>} />
        <Route path="/signup/email-verify" element={<SignUpEmailOTPSteps/>} />
        <Route path="/signup/phone-verify" element={<SignUpPhoneOTPSteps/>} />
        {/* <Route path="/signin/forgot-password/reset-password" element={<ResetPassword/>} / */}
      </Routes>
    </div>
  );
}
