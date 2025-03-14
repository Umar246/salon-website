import { supabase } from "@/config/supabaseClient";
import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      console.log('SESSION: ', session)
    };
    setData();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
        console.log('SUBSCRIPTION: ', subscription)
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
// export const useAuth = () => useContext(AuthContext);
