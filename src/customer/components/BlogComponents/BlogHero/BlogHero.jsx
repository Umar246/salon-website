import "../../../css/BlogHero.css";
import { motion } from "framer-motion";

// const text = "The dreamers and the doers.";
export default function BlogHero() {
  return (
    <div className="blogHeroBackground min-h-[55vh] ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div className="flex flex-col  min-h-[55vh] items-center justify-center text-center">
          <h1 className="text-neutral font-playfair text-[30px] md:text-[40px] font-bold">
            Blog
          </h1>
        </div>
      </motion.div>
    </div>
  );
}
