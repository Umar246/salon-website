import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SignUpEmailOTPCard from "./SignUpEmailOTPCard";
import SignUpEmailOTPCongratulation from "./SignUpEmailOTPCongratulation";

const SignUpEmailOTPSteps = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => (prev < 2 ? prev + 1 : prev));
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
              {step === 1 && (
                <SignUpEmailOTPCard next={nextStep} prev={prevStep} />
              )}
              {step === 2 && (
                <SignUpEmailOTPCongratulation next={nextStep} prev={prevStep} />
              )}
            </CardContent>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-4  mt-14">
              {[1, 2].map((dot) => (
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

export default SignUpEmailOTPSteps;
