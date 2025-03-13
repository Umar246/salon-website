import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/config/supabaseClient";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      console.log("data", data);
      console.log("sign in successfull");
      navigate("/dashboard");
    }
  };
  return (
    <div className="bg-info min-h-screen flex flex-col justify-center">
      <div className="px-5 pt-5 pb-10 md:pb-0">
        <img src="/logo.png" alt="Logo" className="h-18" />
      </div>
      <div className="flex items-center justify-center h-full">
        <Card className="w-full mx-2.5 max-w-sm md:max-w-lg px-2 md:px-6 py-10 mb-8 shadow-none rounded-md  md:rounded-2xl">
          <h2 className="text-center text-2xl font-semibold text-primary">
            Sign In
          </h2>
          <form onSubmit={handleSignIn}>
            <CardContent className="space-y-4 mt-4">
              <div className="mt-8">
                <label className="block text-sm font-mulish text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Write your email address..."
                  className="mt-3 bg-success shadow-none border-0 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="pb-12 mt-6">
                <label className="block text-sm font-mulish text-gray-700">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Password"
                  className="mt-3  bg-success shadow-none border-0"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Link
                  to={"/auth/forgot-password"}
                  className="text-xs text-end block text-gray-500 hover:underline mt-3"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="w-full md:w-auto text-center">
                <Button
                  type="submit"
                  className="bg-secondary w-full md:w-auto px-10 py-5 animated-btn hover:bg-amber-500"
                >
                  Sign In
                </Button>
              </div>
              <p className="text-center text-sm text-gray-700 ">
                Don’t have an account?{" "}
                <Link
                  to={"/auth/signup"}
                  className="text-secondary hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
  );
}
