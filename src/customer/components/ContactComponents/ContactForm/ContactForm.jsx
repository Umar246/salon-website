import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="w-[85%] md:w-[75%] lg:w-[70%] gap-5 md:gap-8 lg:gap-12  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 md:py-16 lg:py-20 ">
      {/* Left Side - Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div className="flex flex-col gap-6 w-full ">
          <Input
            placeholder="Your Name"
            className="bg-[#F8F8FE] border-0 shadow-none py-5 px-3 rounded-lg"
          />
          <Input
            placeholder="Your Email"
            className="bg-[#F8F8FE] border-0 shadow-none py-5 px-3 rounded-lg"
          />
          <Textarea
            placeholder="Message"
            className="bg-[#F8F8FE] border-0 shadow-none  p-3 pb-14 rounded-lg"
          />
          <Button className="bg-secondary animated-btn text-white py-6 rounded-xl hover:bg-amber-600">
            Send
          </Button>
        </div>
      </motion.div>

      {/* Right Side - Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
        className="lg:col-span-2"
      >
        <Card className="w-full p-6 py-12 shadow-sm hover:shadow-md self-start">
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-sm font-mulish">+1 (206) 735-3553</p>
            <p className="text-sm font-mulish">Monday - Friday 8AM to 8PM</p>
            <p className="text-sm font-mulish">
              Saturday 8AM to 4PM US Central
            </p>
            <Link to="mailto:help.us@salon.com" className="text-primary">
              help.us@salon.com
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactForm;
