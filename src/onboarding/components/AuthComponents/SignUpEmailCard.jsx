import { Input } from "@/components/ui/input";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function SignUpEmailCard() {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="text-center text-2xl font-semibold text-primary">
        Sign Up
      </h2>
      <p className="text-center text-sm font-mulish mt-3 text-[#939393]">
        What is your email Address?
      </p>
      <CardContent className="space-y-4 mt-8">
        <div className="pb-12">
          <label className="block text-sm font-mulish text-gray-700">
            Email
          </label>
          <Input
            type="email"
            placeholder="Write your email address..."
            className="mt-3 bg-success shadow-none h-10 md:h-12  border-0 focus:!ring-1 focus:!ring-secondary"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between mt-24">
        <Button
          className={cn(
            "px-8 md:px-12 py-5 ms-auto bg-secondary hover:bg-amber-600 text-base font-mulish"
          )}
          onClick={() => navigate("/auth/signup/email-verify")}
        >
          Next
          {/* {step === 1 && "Next"}
            {step === 2 && "Next"}
            {step === 3 && "Next"}
            {step === 4 && "Confirm"} */}
        </Button>
      </CardFooter>
    </>
  );
}

SignUpEmailCard.propTypes = {
  next: PropTypes.func.isRequired,
};
