import { IoMdCheckmark } from "react-icons/io";
import image from "../../../../assets/Images/OnlineBookingImagepng.png";

export default function OnlineBooking() {
  return (
    <>
      <div className="w-[85%] mx-auto mt-10 md:mt-16 grid grid-cols-1 gap-0 md:gap-8  lg:grid-cols-2 items-center">
        {/* Image Container */}
        <div className="md:border-16 border-10 border-black rounded-xl md:rounded-3xl mx-auto  md:w-[80%] h-[200px] md:h-[400px] lg:h-[300px] flex"
        style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}
        >
          <img
            src={image}
            alt="online_booking_image"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Text Content */}
        <div className="py-10 flex flex-col justify-center gap-2 md:ps-10 lg:pe-24">
          <p className="text-primary text-xs font-bold font-mulish">
            Online Booking
          </p>
          <h1 className="font-playfair font-bold text-xl md:pe-20">
            Grow sales by attracting new clients online
          </h1>
          <p className="text-sm font-mulish mt-5">
            Be seen, be available, build your brand online. Create an online
            profile on our marketplace to get noticed by thousands of potential
            clients in your area.
          </p>

          <div className="my-5 -ms-4 space-y-2">
            <p className="font-mulish text-sm font-medium flex items-center gap-1">
              <span className="text-secondary">
                <IoMdCheckmark size={30} />
              </span>
              Attract and retain clients
            </p>
            <p className="font-mulish text-sm font-medium flex items-center gap-1">
              <span className="text-secondary">
                <IoMdCheckmark size={30} />
              </span>
              Online self-booking
            </p>
            <p className="font-mulish text-sm font-medium flex items-center gap-1">
              <span className="text-secondary">
                <IoMdCheckmark size={30} />
              </span>
              Get trusted ratings and reviews
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
