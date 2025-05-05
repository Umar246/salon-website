import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const categories = [
  "Atheistic Medicine",
  "Barbershop",
  "Dentist",
  "Gym",
  "Spa & Wellness",
  "Beauty Salon",
  "Physiotherapy",
  "Designer",
];

export default function BussinessCategory({ next, updateData }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSelect = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const isValid = selectedCategories.length > 0;
  const handleNext = () => {
    if (!isValid) return toast.error("Please select at least one category.");
    updateData(selectedCategories);
    next();
  };

  return (
    <div className="flex flex-col items-center justify-between gap-4 min-h-screen py-4 md:p-8">
      <h2 className=" text-base text-center md:text-start md:text-xl text-primary font-mulish font-bold mb-4">
        Choose your business category
      </h2>

      <div className="w-full max-w-xs bg-white shadow-md rounded-xl p-6">
        {categories.map((category, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 space-x-2">
              <Checkbox
                id={`category-${index}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleSelect(category)}
                className="border-gray-400 text-primary data-[state=checked]:bg-primary data-[state=checked]:border-green-600"
              />
              <label
                htmlFor={`category-${index}`}
                className="text-sm font-mulish"
              >
                {category}
              </label>
            </div>
            <div
              className={`border-b my-4 border-gray-300 ${
                index === 7 && "hidden"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between w-full  mt-4">
        <Button
          disabled={true}
          variant="outline"
          className="text-[#939393] animated-btn font-normal px-8 md:px-12 rounded-sm"
        >
          Back
        </Button>
        <Button
          disabled={!isValid}
          onClick={handleNext}
          className="bg-secondary animated-btn hover:bg-amber-600 font-normal px-8 md:px-12 rounded-sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

BussinessCategory.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};
