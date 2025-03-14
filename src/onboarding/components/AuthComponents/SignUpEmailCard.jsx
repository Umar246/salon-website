import { Input } from "@/components/ui/input";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";

export default function SignUpEmailCard({
  next,
  handleChange,
  formData,
  loading,
  // handleNext,
}) {
  // const navigate = useNavigate();
  return (
    <>
      <h2 className="text-center text-2xl font-semibold text-primary">
        Sign Up
      </h2>
      <p className="text-center text-sm font-mulish mt-3 text-[#939393]">
        What is your email Address?
      </p>
      <form onSubmit={next}>
        <CardContent className="space-y-4 mt-8">
          <div className="pb-12">
            <label className="block text-sm font-mulish text-gray-700">
              Email
            </label>
            <Input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={formData.email}
              placeholder="Write your email address..."
              className="mt-3 bg-success shadow-none h-10 md:h-12  border-0 focus:!ring-1 focus:!ring-secondary"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between mt-24">
          <Button
            type="Submit"
            disabled={loading}
            // onClick={next}
            className={cn(
              "px-8 md:px-12 py-5 ms-auto bg-secondary hover:bg-amber-600 text-base font-mulish"
            )}
            // onClick={() => navigate("/auth/signup/email-verify")}
          >
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Next"
            )}
            {/* {step === 1 && "Next"}
            {step === 2 && "Next"}
            {step === 3 && "Next"}
            {step === 4 && "Confirm"} */}
          </Button>
        </CardFooter>
      </form>
    </>
  );
}

SignUpEmailCard.propTypes = {
  next: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  handleNext: PropTypes.func.isRequired,
};
