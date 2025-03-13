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

  // useEffect(() => {
  //   const updateStepFromHash = () => {
  //     const hash = window.location.hash.replace("#step-", "");
  //     const stepFromHash = parseInt(hash, 10);
  //     if (stepFromHash >= 1 && stepFromHash <= 4) {
  //       setStep(stepFromHash);
  //     }
  //   };

  //   // Page load par hash check karo
  //   updateStepFromHash();

  //   // Hash change ko listen karo
  //   window.addEventListener("hashchange", updateStepFromHash);

  //   return () => {
  //     window.removeEventListener("hashchange", updateStepFromHash);
  //   };
  // }, []);

  // useEffect(() => {
  //   window.location.hash = `step-${step}`;
  // }, [step]);

  const nextStep = () => setStep((prev) => (prev < 4 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));
  // const goToStep = (stepNumber) => setStep(stepNumber);

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Handle Signup (Final Step)
  const handleSignup = async () => {
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          email: formData.email,
          business_name: formData.businessName,
          user_name: formData.userName,
          phone: formData.phone,
        },
      },
    });

    if (error) {
      alert("signup error: ", error.message);
      setLoading(false);
      return;
    }
    console.log("data", data);
    setFormData({});
    setLoading(false);
    // await supabase.from("users").insert([
    //   {
    //     id: data.user?.id,
    //     email: formData.email,
    //     business_name: formData.businessName,
    //     user_name: formData.userName,
    //     phone: formData.phone,
    //   },
    // ]);

    setStep(4);
  };

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
