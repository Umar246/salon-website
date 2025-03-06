import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";

export default function SignUpBussinessDetailCard() {
  const [phone, setPhone] = useState("");
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
            type="email"
            placeholder="Write name of your bussiness..."
            className="mt-3 bg-success shadow-none border-0 h-10 md:h-12 focus:!ring-1 focus:!ring-secondary"
          />
        </div>
        <div className="pb-2">
          <label className="block text-sm font-mulish text-gray-700">
            Your Name
          </label>
          <Input
            type="Write your name..."
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
              country="au" // Default country (Australia)
              value={phone}
              onChange={setPhone}
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
      {/* Forgot Password */}
    </>
  );
}
