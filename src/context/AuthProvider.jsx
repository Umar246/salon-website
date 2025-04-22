import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { supabase } from "@/config/supabaseClient";
import { AuthContext } from "./AuthContext"; // 👈 path correct kar lena

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      console.log("SESSION: ", session);
    };
    setData();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("SUBSCRIPTION: ", subscription);
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ session }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
