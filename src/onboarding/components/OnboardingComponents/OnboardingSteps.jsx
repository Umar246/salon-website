import { Check, Circle, Dot } from "lucide-react";

const steps = [
    {
      step: 1,
      title: "Bussiness category",
      description:
        "Provide your name and email address. We will use this information to create your account",
    },
    {
      step: 2,
      title: "Location",
      description:
        "A few details about your company will help us personalize your experience",
    },
    {
      step: 3,
      title: "Bussiness Hours",
      description:
        "Start collaborating with your team by inviting them to join your account. You can skip this step and invite them later",
    },
  ];

const OnboardingSteps = ({ currentStep, setCurrentStep }) => {
    return (
      <div className="col-span-3 p-6 flex flex-col gap-10 bg-neutral">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;
  
          return (
            <div key={step.step} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setCurrentStep(index)}
                  className={`rounded-full p-2 flex items-center justify-center w-8 h-8 ${
                    isCompleted
                      ? "bg-green-500 text-white"
                      : isActive
                      ? "bg-blue-500 text-white ring-2 ring-blue-300"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : isActive ? (
                    <Circle className="w-5 h-5" />
                  ) : (
                    <Dot className="w-5 h-5" />
                  )}
                </button>
                {index !== steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-300"></div>
                )}
              </div>
              <div className="flex flex-col">
                <h3
                  className={`text-sm font-semibold ${
                    isActive ? "text-blue-500" : "text-gray-700"
                  }`}
                >
                  {step.title}
                </h3>
                {/* <p
                  className={`text-xs text-gray-500 ${
                    isActive ? "text-blue-400" : "hidden md:block"
                  }`}
                >
                  {step.description}
                </p> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  };


  export default OnboardingSteps