import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { useState } from "react";
import { supabase } from "@/config/supabaseClient";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/forgot-password?step-2`,
      });
      if (error) throw error;
      setEmailSent(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-center text-2xl font-semibold text-primary">
        Forgot Password
      </h2>
      {!emailSent ? (
        <>
          <CardContent className="space-y-4 mt-8">
            <div className="pb-12">
              <label className="block text-sm font-mulish text-gray-700">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Write your email address..."
                className="py-4 md:py-6 mt-3 bg-success shadow-none border-0 focus:!ring-1 focus:!ring-secondary"
              />
            </div>
          </CardContent>
          <div className="flex justify-between mt-24">
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className={cn(
                "px-8 md:px-12 py-5 ms-auto bg-secondary hover:bg-amber-600 text-base font-mulish"
              )}
            >
              {loading ? "Sending..." : "Next"}
            </Button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </>
      ) : (
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            We&apos;ve sent password reset instructions to{" "}
            <span className="font-semibold">{email}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Check your spam folder if you don&apos;t see the email.
          </p>
        </div>
      )}

      {/* <CardContent className="space-y-4 mt-8">
        <div className="pb-12">
          <label className="block text-sm font-mulish text-gray-700">
            Email
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Write your email address..."
            className="mt-3 bg-success shadow-none border-0 "
          />
        </div>
      </CardContent>
      <div className="flex justify-between mt-24">
        <Button
          onClick={handleSubmit}
          disabled={loading}
          className={cn(
            "px-8 md:px-12 py-5 ms-auto bg-secondary hover:bg-amber-600 text-base font-mulish"
          )}
        >
          {loading ? "Sending..." : "Next"}
        </Button>
        {error && <p className="text-red-500">{error}</p>}
      </div> */}
      {/* Forgot Password */}
    </>
  );
}

ForgotPassword.propTypes = {
  next: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
};
