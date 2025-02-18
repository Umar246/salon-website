import { IoMdCheckmark } from "react-icons/io";
import image from "../../../../assets/Images/Marketing.png";

export default function MarketingSection() {
  return (
    <>
      <div className="w-[85%] mx-auto mt-10 md:mt-16 grid grid-cols-1 gap-0 md:gap-8 lg:gap-0  lg:grid-cols-2 items-center">
        {/* Text Content */}
        <div className="py-10 flex flex-col justify-center gap-2 md:ps-10 lg:pe-24">
          <p className="text-primary text-xs font-bold font-mulish">
          Automated Marketing
          </p>
          <h1 className="font-playfair font-bold text-xl md:pe-20">
          Stay in touch with auto campaigns and messages
          </h1>
          <p className="text-sm font-mulish mt-5">
          Target client groups with our unbeatable filtering tools to reach your top spenders, most loyal, lapsed clients and more

          </p>
          <p className="text-sm font-mulish mt-5">
          Surpise clients on their special day with a discount, turn newcomers into regulars and win back disengaged clients, all with
          </p>

          <div className="mt-2 -ms-4 space-y-2">
            <p className="font-mulish text-sm font-medium flex items-center gap-1">
              <span className="text-secondary">
                <IoMdCheckmark size={30} />
              </span>
              Customisable message templates
            </p>
            <p className="font-mulish text-sm font-medium flex items-center gap-1">
              <span className="text-secondary">
                <IoMdCheckmark size={30} />
              </span>
              Advanced client targeting
            </p>
            <p className="font-mulish text-sm font-medium flex items-center gap-1">
              <span className="text-secondary">
                <IoMdCheckmark size={30} />
              </span>
              Personalised per-client messages
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div
          className="md:border-16 border-10 border-black rounded-xl md:rounded-3xl mx-auto  md:w-[80%] h-[200px] md:h-[400px] lg:h-[300px] flex"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          <img
            src={image}
            alt="online_booking_image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </>
  );
}
