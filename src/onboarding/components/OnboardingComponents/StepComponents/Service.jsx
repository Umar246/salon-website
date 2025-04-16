import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, X } from "lucide-react";
import PropTypes from "prop-types";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

function Service() {
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [showCategorySidebar, setShowCategorySidebar] = useState(false);
  const [showSubCategorySidebar, setShowSubCategorySidebar] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [newCategory, setNewCategory] = useState("");
  const [newSubCategory, setNewSubCategory] = useState("");
  const [services, setServices] = useState([]);
  const [serviceForm, setServiceForm] = useState({
    name: "",
    description: "",
    price: "",
    hours: "",
    minutes: "",
    category: "",
    subCategory: "",
  });

  const handleAddCategory = () => {
    if (!newCategory.trim()) return;
    setCategories([...categories, { name: newCategory, subCategories: [] }]);
    setNewCategory("");
    setShowCategorySidebar(false);
  };

  const handleAddSubCategory = () => {
    if (!newSubCategory.trim() || selectedCategoryIndex === null) return;
    const updated = [...categories];
    updated[selectedCategoryIndex].subCategories.push(newSubCategory);
    setCategories(updated);
    setNewSubCategory("");
    setShowSubCategorySidebar(false);
  };

  const handleAddService = () => {
    setServices([...services, serviceForm]);
    setServiceForm({
      name: "",
      description: "",
      price: "",
      hours: "",
      minutes: "",
      category: "",
      subCategory: "",
    });
    setShowServiceForm(false);
  };

  const Sidebar = ({ title, children, onClose }) => (
    <div className="fixed top-0 right-0 w-full sm:w-96 h-screen bg-white md:rounded-l-3xl shadow-lg z-50 p-6 overflow-y-auto transition-transform">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <Button variant="ghost" onClick={onClose}>
          <X />
        </Button>
      </div>
      <div className="flex flex-col justify-between h-[83vh]">{children}</div>
    </div>
  );

  Sidebar.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  return (
    <div className="py-4 px-2 sm:px-4 md:px-6 lg:px-8 font-mulish relative">
      {!showServiceForm ? (
        <div className="flex flex-col justify-between min-h-screen">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-1/2 w-full p-4 bg-white">
              <h2 className="text-lg sm:text-xl font-mulish font-bold text-emerald-900 mb-2">
                Category
              </h2>
              <Button
                className="cursor-pointer w-full py-6 md:mt-3 bg-transparent hover:bg-gray-50  text-gray-500 text-start"
                onClick={() => setShowCategorySidebar(true)}
              >
                <IoIosAddCircleOutline />
                <span>Add Category</span>
              </Button>
              <ul className="mt-4 space-y-2">
                {categories.map((cat, index) => (
                  <li key={index}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="font-medium">{cat.name}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="hover:bg-transparent cursor-pointer"
                          onClick={() => {
                            setSelectedCategoryIndex(index);
                            setShowSubCategorySidebar(true);
                          }}
                        >
                          <IoIosAddCircleOutline
                            size={32}
                            className="text-secondary cursor-pointer hover:text-amber-900 shadow-xl"
                          />
                        </Button>
                      </div>
                      <div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="hover:bg-transparent cursor-pointer text-gray-400"
                          onClick={() => {
                            setSelectedCategoryIndex(index);
                            setShowSubCategorySidebar(true);
                          }}
                        >
                          <RxCrossCircled />
                        </Button>
                      </div>
                    </div>
                    <div
                      className={`border-b border-gray-300 mx-3 ${
                        cat.length - 1 && "hidden"
                      } pb-2`}
                    ></div>
                    <ul className="ml-4 text-sm text-gray-600">
                      {cat.subCategories.map((sub, subIndex) => (
                        <li
                          key={subIndex}
                          className="flex justify-between items-center"
                        >
                          <span>↳ {sub}</span>
                          <span className="hover:bg-transparent text-base text-gray-400">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-transparent cursor-pointer text-gray-400"
                              onClick={() => {
                                setSelectedCategoryIndex(index);
                                setShowSubCategorySidebar(true);
                              }}
                            >
                              <RxCrossCircled />
                            </Button>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 w-full p-4 bg-white">
              <h2 className="text-lg sm:text-xl font-mulish font-bold text-emerald-900 mb-2">
                Services
              </h2>
              <Button
                className="cursor-pointer w-full py-6 md:mt-3 bg-transparent hover:bg-gray-50  text-gray-500 text-start"
                onClick={() => setShowServiceForm(true)}
              >
                <IoIosAddCircleOutline />
                <span>Add Service</span>
              </Button>
              <ul className="mt-4 space-y-3">
                {services.map((srv, idx) => (
                  <li key={idx} className="bg-gray-50 p-4 rounded-xl shadow-sm">
                    <h3 className="font-semibold">{srv.name}</h3>
                    <p className="text-sm">{srv.description}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm">
                      <span className="bg-emerald-900 text-white px-2 py-1 rounded">
                        ${srv.price}
                      </span>
                      <span className="border px-2 py-1 rounded">
                        {srv.hours}h {srv.minutes}m
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-between w-full mt-10">
            <Button
              variant="outline"
              className="text-[#939393] font-normal px-8 md:px-12 rounded-sm"
            >
              Back
            </Button>
            <Button className="bg-secondary hover:bg-amber-600 font-normal px-8 md:px-12 rounded-sm">
              Next
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-4 space-y-4">
          <Button
            variant="ghost"
            className="flex items-center text-sm"
            onClick={() => setShowServiceForm(false)}
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back
          </Button>

          <div className="bg-white rounded-2xl p-4 shadow space-y-4">
            <h2 className="font-semibold text-lg">Service Info</h2>
            <Input
              placeholder="Service Name"
              value={serviceForm.name}
              onChange={(e) =>
                setServiceForm({ ...serviceForm, name: e.target.value })
              }
            />
            <select
              value={serviceForm.category}
              onChange={(e) =>
                setServiceForm({ ...serviceForm, category: e.target.value })
              }
              className="w-full border rounded p-2"
            >
              <option value="">Select Category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
            <select
              value={serviceForm.subCategory}
              onChange={(e) =>
                setServiceForm({ ...serviceForm, subCategory: e.target.value })
              }
              className="w-full border rounded p-2"
            >
              <option value="">Select Sub-category</option>
              {categories
                .find((c) => c.name === serviceForm.category)
                ?.subCategories.map((sub, idx) => (
                  <option key={idx} value={sub}>
                    {sub}
                  </option>
                ))}
            </select>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow space-y-4">
            <h2 className="font-semibold text-lg">Price & Duration</h2>
            <Input
              placeholder="Enter Price ($)"
              type="number"
              value={serviceForm.price}
              onChange={(e) =>
                setServiceForm({ ...serviceForm, price: e.target.value })
              }
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Hours"
                type="number"
                value={serviceForm.hours}
                onChange={(e) =>
                  setServiceForm({ ...serviceForm, hours: e.target.value })
                }
              />
              <Input
                placeholder="Minutes"
                type="number"
                value={serviceForm.minutes}
                onChange={(e) =>
                  setServiceForm({ ...serviceForm, minutes: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-2">
            <Button variant="outline" onClick={() => setShowServiceForm(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddService}>Save</Button>
          </div>
        </div>
      )}

      {showCategorySidebar && (
        <Sidebar
          title="Add Category"
          onClose={() => setShowCategorySidebar(false)}
        >
          <div>
            <label className="block text-sm font-mulish text-gray-700">
              Category Name
            </label>
            <Input
              type="text"
              autoFocus
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              name="category"
              placeholder="Write"
              className="mt-3 bg-[#F8F8FE] shadow-none border-0 h-8 md:h-10 focus:!ring-1 focus:!ring-secondary"
              required
            />
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant="outline"
              className="px-8 md:px-10 text-gray-500"
              onClick={() => setShowCategorySidebar(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-secondary hover:bg-amber-600 px-8 md:px-10"
              onClick={handleAddCategory}
            >
              Save
            </Button>
          </div>
        </Sidebar>
      )}

      {showSubCategorySidebar && (
        <Sidebar
          title="Add Sub-category"
          onClose={() => setShowSubCategorySidebar(false)}
        >
          <div>
            <label className="block text-sm font-mulish text-gray-700">
              Sub-category Name
            </label>
            <Input
              type="text"
              autoFocus
              value={newSubCategory}
              onChange={(e) => setNewSubCategory(e.target.value)}
              name="subCategory"
              placeholder="Write"
              className="mt-3 bg-[#F8F8FE] shadow-none border-0 h-8 md:h-10 focus:!ring-1 focus:!ring-secondary"
              required
            />
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              variant="outline"
              className="px-8 md:px-10 text-gray-500"
              onClick={() => setShowSubCategorySidebar(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-secondary hover:bg-amber-600 px-8 md:px-10"
              onClick={handleAddSubCategory}
            >
              Save
            </Button>
          </div>
        </Sidebar>
      )}
    </div>
  );
}

export default Service;
