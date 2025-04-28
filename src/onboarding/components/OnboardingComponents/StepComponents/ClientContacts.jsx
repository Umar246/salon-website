import { useRef, useState } from "react";
import Papa from "papaparse";
import { Button } from "@/components/ui/button";
import { LuSquareArrowUp } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import PropTypes from "prop-types";

export default function ClientContacts({ next, prev, updateData }) {
  const fileInputRef = useRef(null);
  const [clients, setClients] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const parsed = result.data.map((row) => ({
          name: row.name,
          email: row.email,
          image: row.imageUrl, // default avatar
        }));
        setClients(parsed);
      },
    });
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeClient = (index) => {
    setClients(clients.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    updateData(clients);
    next();
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="h-full">
        <div className="flex justify-between items-center">
          <h2 className="text-base text-center w-full md:text-xl text-primary font-mulish font-bold">
            Upload Clients Contacts
          </h2>
          {/* <button className="text-gray-400 underline hover:text-secondary text-sm">
            Skip
          </button> */}
        </div>

        {/* Import file code */}
        <div className="flex flex-col lg:flex-row gap-10 md:w-[90%] mx-auto md:gap-14 lg:gap-8 mt-10">
          {/* Upload Box */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <div
              onClick={triggerFileInput}
              className={`cursor-pointer border border-gray-300 rounded-xl p-6 h-46 flex flex-col justify-center items-center text-center hover:border-secondary`}
            >
              <div className="text-4xl text-[#939393] mb-3">
                <LuSquareArrowUp size={48} />
              </div>
              <p className="text-gray-600 font-molish">
                Click to upload contacts of file your clients
              </p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".csv"
                className="hidden"
              />
            </div>
            <div className="flex items-center gap-6 mt-6">
              <Button className="bg-secondary hover:bg-amber-600 py-5 w-full rounded-sm">
                Click to Download CSV File
              </Button>
            </div>
          </div>

          {/* Contacts List */}
          <div className="w-full lg:w-2/3">
            <h3 className="font-semibold text-[#242424] font-mulish text-lg mb-4">
              Clients Contacts List
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white rounded-xl p-4"
                  style={{ boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={client.image}
                      alt="avatar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{client.name}</p>
                      <p className="text-sm text-gray-500">{client.email}</p>
                    </div>
                  </div>
                  <button
                    className="text-gray-400 hover:text-secondary text-xl"
                    onClick={() => removeClient(index)}
                  >
                    <RxCrossCircled size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full mt-10">
        <Button
          onClick={prev}
          variant="outline"
          className="text-[#939393] font-normal px-8 md:px-12 rounded-sm"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          className="bg-secondary hover:bg-amber-600 font-normal px-8 md:px-12 rounded-sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

ClientContacts.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};
