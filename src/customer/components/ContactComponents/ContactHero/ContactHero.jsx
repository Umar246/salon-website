import "../../../css/ContactHero.css";
import { motion } from "framer-motion";

// const text = "The dreamers and the doers.";
export default function ContactHero() {
  return (
    <div className="contactHeroBackground min-h-[55vh] ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div className="flex flex-col  min-h-[55vh] items-center justify-center text-center">
          <h1 className="text-neutral font-playfair text-[30px] md:text-[40px] font-bold">
            Contact Us
          </h1>
        </div>
      </motion.div>
    </div>
  );
}
