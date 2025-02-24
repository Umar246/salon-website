import { motion } from "framer-motion";
import vision1 from "../../../../assets/Images/careers1.png";
import vision2 from "../../../../assets/Images/career2.png";

export default function Careers() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div className="w-[85%] mx-auto my-10 md:my-20 grid grid-cols-1 md:grid-cols-2 justify-between items-center">
          {/* 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
          >
            <div className="py-10 flex flex-col justify-center gap-2  md:pe-8 lg:pe-24">
              {/* <p className="text-primary text-xs font-bold font-mulish">Salon</p> */}
              <h1 className="font-playfair font-bold text-xl md:pe-20">
                We celebrate your independence
              </h1>
              <p className="text-sm font-mulish mt-3 text-justify">
                We celebrate people and their ideas - brave, inspiring, or even
                just plain wacky. Because at the end of the day, it’s your
                talent and perspective that set you apart. No matter who you are
                or where you are on your path, we’re here to give you the tools
                to run your business, your way.
              </p>
            </div>
          </motion.div>
          {/* 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
          >
            <div className="w-full mx-auto ">
              <img src={vision1} alt="vision_section_image" />
            </div>
          </motion.div>

          {/* 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            className="order-4 md:order-3"
          >
            <div className="w-full mx-auto">
              <img src={vision2} alt="vision_section_image" />
            </div>
          </motion.div>

          {/* 4 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            className="order-3 md:order-4"
          >
            <div className="py-10 flex flex-col justify-center gap-2 md:ps-10 lg:pe-7 ">
              <p className="text-primary text-xs font-bold font-mulish">
                Careers
              </p>
              <h1 className="font-playfair font-bold text-xl md:pe-20">
                Join our team
              </h1>
              <p className="text-sm font-mulish mt-3 text-justify">
                Want to be part of a global team devoted to helping self-made
                entrepreneurs and small businesses get ahead? At Booksy, we
                dedicate ourselves to helping our providers manage the
                day-to-day, so they can give their all to their business and
                their clients. The best part: we practice the same values that
                we preach. We offer unlimited PTO to help you find balance
                between the “work you” and the “personal you.”
              </p>

              <h1 className="font-mulish font-bold mt-3 text-md md:pe-20">
                We proudly offer:
              </h1>
              <ul className="text-sm font-mulish mt-1 space-y-3 ps-4">
                <li className="list-disc">
                  {" "}
                  Dental, and Vision plans for individuals and families
                </li>
                <li className="list-disc">
                  Competitive parental leave programs
                </li>
                <li className="list-disc">
                  A supportive, team-oriented environment
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
