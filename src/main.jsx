import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import AuthProvider from "./context/AuthProvider";
// import { AuthProvider } from "./context/";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {/* ✅ Moved outside ToastContainer */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Bounce}
          // toastClassName={(toastProps) =>
          //   toastProps.type === "success"
          //     ? "my-custom-success-toast"
          //     : "my-default-toast"
          // }
          bodyClassName="font-mulish"
        />

        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
