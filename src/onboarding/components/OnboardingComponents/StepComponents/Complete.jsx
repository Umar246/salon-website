import { Button } from "@/components/ui/button";
import checkMark from "../../../../assets/Images/onboardingCompletePage.png";
import PropTypes from "prop-types";

export default function ConfirmationPage({ complete }) {
  return (
    <div className="min-h-screen flex flex-col font-mulish items-center justify-center bg-white p-4">
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Check image */}
        <img
          src={checkMark} // apni image path yahaan set karna
          alt="Success"
          className="w-18 h-18 md:w-24 md:h-24 object-contain"
        />

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-emerald-900">
          Congratulations!
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-sm text-sm md:text-base">
          Onboarding Process has been successfully completed.
        </p>

        {/* Confirm Button */}
        <Button
          onClick={complete}
          className="bg-secondary hover:bg-amber-600 text-white px-6 mt-2"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}

ConfirmationPage.propTypes = {
  complete: PropTypes.func.isRequired,
};
