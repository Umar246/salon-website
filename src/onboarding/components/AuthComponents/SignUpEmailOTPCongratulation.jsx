import mailImg from "../../../assets/Images/SignUpEmailOTPCongratulation.png";
export default function SignUpEmailOTPCongratulation() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20 -mb-16 space-y-4">
        <img src={mailImg} alt="Lock_image" />
        <h2 className="text-center text-2xl font-semibold text-primary">
          Congratulations!
        </h2>
        <p className="text-center text-base w-full max-w-xs md:px-10 font-mulish mt-3 text-[#939393]">
          Your account has successfully been created.
        </p>
      </div>
    </>
  );
}
