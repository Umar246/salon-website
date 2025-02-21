import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { motion } from "framer-motion";

const pricingData = {
  monthly: [
    {
      title: "Basic Package",
      price: "$29.99 / mo",
      features: [
        "Calendar & Appointments",
        "Staff & Shift Management",
        "Inventory",
        "Integrations (Google, Instagram)",
        "Stats & Reports",
      ],
    },
    {
      title: "Standard Package",
      price: "$49.99 / mo",
      features: [
        "Calendar & Appointments",
        "Staff & Shift Management",
        "Inventory",
        "Integrations (i.e. Google, Instagram)",
        "Stats & Reports",
        "Marketing & Promotional Tools",
      ],
    },
    {
      title: "Premium Package",
      price: "$79.99 / mo",
      features: [
        "Calendar & Appointments",
        "Staff & Shift Management",
        "Inventory",
        "Integrations (i.e. Google, Instagram)",
        "Stats & Reports",
        "Marketing & Promotional Tools",
        "No-Show Protection",
        "Gift Cards, Packages, & Memberships",
      ],
    },
  ],
  yearly: [
    {
      title: "Basic Package",
      price: "$299.99 / yr",
      features: [
        "Calendar & Appointments",
        "Staff & Shift Management",
        "Inventory",
        "Integrations (Google, Instagram)",
        "Stats & Reports",
      ],
    },
    {
      title: "Standard Package",
      price: "$499.99 / yr",
      features: [
        "Calendar & Appointments",
        "Staff & Shift Management",
        "Inventory",
        "Integrations (i.e. Google, Instagram)",
        "Stats & Reports",
        "Marketing & Promotional Tools",
      ],
    },
    {
      title: "Premium Package",
      price: "$799.99 / yr",
      features: [
        "Calendar & Appointments",
        "Staff & Shift Management",
        "Inventory",
        "Integrations (i.e. Google, Instagram)",
        "Stats & Reports",
        "Marketing & Promotional Tools",
        "No-Show Protection",
        "Gift Cards, Packages, & Memberships",
      ],
    },
  ],
};

export default function PricingCards() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(pricingData.monthly[0]);

  return (
    <div className="flex flex-col items-center p-6  md:justify-center md:gap-6 md:mb-14 md:mt-3">
      {/* Toggle Buttons */}
      <div className="flex  mb-4 md:w-full md:justify-center">
        {["monthly", "yearly"].map((cycle) => (
          <button
            key={cycle}
            className={`px-5 py-[6px] cursor-pointer rounded-sm text-sm ${
              billingCycle === cycle
                ? "bg-primary text-neutral"
                : "bg-neutral text-gray-400"
            }`}
            onClick={() => {
              setBillingCycle(cycle);
              setSelectedPlan(pricingData[cycle][0]);
            }}
          >
            {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
          </button>
        ))}
      </div>

      {/* Pricing Cards & Summary Card in One Line on Large Screens */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <div className="text-start  w-full max-w-6xl my-8 md:my-0 md:mb-8">
          <h1 className="text-start w-full font-mulish font-medium">
            Your business, your way. Adjust your subscription at any time:
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {pricingData[billingCycle].map((plan, index) => (
            <>
              <div
                key={index}
                className={` p-4 flex flex-col h-full rounded-xl cursor-pointer ${
                  selectedPlan === plan
                    ? "border-2 border-secondary"
                    : "border border-gray-300"
                }`}
                onClick={() => setSelectedPlan(plan)}
              >
                <h3
                  className={`font-medium text-lg font-playfair ${
                    selectedPlan === plan ? "text-secondary" : "text-black"
                  }`}
                >
                  {plan.title}
                </h3>
                <span className="border-b border-gray-300 my-2"></span>
                <p className="text-2xl text-primary font-medium font-mulish">
                  {plan.price}
                </p>
                <ul className="mt-4 space-y-3 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex text-xs items-center gap-0.5">
                      <span className="text-primary">
                        <IoMdCheckmark size={15} />
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mb-0 mt-8  w-full animated-btn bg-secondary hover:bg-amber-600 text-white py-2 rounded-md">
                  Subscribe
                </button>
              </div>
            </>
          ))}
          {/* Summary Card Always Visible */}

          <div className="rounded-xl overflow-hidden border border-gray-300 self-start">
            {/* Top Section */}
            <div className="bg-primary text-white p-4">
              <h3 className="font-bold text-base font-playfair">Summary</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs font-mulish font-light">
                  Salon Subscription
                </span>
                <span className="text-secondary text-sm font-semibold">
                  {selectedPlan.price}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4 mb-2">
                <span className="text-xs font-mulish font-light">Boost</span>
                <span className="text-secondary font-semibold text-xs">
                  One-Time Commission Fee
                </span>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-white p-4">
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-800 font-mulish">Per month</p>
                <div className="text-end text-xl font-semibold flex flex-col">
                  <span className="text-primary font-mulish">
                    {" "}
                    {selectedPlan.price}
                  </span>
                  <span className="text-xs text-gray-300 font-mulish">
                    + Taxes included
                  </span>
                </div>
              </div>

              <button className="mt-10 w-full cursor-pointer bg-secondary hover:bg-amber-600 text-white py-3 rounded-md">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
