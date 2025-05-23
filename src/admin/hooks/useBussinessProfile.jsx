// src/hooks/useFullUserList.js
import { supabase } from "@/config/supabaseClient";
import useAuth from "@/context/useAuth";
import { useState, useEffect, useCallback } from "react";

export function useBusinessProfile() {
  const { session } = useAuth();
  const userId = session?.user?.id;

  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = useCallback(async () => {
    if (!userId) return;
    setLoadingProfile(true);
    const { data, error } = await supabase
      .from("onboarding_profiles")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error) {
      setError(error);
    } else {
      setProfile(data);
    }
    setLoadingProfile(false);
  }, [userId]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return { profile, loadingProfile, error, refetchProfile: fetchProfile };
}
