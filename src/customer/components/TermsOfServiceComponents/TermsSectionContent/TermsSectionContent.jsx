import { motion } from "framer-motion";

const definations = [
  {
    title: "1.1 Definitions:",
    content:
      "References to the “Booking Services” mean those appointment-scheduling services made available by us through the Booksy Application. References to the “Booksy Application” mean any mobile, web, or voice software application related to the Services designed, developed, and/or made available by us and available through the iTunes and Google Play stores as well as other third-party services, including but not limited to Amazon Alexa and Google Home.",
  },
  {
    title: "1.1 Definitions:",
    content:
      "References to the “Booking Services” mean those appointment-scheduling services made available by us through the Booksy Application. References to the “Booksy Application” mean any mobile, web, or voice software application related to the Services designed, developed, and/or made available by us and available through the iTunes and Google Play stores as well as other third-party services, including but not limited to Amazon Alexa and Google Home.",
  },
  {
    title: "1.1 Definitions:",
    content:
      "References to the “Booking Services” mean those appointment-scheduling services made available by us through the Booksy Application. References to the “Booksy Application” mean any mobile, web, or voice software application related to the Services designed, developed, and/or made available by us and available through the iTunes and Google Play stores as well as other third-party services, including but not limited to Amazon Alexa and Google Home.",
  },
];

export default function TermsSectionContent() {
  return (
    <div className="w-[85%] mx-auto py-10 md:py-16 lg:py-20 font-mulish space-y-3">
      <p className="text-[#939393] text-xs">Last revised: October 30, 2020</p>
      <h1 className="font-bold">
        Part I – Definitions, Agreement to be Bound.
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        {definations.map((defination, index) => (
          <div key={index} className="mb-3">
            <p className="text-sm text-[#242424] mb-2">{defination.title}</p>
            <p className="text-sm text-[#242424] w-full max-w-[60rem]">
              {defination.content}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
