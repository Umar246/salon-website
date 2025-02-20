import { Button } from "@/components/ui/button";
import "../../../css/HeroSection.css";
import Image2 from "../../../../assets/Images/heroSectionImageTwopng.png";
import { motion } from "framer-motion";

const text = " We keep your business on pace with your passion.";
export default function HeroSection() {
  return (
    <div className="backgroundImage mb-[10rem] md:mb-[16rem] h-[100vh] md:h-[70vh] lg:h-[150vh]">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div className="mt-10 lg:mt-14  flex px-5 md:px-0 flex-col text-center items-center justify-center md:justify-start gap-5 md:gap-8 lg:gap-6">
          <h1 className="text-2xl md:text-4xl font-bold text-neutral font-playfair">
            <motion.p>
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.05, delay: index * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </h1>
          <p className="text-base md:text-lg lg:text-base md:px-10 text-neutral font-mulish">
            Salon allows you to manage the demands of today, so that you can
            create space to think about tomorrow.
          </p>
          <Button className="bg-secondary animated-btn hover:bg-amber-600 font-mulish  py-6 px-10 rounded-xl text-sm lg:text-lg">
            Sign Me Up
          </Button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div className="mx-auto text-center w-[90%]  lg:w-[80%]">
          <img
            src={Image2}
            alt="calender_image"
            className="rounded-lg mt-10 md:mt-16 md:rounded-3xl shadow-2xl h-full w-full mx-auto"
          />
        </div>
      </motion.div>
    </div>
  );
}
