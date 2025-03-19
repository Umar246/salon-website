import { useState } from "react";
import { Button } from "@/components/ui/button";
import OnboardingSteps from "./OnboardingSteps";

const steps = [
  {
    step: 1,
    title: "Your details",
    description:
      "Provide your name and email address. We will use this information to create your account Provide your name and email address. We will use this information to create your account Provide your name and email address. We will use this information to create your account Provide your name and email address. We will use this information to create your account Provide your name and email address. We will use this information to create your account",
  },
  {
    step: 2,
    title: "Company details",
    description:
      "A few details about your company will help us personalize your experience",
  },
  {
    step: 3,
    title: "Invite your team",
    description:
      "Start collaborating with your team by inviting them to join your account. You can skip this step and invite them later",
  },
];

const StepperContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5  h-screen">
      <OnboardingSteps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <div className="md:col-span-8 lg:col-span-9 p-6 bg-neutral rounded-xl md:rounded-3xl overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{steps[currentStep].title}</h2>
        <p>{steps[currentStep].description}</p>
        <div className="flex gap-3 mt-6">
          {currentStep > 0 && (
            <Button onClick={() => setCurrentStep((prev) => prev - 1)}>
              Previous
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button onClick={() => setCurrentStep((prev) => prev + 1)}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepperContainer;
