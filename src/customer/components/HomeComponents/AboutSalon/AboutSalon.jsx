import { motion } from "framer-motion";

const sectionData = [
  {
    title: "30 Million",
    description: "users",
  },
  {
    title: "80%",
    description: "appointments booked after hours",
  },
  {
    title: "40%",
    description: "more booking per customer",
  },
  {
    title: "250+ ROI",
    description: "on boost",
  },
];

export default function AboutSalon() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div className="w-[85%] mx-auto mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-2 justify-between">
          <div className="py-10 flex flex-col justify-center gap-2 md:ps-10 lg:pe-24">
            <p className="text-primary text-xs font-bold font-mulish">Salon</p>
            <h1 className="font-playfair font-bold text-xl md:pe-20">
              The tools you need, where you need them.
            </h1>
            <p className="text-sm font-mulish mt-3">
              Businesses like yours need more. To help you keep your momentum
              Salon delivers two unique experiences - a tablet solution for the
              front desk and a mobile solution for managing appointments on the
              go.
            </p>
          </div>
          <div className="py-5 md:py-10 grid grid-cols-1 md:grid-cols-2 px-10 font-mulish gap-10 lg:gap-6 justify-center w-full mx-auto text-center md:text-start">
            {sectionData.map((info, index) => {
              return (
                <>
                  <div className="space-y-1" key={index}>
                    <h1 className="text-primary text-3xl font-extrabold">
                      {info.title}
                    </h1>
                    <p className="text-sm font-mulish md:pe-10">
                      {info.description}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
}
