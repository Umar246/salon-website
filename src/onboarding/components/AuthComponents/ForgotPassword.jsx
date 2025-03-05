import { Input } from "@/components/ui/input";
import { CardContent } from "@/components/ui/card";

export default function ForgotPassword() {
  return (
    <>
      <h2 className="text-center text-2xl font-semibold text-primary">
        Forgot Password
      </h2>
      <p className="text-center text-xs font-mulish mt-3 text-[#939393]">
        A 6-digit code will be sent to your email address
      </p>
      <CardContent className="space-y-4 mt-8">
        <div className="pb-12">
          <label className="block text-sm font-mulish text-gray-700">
            Email
          </label>
          <Input
            type="email"
            placeholder="Write your email address..."
            className="mt-3 bg-success shadow-none border-0 "
          />
        </div>

       
      </CardContent>
      {/* Forgot Password */}
    </>
  );
}
