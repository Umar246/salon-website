import "../../../css/PricingHero.css";
import { motion } from "framer-motion";

const text = "Your business, your way.";
export default function PricingHero() {
  return (
    <div className="PricingHeroBackground min-h-[55vh] ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div className="flex flex-col  min-h-[55vh] items-center justify-center text-center gap-3 md:gap-8">
          <h1 className="text-neutral font-playfair text-[30px] md:text-[40px] font-bold">
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
          <p className="text-neutral font-mulish text-base px-5 max-w-md">
            Flexible pricing options so that you can access the solutions you
            need, when you need them. And when you don&apos;t? Turn them off,
            anytime.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
