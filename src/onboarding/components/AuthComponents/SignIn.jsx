import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
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
          <CardContent className="space-y-4 mt-4">
            <div className="mt-8">
              <label className="block text-sm font-mulish text-gray-700">
                Email
              </label>
              <Input
                type="email"
                placeholder="Write your email address..."
                className="mt-3 bg-success shadow-none border-0 "
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
              />
              <a
                href="#"
                className="text-xs text-end block text-gray-500 hover:underline mt-3"
              >
                Forgot Password?
              </a>
            </div>
            <div className="w-full md:w-auto text-center">
              <Button
                onClick={() => navigate("/auth/forgot-password")}
                className="bg-secondary w-full md:w-auto px-10 py-5 animated-btn hover:bg-amber-500"
              >
                Sign In
              </Button>
            </div>
            <p className="text-center text-sm text-gray-700 ">
              Don’t have an account?{" "}
              <Link to={"/auth/signup"} className="text-secondary hover:underline">
                Sign Up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
