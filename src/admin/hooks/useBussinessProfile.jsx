// src/hooks/useFullUserList.js
import { supabase } from "@/config/supabaseClient";
import useAuth from "@/context/useAuth";
import { useState, useEffect } from "react";

export function useBussinessProfile() {
  const { session } = useAuth();
  const userId = session?.user?.id;
  console.log("userId", userId);

  const [userProfile, setUserProfile] = useState([]);
  console.log("userProfile", userProfile);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return; // Agar user logged-in nahi to exit

    setLoadingProfile(true);

    // Query onboarding_profiles, joining in the auth.users row
    supabase
      .from("onboarding_profiles")
      .select(`*`)
      .eq("user_id", userId)
      .then(({ data, error }) => {
        if (error) {
          console.error("Error fetching users + profiles:", error);
          setError(error);
          return;
        }

        setUserProfile(data);
      })
      .finally(() => setLoadingProfile(false));
  }, []);

  return { userProfile, loadingProfile, error };
}
