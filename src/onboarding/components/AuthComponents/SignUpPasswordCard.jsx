import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Eye, EyeOff } from "lucide-react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

export default function SignUpPasswordCard({ next, prev }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);
  return (
    <>
      <h2 className="text-center text-2xl font-semibold text-primary">
        Sign Up
      </h2>
      <p className="text-center text-sm font-mulish mt-3 text-[#939393]">
        About you and your business
      </p>
      <CardContent className="space-y-4 mt-12">
        <div className="pb-2">
          <label className="block text-sm font-mulish text-gray-700">
            Password
          </label>
          <div className="relative w-full max-w-md mx-auto mt-3">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password.."
              className="w-full pr-12 bg-success border-0 py-4 md:py-6 shadow-none focus:!ring-1 focus:!ring-secondary" // padding-right for the button
            />
            <Button
              variant="ghost"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
            >
              {showPassword ? (
                <FiEyeOff
                  className="text-[#939393] !h-4 !w-4 md:!h-5 md:!w-5"
                  size={20}
                />
              ) : (
                <FiEye
                  className="text-[#939393] !h-4 !w-4 md:!h-5 md:!w-5"
                  size={20}
                />
              )}
            </Button>
          </div>
        </div>
        <div className="-mb-14">
          <label className="block text-sm font-mulish text-gray-700">
            Confirm Password
          </label>

          <div className="relative  w-full max-w-md mx-auto mt-3">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Password.."
              className="w-full pr-12 bg-success  py-4 md:py-6 border-0 shadow-none flex focus:!ring-1 focus:!ring-secondary" // padding-right for the button
            />
            <Button
              variant="ghost"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
            >
              {showConfirmPassword ? (
                <FiEyeOff
                  className="text-[#939393] !h-4 !w-4 md:!h-5 md:!w-5"
                  size={20}
                />
              ) : (
                <FiEye
                  className="text-[#939393] !h-4 !w-4 md:!h-5 md:!w-5 "
                  size={20}
                />
              )}
            </Button>
          </div>
        </div>
      </CardContent>

      <div className="flex justify-between mt-24">
        <Button
          className={cn("px-8 md:px-12 py-5 text-[#939393] text-base font-mulish")}
          variant="outline"
          onClick={prev}
        >
          Back
        </Button>
        <Button
          className={cn(
            "px-8 md:px-12 py-5  bg-secondary hover:bg-amber-600 text-base font-mulish"
          )}
          onClick={next}
        >
          Next
          {/* {step === 1 && "Next"}
                      {step === 2 && "Next"}
                      {step === 3 && "Next"}
                      {step === 4 && "Confirm"} */}
        </Button>
      </div>
    </>
  );
}

SignUpPasswordCard.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
};
