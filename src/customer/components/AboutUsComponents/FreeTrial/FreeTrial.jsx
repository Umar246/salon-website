import { Button } from "@/components/ui/button";
import image from "../../../../assets/Images/Marketing.png";
import { motion } from "framer-motion";

export default function FreeTrial() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div className="w-[85%] mx-auto my-10 md:my-20 grid grid-cols-1 gap-0 md:gap-8 lg:gap-0  lg:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="py-10 flex flex-col justify-center gap-2 md:ps-10 lg:pe-24 w-full md:max-w-xl mx-auto">
            <h1 className="font-playfair font-bold text-4xl ">
              Let&apos;s do more, better.
            </h1>
            <p className="text-lg font-mulish mt-2 font-medium">
              Salon is recognized as a global leader in helping small business
              owners do more. Here’s who’s talking about us
            </p>

            <Button
              type="submit"
              className="animated-btn py-5.5 md:px-6 md:w-fit mt-4 bg-secondary rounded-lg hover:bg-amber-600"
            >
              Start Free Trial
            </Button>
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
      </motion.div>
    </>
  );
}
