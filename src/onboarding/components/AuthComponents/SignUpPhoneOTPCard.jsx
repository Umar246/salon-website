import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { CardContent } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function SignUpPhoneOTPCard() {
  return (
    <>
      <h2 className="text-center text-2xl font-semibold text-primary">
        OTP Verification
      </h2>
      <p className="text-center text-sm w-full max-w-sm  font-mulish mt-3 text-[#939393]">
        A 6-digit code is sent to your contact number. Kindly enter that code
        here to continue further. Thanks
      </p>
      <CardContent className="space-y-4 mt-8">
        <div className="pb-12">
          <InputOTP
            maxLength={6}
            className={"rounded-none"}
            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
          >
            <InputOTPGroup
              className={"flex gap-5 justify-center w-full rounded-none"}
            >
              <InputOTPSlot
                className="bg-success  shadow-none rounded-sm border-1 p-5"
                index={0}
              />
              <InputOTPSlot
                className="bg-success  shadow-none rounded-sm border-1 p-5"
                index={1}
              />
              <InputOTPSlot
                className="bg-success  shadow-none rounded-sm border-1 p-5"
                index={2}
              />
              <InputOTPSlot
                className="bg-success  shadow-none rounded-sm border-1 p-5"
                index={3}
              />
              <InputOTPSlot
                className="bg-success  shadow-none rounded-sm border-1 p-5"
                index={4}
              />
              <InputOTPSlot
                className="bg-success  shadow-none rounded-sm border-1 p-5"
                index={5}
              />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-xs font-mulish text-gray-400 mt-6 ps-3">
            <span className="text-secondary">Resend</span> confirmation code
            (1:07)
          </p>
        </div>
      </CardContent>
    </>
  );
}
