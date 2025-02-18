import { FaCalendar, FaUserTie  } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { RiTeamFill, RiServiceFill } from "react-icons/ri";


const cardData = [
  {
    icon: FaCalendar,
    title: "Calendar & Appointments",
    description: "Focus on the person in front of you, instead of the phone.",
  },
  {
    icon: PiBagFill,
    title: "Business Management",
    description: "Payments, people, documentation, so you can focus on running your business.",
  },
  {
    icon: MdPayment,
    title: "Payment Processing",
    description: "Flexible payments solutions to meet the needs of your business.",
  },
  {
    icon: FaUserTie ,
    title: "Clients",
    description: "Rely on us to help you stay busy and to protect yourself against no-shows.",
  },
  {
    icon: RiTeamFill,
    title: "Staff",
    description: "Keep tabs on your Staff members through powerful business insights.",
  },
  {
    icon: RiServiceFill,
    title: "Services",
    description: "Businesses can add their own services to their profile.",
  },
];

export default function HeroCards() {
  return (
    <div className="w-[85%] mx-auto">
    <div className="flex flex-col items-center space-y-4">
      <p className="text-xs text-center font-mulish">Salon LITE</p>
      <h1 className="font-bold text-2xl text-center lg:w-sm font-playfair">
        Appointments, calendar, and clients on the go.
      </h1>
    </div>

    <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 font-mulish lg:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-14">
      {cardData.map((card, index) => {
        const Icon = card.icon; // Dynamic icon component
        return (
          <div
            key={index}
            className="group rounded-2xl flex flex-col items-center justify-center hover:bg-primary space-y-2 px-10 py-8 transition-all duration-300"
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
          >
            <div className="bg-primary p-2 rounded-lg transition-all duration-300 group-hover:bg-secondary">
              <Icon className="text-neutral group-hover:text-primary" size={26} />
            </div>
            <p className="text-sm font-bold text-center mt-4 transition-all duration-300 group-hover:text-secondary">
              {card.title}
            </p>
            <p className="text-sm text-center transition-all duration-300 group-hover:text-secondary">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
  );
}
