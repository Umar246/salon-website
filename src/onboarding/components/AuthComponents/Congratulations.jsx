import { Button } from "@/components/ui/button";
import lockImg from "../../../assets/Images/forgotPasswordCongratulation.png";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
export default function Congratulations() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 space-y-4">
        <img src={lockImg} alt="Lock_image" />
        <h2 className="text-center text-2xl font-semibold text-primary">
          Congratulations!
        </h2>
        <p className="text-center text-sm w-full max-w-xs md:px-10 font-mulish mt-3 text-[#939393]">
          Your password has been successfully reset.
        </p>
      </div>
      <div className="flex justify-between mt-24">
        <Button
          onClick={() => navigate("/auth/")}
          className={cn(
            "px-12 py-5 ms-auto bg-secondary hover:bg-amber-600 text-base font-mulish mx-auto"
          )}
        >
          Confirm
        </Button>
      </div>
    </>
  );
}
