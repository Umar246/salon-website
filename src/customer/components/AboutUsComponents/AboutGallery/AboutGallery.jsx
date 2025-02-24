// import image1 from "../../../../assets/Images/provider1.jpeg";
// import image2 from "../../../../assets/Images/provider2.jpeg";
// import image3 from "../../../../assets/Images/provider3.jpeg";
import image1 from "../../../../assets/Images/about1.png";
import image2 from "../../../../assets/Images/about2.png";
import image3 from "../../../../assets/Images/about3.png";
import image4 from "../../../../assets/Images/about4.png";
import image5 from "../../../../assets/Images/about5.png";
import image6 from "../../../../assets/Images/about6.png";
import { motion } from "framer-motion";

const providerData = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
  {
    image: image4,
  },
  {
    image: image5,
  },
  {
    image: image6,
  },
];

export default function AboutGallery() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 3 }}
    >
      <div className="w-[85%] mx-auto my-5 md:my-20">
        <div className="flex flex-col items-center">
          {/* <p className="text-xs text-center font-mulish">Salon LITE</p> */}
          <div className="flex flex-col items-center justify-center gap-1 md:gap-4">
            <p className="font-mulish text-primary text-xs font-bold">
              Do you.
            </p>
            <h1 className="font-playfair font-bold text-xl">
              We&apos;ll do the rest.
            </h1>
            <p className="text-justify md:text-center text-sm px-7 w-full max-w-lg mt-2">
              Salon empowers creativity, creates community, and simplifies the
              day-to-day. No matter your end goal, our goal is to help keep your
              business on pace with your passion.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 font-mulish mx-auto lg:px-20 gap-5">
          {providerData.map((provider, index) => {
            // const Icon = card.icon; // Dynamic icon component
            return (
              <>
                <div className="flex flex-col justify-center items-center">
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center"
                  >
                    {/* Decreasing image width and height */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 3 }}
                    >
                      <img
                        src={provider.image}
                        alt="provider_image"
                        className="rounded-2xl md:rounded-4xl object-cover  w-[350px] h-[280px] top-[95%] "
                      />
                    </motion.div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
