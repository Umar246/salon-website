import image1 from "../../../../assets/Images/provider1.jpeg";
import image2 from "../../../../assets/Images/provider2.jpeg";
import image3 from "../../../../assets/Images/provider3.jpeg";
import { motion } from "framer-motion";

const providerData = [
  {
    image: image1,
    name: "John Doe",
    city: "Chicago",
    description:
      "“ Get started with booksy to run your business, Calendar, Booking, Marketing and Payments all in one. ”",
  },
  {
    image: image2,
    name: "Emily Johnes",
    city: "Orlando",
    description:
      "“ Get started with booksy to run your business, Calendar, Booking, Marketing and Payments all in one. ”",
  },
  {
    image: image3,
    name: "Dran Terry",
    city: "Chicago",
    description:
      "“ Get started with booksy to run your business, Calendar, Booking, Marketing and Payments all in one. ”",
  },
];

export default function ProvidersPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 3 }}
    >
      <div className="w-[85%] mx-auto mt-5 md:mt-20">
        <div className="flex flex-col items-center">
          {/* <p className="text-xs text-center font-mulish">Salon LITE</p> */}
          <h1 className="font-bold text-2xl text-center lg:w-sm font-playfair">
            Our providers say it best
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 font-mulish lg:grid-cols-3 mx-auto lg:px-20 2xl:grid-cols-4 gap-14 md:gap-8">
          {providerData.map((provider, index) => {
            // const Icon = card.icon; // Dynamic icon component
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-3"
              >
                <div className="flex flex-col items-center justify-center">
                  {/* Decreasing image width and height */}
                  <img
                    src={provider.image}
                    alt="provider_image"
                    className="rounded-2xl object-cover  w-[250px] h-[240px] top-[95%] "
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <h1 className="font-playfair font-bold text-xl">
                    {provider.name}
                  </h1>
                  <p className="font-mulish text-primary text-xs font-bold">
                    {provider.city}
                  </p>
                  <p className="text-center text-xs px-7">
                    {provider.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
