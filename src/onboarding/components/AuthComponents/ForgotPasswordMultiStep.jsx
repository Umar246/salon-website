import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ForgotPassword from "./ForgotPassword";
import EmailOTP from "./EmailOTP";
import Congratulations from "./Congratulations";

const ForgotPasswordMultiStep = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => (prev < 3 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));
  const goToStep = (stepNumber) => setStep(stepNumber);

  return (
    <>
      <div className="bg-info min-h-screen flex flex-col justify-center">
        <div className="px-5 pt-5 pb-10 md:pb-0">
          <img src="/logo.png" alt="Logo" className="h-18" />
        </div>
        <div className="flex items-center justify-center h-full">
          <Card className="w-full mx-2.5 max-w-sm md:max-w-lg px-2 md:px-6 py-10 mb-8 shadow-none rounded-md  md:rounded-2xl">
            <CardContent>
              {step === 1 && <ForgotPassword />}
              {step === 2 && <EmailOTP />}
              {step === 3 && <Congratulations />}
            </CardContent>

            <CardFooter className="flex justify-between mt-24">
              <Button
                className={cn(
                  "px-12 py-5 text-[#939393] text-base font-mulish",
                  step === 1 && "hidden",
                  step === 3 && "hidden"
                )}
                variant="outline"
                onClick={prevStep}
                disabled={step === 1}
              >
                Back
              </Button>
              <Button
                className={cn(
                  "px-12 py-5 ms-auto bg-secondary hover:bg-amber-600 text-base font-mulish",
                  step === 3 && "mx-auto"
                )}
                onClick={nextStep}
              >
                {step === 1 && "Next"}
                {step === 2 && "Verify"}
                {step === 3 && "Confirm"}
              </Button>
            </CardFooter>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-4  mt-14">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  onClick={() => goToStep(dot)}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-all",
                    step === dot ? "bg-secondary" : "bg-secondary opacity-50"
                  )}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordMultiStep;
