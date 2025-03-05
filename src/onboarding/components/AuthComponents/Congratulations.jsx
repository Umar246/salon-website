import lockImg from "../../../assets/Images/forgotPasswordCongratulation.png";
export default function Congratulations() {
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
    </>
  );
}
