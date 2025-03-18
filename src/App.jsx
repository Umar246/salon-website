import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerRoutes from "./Routes/CustomerRoutes";
import AuthRoutes from "./Routes/AuthRoutes";
import OnboardingRoutes from "./Routes/OnboardingRoutes";

function App() {
  return (
    <>
        <Routes>
          <Route path="/*" element={<CustomerRoutes />} />
          <Route path="/auth/*" element={<AuthRoutes/>} />
          <Route path="/onboarding/*" element={<OnboardingRoutes/>} />
        </Routes>
        </>
  );
}

export default App;
