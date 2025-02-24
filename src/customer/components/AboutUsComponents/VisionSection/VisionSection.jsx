import { motion } from "framer-motion";
import vision1 from "../../../../assets/Images/Vision1.png";
import vision2 from "../../../../assets/Images/Vision2.png";

export default function VisionSection() {
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
              <p className="text-primary text-xs font-bold font-mulish">
                Our Vision
              </p>
              <h1 className="font-playfair font-bold text-xl md:pe-20">
                Helping you be <br />
                the best version of you.
              </h1>
              <p className="text-sm font-mulish mt-3 text-justify">
                Salon Service aspires to be a trusted partner for service
                providers juggling the complex, everyday issues that arise from
                managing a business in a fast-paced world. By providing
                intuitive tools and responsive solutions, Booksy takes care of
                the exhausting admin work, so your clients get the absolute best
                of you.
              </p>
              <p className="text-sm font-mulish mt-3 text-justify">
                Whether you’re looking to grow your business or just need
                day-to-day organization, Booksy can help you create a
                sustainable rhythm so you can do what you love and do it well.
                We give you the tools to celebrate your independence, build your
                community, and help you shine on every step of your unique
                journey.
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
            <div className="py-10 flex flex-col justify-center gap-2 md:ps-10 lg:pe-7">
              {/* <p className="text-primary text-xs font-bold font-mulish">Salon</p> */}
              <h1 className="font-playfair font-bold text-xl md:pe-20">
                Dran Terry
              </h1>
              <p className="text-sm font-mulish mt-3 text-justify">
                Salon Service was founded on the fundamental idea that small
                business owners need time and space to bring their artistry to
                life. Our founders know this first-hand, and they created Booksy
                to give entrepreneurs back their most valuable resource - time.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
