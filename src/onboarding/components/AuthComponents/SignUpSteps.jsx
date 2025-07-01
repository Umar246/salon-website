import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import SignUpEmailCard from "./SignUpEmailCard";
import SignUpBussinessDetailCard from "./SignUpBussinessDetailCard";
import SignUpPasswordCard from "./SignUpPasswordCard";
import SignUpCongratulationCard from "./SignUpCongratulationCard";
import { supabase } from "@/config/supabaseClient";
import { toast } from "react-toastify";

const SignUpSteps = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    businessName: "",
    userName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = () => setStep((prev) => (prev < 4 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));
  // const goToStep = (stepNumber) => setStep(stepNumber);

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle Signup (Final Step)
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      //TODO: Validate phone number: must have at least 8 digits
      // const phoneDigits = formData?.phone?.replace(/\D/g, "");
      // console.log(phoneDigits);
      // if (phoneDigits.length < 8)
      //   toast.error("Please enter at least 8 digits for your phone number.");
      //   return;
      // }

      //  Validate password
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }

      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: "https://salon-management-liard.vercel.app/onboarding",
          data: {
            email: formData.email,
            business_name: formData.businessName,
            user_name: formData.userName,
            phone: formData.phone,
          },
        },
      });

      console.log(data);
      console.log(error);

      if (error) {
        toast.error(error.message);
        setLoading(false);
      } else if (
        data.user &&
        data.user.identities &&
        data.user.identities.length === 0
      ) {
        // When the identities array is empty, it indicates the email is already registered
        toast.error(
          `Email ${formData?.email} is already registered. Please log in instead.`
        );
        setLoading(false);
      } else {
        // Sign up successful (pending email confirmation)
        toast.success("User resgistered successfully", {
          className: "bg-[#005248]",
        });
        setFormData({});
        setLoading(false);
        setStep(4);
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  // const handleNext = async () => {
  //   try {
  //     const email = formData?.email;
  //     const { data, error } = await supabase.auth.signUp({
  //       email,
  //       password: "dummyPassword", // This is a placeholder
  //     });
  //     console.log(formData?.email);
  //     console.log("DATA: ", data);
  //     console.log("ERROR: ", error);

  //     if (error) {
  //       toast.error(error.message);
  //     } else if (
  //       data.user &&
  //       data.user.identities &&
  //       data.user.identities.length === 0
  //     ) {
  //       // When the identities array is empty, it indicates the email is already registered
  //       toast.error(
  //         `Email ${email} is already registered. Please log in instead.`
  //       );
  //     } else {
  //       // Sign up successful (pending email confirmation)
  //       toast.success("Email resgistered successfully");
  //       nextStep();
  //     }
  //   } catch (error) {
  //     // nextStep();
  //     toast.error(error.message);
  //   }
  // };

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
                <SignUpEmailCard
                  next={nextStep}
                  // handleNext={handleNext}
                  prev={prevStep}
                  handleChange={handleChange}
                  formData={formData}
                />
              )}
              {step === 2 && (
                <SignUpBussinessDetailCard
                  next={nextStep}
                  prev={prevStep}
                  handleChange={handleChange}
                  formData={formData}
                />
              )}
              {step === 3 && (
                <SignUpPasswordCard
                  next={handleSignup}
                  prev={prevStep}
                  handleChange={handleChange}
                  loading={loading}
                  formData={formData}
                />
              )}
              {step === 4 && (
                <SignUpCongratulationCard next={nextStep} prev={prevStep} />
              )}
            </CardContent>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-4  mt-14">
              {[1, 2, 3, 4].map((dot) => (
                <div
                  key={dot}
                  // onClick={() => goToStep(dot)}
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

export default SignUpSteps;
