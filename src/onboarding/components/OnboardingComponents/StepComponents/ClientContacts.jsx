import { useRef, useState } from "react";
import Papa from "papaparse";
import { Button } from "@/components/ui/button";

export default function ClientContacts() {
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
          image: "https://randomuser.me/api/portraits/men/32.jpg", // default avatar
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
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="h-full">
        <div className="flex justify-between items-center">
          <h2 className="text-base text-center w-full md:text-xl text-primary font-mulish font-bold">
            Upload Clients Contactss
          </h2>
          <button className="text-gray-400 underline hover:text-secondary text-sm">
            Skip
          </button>
        </div>

        {/* Import file code */}
        <div className="flex flex-col md:flex-row gap-6  mt-10">
          {/* Upload Box */}
          <div
            onClick={triggerFileInput}
            className="cursor-pointer border border-gray-300 rounded-xl p-6 w-full md:w-1/2 h-64 flex flex-col justify-center items-center text-center hover:border-orange-400"
          >
            <div className="text-4xl mb-2">⬆️</div>
            <p className="text-gray-600">
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

          {/* Contacts List */}
          <div className="w-full md:w-1/2">
            <h3 className="font-semibold text-lg mb-4">
              Clients Contacts List
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white rounded-xl p-3 shadow-sm"
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
                    className="text-gray-400 hover:text-red-500 text-xl"
                    onClick={() => removeClient(index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download CSV + How to Use */}
        <div className="flex items-center gap-6 mt-6">
          <Button className="bg-orange-400 hover:bg-orange-500">
            Click to Download CSV File
          </Button>
          <a href="#" className="text-orange-500 underline text-sm">
            How to use?
          </a>
        </div>
      </div>

      {/* Navigation Buttons */}
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
  );
}
