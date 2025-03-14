import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ForgotPassword from "./ForgotPassword";
// import EmailOTP from "./EmailOTP";
import Congratulations from "./Congratulations";
import ResetPassword from "./ResetPassword";
// import { useSearchParams } from "react-router-dom";

const ForgotPasswordMultiStep = () => {
  const [step, setStep] = useState(1);
  // const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const stepParam = query.get("step");
    if (stepParam && [1, 2, 3].includes(Number(stepParam))) {
      setStep(Number(stepParam));
    }
  }, []);

  const nextStep = () => setStep((prev) => (prev < 3 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

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
                <ForgotPassword
                  setStep={setStep}
                  next={nextStep}
                  prev={prevStep}
                />
              )}
              {/* {step === 2 && <EmailOTP next={nextStep} prev={prevStep} />} */}
              {step === 2 && <ResetPassword next={nextStep} prev={prevStep} />}
              {step === 3 && (
                <Congratulations next={nextStep} prev={prevStep} />
              )}
            </CardContent>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-4  mt-14">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
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
