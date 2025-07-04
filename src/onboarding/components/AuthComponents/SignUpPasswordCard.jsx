import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Eye, EyeOff } from "lucide-react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

export default function SignUpPasswordCard({
  next,
  prev,
  handleChange,
  formData,
  loading,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () =>
    setShowPassword((previous) => !previous);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((previous) => !previous);
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password.."
              className="w-full pr-12 bg-success border-0 py-4 md:py-6 shadow-none focus:!ring-1 focus:!ring-secondary" // padding-right for the button
            />
            <Button
              variant="ghost"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
            >
              {showPassword ? (
                <FiEye
                  className="text-[#939393] !h-4 !w-4 md:!h-5 md:!w-5"
                  size={20}
                />
              ) : (
                <FiEyeOff
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
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Password.."
              className="w-full pr-12 bg-success  py-4 md:py-6 border-0 shadow-none flex focus:!ring-1 focus:!ring-secondary" // padding-right for the button
            />
            <Button
              variant="ghost"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
            >
              {showConfirmPassword ? (
                <FiEye
                  className="text-[#939393] !h-4 !w-4 md:!h-5 md:!w-5"
                  size={20}
                />
              ) : (
                <FiEyeOff
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
          className={cn(
            "px-8 md:px-12 py-5 text-[#939393] text-base font-mulish"
          )}
          variant="outline"
          onClick={prev}
        >
          Back
        </Button>
        <Button
          disabled={loading}
          className={cn(
            "px-8 md:px-12 py-5  bg-secondary hover:bg-amber-600 text-base font-mulish"
          )}
          onClick={next}
        >
          {loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Submit"
          )}

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
  // checkPassword: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};
