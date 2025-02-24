import "../../../css/AboutUs.css";
import { motion } from "framer-motion";

const text = "The dreamers and the doers.";
export default function AboutUsHero() {
  return (
    <div className="aboutUsBackground min-h-[55vh] ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div className="flex flex-col  min-h-[55vh] items-center justify-center text-center">
          <h1 className="text-neutral font-playfair text-[30px] md:text-[40px] font-bold">
           About us.
          </h1>
          <h1 className="text-neutral font-mulish w-full max-w-xs text-[30px] md:text-[40px]">
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
          {/* <p className="text-neutral font-mulish text-base px-5 max-w-md">
            Flexible pricing options so that you can access the solutions you
            need, when you need them. And when you don&apos;t? Turn them off,
            anytime.
          </p> */}
        </div>
      </motion.div>
    </div>
  );
}
