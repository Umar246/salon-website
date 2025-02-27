import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Plus, Minus, Search } from "lucide-react";
import { AiOutlineFlag } from "react-icons/ai";
import { IoList } from "react-icons/io5";
import { GiProgression } from "react-icons/gi";
import { HiOutlineBookOpen } from "react-icons/hi2";

const categories = [
  { id: "getting-started", title: "Getting Started", icon: <AiOutlineFlag /> },
  { id: "client-questions", title: "Client Questions", icon: <IoList /> },
  {
    id: "business-questions",
    title: "Business Questions",
    icon: <GiProgression />,
  },
  { id: "usage-guides", title: "Usage Guides", icon: <HiOutlineBookOpen /> },
];

const faqData = {
  "getting-started": [
    {
      question: "Do I need to verify my email?",
      answer:
        "Yes, email verification helps in securing your account. A verification link will be sent to your registered email after signup.",
    },
    {
      question: "Can I use the platform without an account?",
      answer:
        "Some features are accessible without an account, but to fully use all functionalities, creating an account is recommended.",
    },
    {
      question: "What are the minimum requirements to sign up?",
      answer:
        "You need a valid email address and a secure password. Some additional details might be required depending on the platform.",
    },
    {
      question: "How do I change my email after signing up?",
      answer:
        "Go to your account settings and look for the email update option. You may need to verify your new email before it’s updated.",
    },
  ],
  "client-questions": [
    {
      question: "How to contact support?",
      answer:
        "You can contact support through the live chat feature or email us at support@example.com. We are available 24/7 to assist you.",
    },
    {
      question: "What is the response time for support tickets?",
      answer:
        "Our average response time is within 24 hours. Urgent queries via live chat get priority responses within a few minutes.",
    },
    {
      question: "Can I schedule a call with support?",
      answer:
        "Yes, you can request a call by submitting a request through the support section. A representative will contact you shortly.",
    },
    {
      question: "Is customer support available on weekends?",
      answer:
        "Yes, our support team is available 24/7, including weekends and holidays, to assist you with any issues.",
    },
  ],
  "business-questions": [
    {
      question: "How to create an invoice?",
      answer:
        "Go to the billing section and select ‘Create Invoice’. Fill in the required details and download or send it directly to clients.",
    },
    {
      question: "Can I add custom tax rates to my invoices?",
      answer:
        "Yes, you can set up custom tax rates from your invoice settings. This helps in generating accurate invoices as per regulations.",
    },
    {
      question: "Is there an option to automate invoicing?",
      answer:
        "Yes, you can enable recurring invoices to automatically bill clients at set intervals, like weekly or monthly.",
    },
    {
      question: "Can I send invoices in different currencies?",
      answer:
        "Yes, you can select your preferred currency while creating an invoice. Multi-currency support is available for international clients.",
    },
  ],
  "usage-guides": [
    {
      question: "How to use the dashboard?",
      answer:
        "The dashboard provides a quick overview of your account activities, including transactions, notifications, and account statistics.",
    },
    {
      question: "Where can I find tutorials on using the platform?",
      answer:
        "Visit the help center for step-by-step tutorials and video guides on various features of the platform.",
    },
    {
      question: "Can I customize my dashboard view?",
      answer:
        "Yes, you can rearrange widgets, hide or show sections, and personalize your dashboard according to your needs.",
    },
    {
      question: "How do I enable notifications?",
      answer:
        "Go to your settings and enable notifications to receive updates about important activities on your account.",
    },
  ],
};

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState("getting-started");
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <div className="w-[85%] mx-auto py-10 md:py-16 lg:py-20">
      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <div className="relative mb-3">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            className="w-full md:w-[50%] focus:outline-secondary focus:outline-1 bg-[#F2F2F2] border-none p-3 pl-10 rounded-lg border border-gray-300"
            placeholder="Search for an answer"
          />
        </div>
      </motion.div>

      {/* Category Selection */}
      <p className="text-gray-600 mb-8">
        or just choose a category to quickly find the help you need.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-4 lg:me-20 font-playfair">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
          >
            <Card
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "flex flex-col items-center py-6 px-2 border rounded-xl cursor-pointer",
                selectedCategory === cat.id
                  ? "border-secondary"
                  : "border-gray-200"
              )}
            >
              <span
                className={
                  selectedCategory === cat.id
                    ? "text-secondary text-4xl"
                    : "text-gray-400 text-4xl"
                }
              >
                {cat.icon}
              </span>
              <span
                className={cn(
                  "font-bold",
                  selectedCategory === cat.id
                    ? "text-secondary"
                    : "text-gray-400"
                )}
              >
                {cat.title}
              </span>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <Card className="bg-white px-6 py-12 rounded-lg shadow-none">
          {/* Selected Category Title */}
          <h2 className="text-2xl font-bold font-playfair text-[#242424]">
            {categories.find((cat) => cat.id === selectedCategory)?.title}
          </h2>
          <p className="mb-2 -mt-3 text-[#242424] font-mulish">
            Find answers related to{" "}
            {categories.find((cat) => cat.id === selectedCategory)?.title}.
          </p>

          <div className="space-y-8 font-mulish">
            {faqData[selectedCategory].map((faq, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center border-b border-gray-300 pb-2 cursor-pointer"
                  onClick={() =>
                    setOpenQuestion(openQuestion === index ? null : index)
                  }
                >
                  <p>
                    Q {index + 1}: {faq.question}
                  </p>
                  {openQuestion === index ? (
                    <Minus className="text-primary" />
                  ) : (
                    <Plus className="text-primary" />
                  )}
                </div>
                {openQuestion === index && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-sm"
                  >
                    A: {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
