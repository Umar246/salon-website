import { useState } from "react";
// import { Button } from "@/components/ui/button";
import OnboardingSteps from "./OnboardingSteps";
import BussinessCategory from "./StepComponents/BussinessCategory";
import Location from "./StepComponents/Location";
import BussinessHours from "./StepComponents/BussinessHours";
import Workspace from "./StepComponents/Workspace";
import ClientContacts from "./StepComponents/ClientContacts";
import Service from "./StepComponents/Service";
import Staff from "./StepComponents/Staff";
import Complete from "./StepComponents/Complete";

// const steps = [
//   {
//     step: 1,
//     title: "Your details",
//     description:
//       "Provide your name and email address. We will use this information to create your account Provide your name and email address. We will use this information to create your account Provide your name and email address. We will use this information to create your account Provide your name and email address. We will use this information to create your account Provide your name and email address. We will use this information to create your account",
//   },
//   {
//     step: 2,
//     title: "Company details",
//     description:
//       "A few details about your company will help us personalize your experience",
//   },
//   {
//     step: 3,
//     title: "Invite your team",
//     description:
//       "Start collaborating with your team by inviting them to join your account. You can skip this step and invite them later",
//   },
// ];

const StepperContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((previous) => previous + 1);
  const prevStep = () => setCurrentStep((previous) => previous - 1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 min-h-screen ">
      <OnboardingSteps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

      <div className="md:col-span-8 lg:col-span-9  p-6 h-screen bg-neutral rounded-xl md:rounded-3xl overflow-y-auto flex flex-col">
        {/* <h2 className="text-2xl font-bold mb-4">{steps[currentStep].title}</h2>
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
        </div> */}

        {currentStep === 0 && (
          <BussinessCategory
            next={nextStep}
            prev={prevStep}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 1 && (
          <Location
            next={nextStep}
            prev={prevStep}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 2 && (
          <BussinessHours
            next={nextStep}
            prev={prevStep}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 3 && (
          <Workspace
            next={nextStep}
            prev={prevStep}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 4 && (
          <ClientContacts
            next={nextStep}
            prev={prevStep}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 5 && (
          <Service
            next={nextStep}
            prev={prevStep}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 6 && (
          <Staff
            next={nextStep}
            prev={prevStep}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 7 && (
          <Complete
            next={nextStep}
            prev={prevStep}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        )}
      </div>
    </div>
  );
};

export default StepperContainer;
