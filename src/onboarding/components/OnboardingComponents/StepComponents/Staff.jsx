import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosAddCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

export default function AddStaffStep({ next, prev, updateData }) {
  const [staffList, setStaffList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [staff, setStaff] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setStaff({ ...staff, [e.target.name]: e.target.value });
  };

  const handleAddStaff = (e) => {
    e.preventDefault();
    if (!staff.firstName || !staff.email || !staff.phone) {
      alert("Please fill all required fields");
      return;
    }
    setStaffList((prev) => [...prev, staff]);
    setStaff({ firstName: "", lastName: "", email: "", phone: "" });
    setModalOpen(false);
  };

  const handleDelete = (i) => {
    setStaffList((prev) => prev.filter((_, idx) => idx !== i));
  };

  const isValid = () => staffList.length > 0;

  const handleNext = () => {
    if (!isValid()) return toast.error("Add at least one staff member");
    updateData(staffList);
    next();
  };

  return (
    <div className="flex flex-col justify-between min-h-screen font-mulish">
      <div className="p-4 w-full max-w-md mx-auto space-y-4">
        <h2 className="text-center text-xl font-bold text-teal-800">
          Add Staff Members
        </h2>

        <Button
          className="cursor-pointer w-full py-6 md:mt-3 bg-transparent hover:bg-gray-50  text-gray-500 text-start"
          onClick={() => setModalOpen(true)}
        >
          <IoIosAddCircleOutline />
          <span>Add Staff Member</span>
        </Button>

        {staffList.map((s, index) => (
          <div
            key={index}
            className="relative bg-white p-4 rounded-xl shadow flex flex-col space-y-1"
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-gray-400"
              onClick={() => handleDelete(index)}
            >
              <RxCrossCircled />
            </Button>
            <p className="font-medium text-[#242424]">
              {s.firstName} {s.lastName}
            </p>
            <p className="text-sm text-secondary">{s.email}</p>
            <p className="text-sm text-gray-500">{s.phone}</p>
          </div>
        ))}

        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="sm:max-w-md rounded-xl">
            <DialogHeader>
              <DialogTitle>Add Staff Member</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleAddStaff}>
              <div className="space-y-4 md:space-y-6 mt-2">
                <Input
                  name="firstName"
                  className=" bg-[#F8F8FE] shadow-none border-0 h-10 md:h-12 focus:!ring-1 focus:!ring-secondary"
                  placeholder="First Name"
                  value={staff.firstName}
                  onChange={handleChange}
                  required="true"
                />
                <Input
                  name="lastName"
                  className=" bg-[#F8F8FE] shadow-none border-0 h-10 md:h-12 focus:!ring-1 focus:!ring-secondary"
                  placeholder="Last Name"
                  value={staff.lastName}
                  onChange={handleChange}
                  required="true"
                />
                <Input
                  name="email"
                  className=" bg-[#F8F8FE] shadow-none border-0 h-10 md:h-12 focus:!ring-1 focus:!ring-secondary"
                  placeholder="Email"
                  value={staff.email}
                  onChange={handleChange}
                  required="true"
                />
                <Input
                  name="phone"
                  className=" bg-[#F8F8FE] shadow-none border-0 h-10 md:h-12 focus:!ring-1 focus:!ring-secondary"
                  placeholder="Phone Number"
                  value={staff.phone}
                  onChange={handleChange}
                  required="true"
                />
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <Button
                  className="text-[#939393] rounded-sm px-8 md:px-12"
                  variant="outline"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-secondary hover:bg-amber-600 rounded-sm px-8 md:px-12"
                  type="submit"
                >
                  Add
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex justify-between w-full mt-10">
        <Button
          onClick={prev}
          variant="outline"
          className="text-[#939393]  px-8 md:px-12 rounded-sm"
        >
          Back
        </Button>
        <Button
          disabled={!isValid()}
          onClick={handleNext}
          className="bg-secondary hover:bg-amber-600 font-normal px-8 md:px-12 rounded-sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

AddStaffStep.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};
