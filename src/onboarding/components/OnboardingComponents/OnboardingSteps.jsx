import PropTypes from "prop-types";
import { IoMdCheckmark } from "react-icons/io";

const steps = [
  {
    step: 1,
    title: "Bussiness category",
  },
  {
    step: 2,
    title: "Location",
  },
  {
    step: 3,
    title: "Bussiness Hours",
  },
  {
    step: 4,
    title: "Workspace",
  },
  {
    step: 5,
    title: "Clients Contacts",
  },
  {
    step: 6,
    title: "Services",
  },
  {
    step: 7,
    title: "Staff",
  },
  {
    step: 8,
    title: "Complete",
  },
];

const OnboardingSteps = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="md:col-span-4 lg:col-span-3 p-6 
     rounded-xl md:rounded-3xl flex flex-col  bg-neutral min-h-screen">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={step.step} className="flex gap-4 items-start">
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => setCurrentStep(index)}
                className={`rounded-full p-2 flex items-center justify-center w-10 h-10 ${
                  isCompleted
                    ? "bg-primary text-white"
                    : isActive
                    ? "bg-secondary text-white"
                    : "border-gray-600 border-1 text-gray-500"
                }`}
              >
                {isCompleted ? (
                  <IoMdCheckmark className="w-5 h-5" />
                ) : isActive ? (
                  <p>{index + 1}</p>
                ) : (
                  <p>{index + 1}</p>
                )}
              </button>
              {/* Dashed Line Between Steps */}
              {index !== steps.length - 1 && (
                <div
                  className={`w-0.5 h-10 ${
                    isCompleted
                      ? "border-l-2 py-1 border-primary"
                      : "border-l-1 border-dashed border-gray-700 py-1"
                  } border-gray-400`}
                ></div>
              )}
            </div>
            <div className="flex flex-col">
              <h3
                className={`text-sm font-semibold ${
                  isCompleted
                    ? "text-primary"
                    : isActive
                    ? "text-[#000]"
                    : "text-[#939393]"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-xs text-gray-500 ${
                  isCompleted ? "text-secondary" : "text-gray-500"
                }`}
              >
                {isCompleted ? "Completed" : isActive ? "In Progress" : ""}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

OnboardingSteps.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
};

export default OnboardingSteps;
