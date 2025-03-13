import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import PhoneInput from "react-phone-input-2";
// import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";

export default function SignUpBussinessDetailCard({
  next,
  prev,
  handleChange,
  formData,
}) {
  // const [phone, setPhone] = useState("");
  // const navigate = useNavigate();
  return (
    <>
      <h2 className="text-center text-2xl font-semibold text-primary">
        Sign Up
      </h2>
      <p className="text-center text-sm font-mulish mt-3 text-[#939393]">
        About you and your business
      </p>
      <CardContent className="space-y-4 mt-8">
        <div className="pb-2">
          <label className="block text-sm font-mulish text-gray-700">
            Bussiness Name
          </label>
          <Input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Write name of your bussiness..."
            className="mt-3 bg-success shadow-none border-0 h-10 md:h-12 focus:!ring-1 focus:!ring-secondary"
          />
        </div>
        <div className="pb-2">
          <label className="block text-sm font-mulish text-gray-700">
            Your Name
          </label>
          <Input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Write your email address..."
            className="mt-3 bg-success shadow-none border-0 h-10 md:h-12 focus:!ring-1 focus:!ring-secondary"
          />
        </div>
        <div className="-mb-14">
          <label className="block text-sm font-mulish text-gray-700">
            Phone
          </label>
          <div className="w-full">
            <PhoneInput
              country="gb"
              type="phone"
              name="phone"
              value={formData.phone}
              onChange={(value) =>
                handleChange({ target: { name: "phone", value } })
              } // Fix applied here
              inputProps={{
                placeholder: "Enter your phone number",
              }}
              inputClass="!w-full flex items-center !mt-3 !h-10 md:!h-12 !text-lg !pr-4 !text-gray-700 !bg-success !border-0  !rounded-md focus:!ring-1 focus:!ring-secondary"
              containerClass="w-full"
              buttonClass="!border-none !bg-transparent "
              dropdownClass="!bg-white  !shadow-lg !border !border-gray-200"
            />
          </div>
        </div>
      </CardContent>

      <div className="flex justify-between mt-24">
        <Button
          className={cn(
            "px-8 md:px-12 py-5 text-[#939393] text-base font-mulish"
          )}
          variant="outline"
          onClick={prev}
        >
          Back
        </Button>
        <Button
          className={cn(
            "px-8 md:px-12 py-5  bg-secondary hover:bg-amber-600 text-base font-mulish"
          )}
          // onClick={() => navigate("/auth/signup/phone-verify")}
          onClick={next}
        >
          Next
        </Button>
      </div>
      {/* Forgot Password */}
    </>
  );
}

SignUpBussinessDetailCard.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};
