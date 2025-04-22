import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { supabase } from "@/config/supabaseClient";
// import { supabase } from "@/lib/supabaseClient"; // make sure path sahi ho

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading, true/false = result

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkSession();
  }, []);

  if (isAuthenticated === null) {
    // Optional: Loading spinner laga do yahan
    return <div className="text-center p-5">Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/auth" replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
