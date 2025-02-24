import { motion } from "framer-motion";
// import vectorImage from "../../../../assets/Images/Vector.png"

const sectionData = [
  {
    title: "30 Million",
    description: "users",
  },
  {
    title: "500+",
    description: "employees",
  },
  {
    title: "Top 25",
    description: "companies for women",
  },
  {
    title: "Top 50",
    description: "companies for diversity",
  },
];

export default function WhereWeAre() {
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
            <p className="text-primary text-xs font-bold font-mulish">
              Where we are
            </p>
            <h1 className="font-playfair font-bold text-xl md:pe-20">
              Local Impact, Global Scale
            </h1>
            <p className="text-sm font-mulish mt-3">
              Since our launch in 2015, Booksy has been backed by leading US and
              European investors, and has successfully expanded to integrate a
              global network of self-made service providers.
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
                    <p className="text-sm font-mulish w-full max-w-xs lg:pe-20">
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
