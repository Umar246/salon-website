import { CardFooter } from "@/components/ui/card";
import userImg from "../../../assets/Images/SignUpCongratulation.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
export default function SignUpCongratulationCard({next}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 -mb-16 space-y-4">
        <img src={userImg} alt="Lock_image" />
        <h2 className="text-center text-2xl font-semibold text-primary">
          Congratulations!
        </h2>
        <p className="text-center text-base w-full max-w-xs md:px-10 font-mulish mt-3 text-[#939393]">
          Your account has successfully been created.
        </p>
      </div>
      <CardFooter className="flex justify-between mt-24">
        <Button
          className={cn(
            "px-8 md:px-12 py-5 ms-auto bg-secondary hover:bg-amber-600 text-base font-mulish mx-auto"
          )}
          onClick={next}
        >
          Confirm
        </Button>
      </CardFooter>
    </>
  );
}

SignUpCongratulationCard.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
};