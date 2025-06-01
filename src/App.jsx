import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerRoutes from "./Routes/CustomerRoutes";
import AuthRoutes from "./Routes/AuthRoutes";
import OnboardingRoutes from "./Routes/OnboardingRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import PrivateRoute from "./private/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route
          path="/onboarding/*"
          element={
            // <PrivateRoute>
              <OnboardingRoutes />
            // </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <AdminRoutes /> 
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
