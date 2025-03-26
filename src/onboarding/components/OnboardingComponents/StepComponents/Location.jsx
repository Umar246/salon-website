import { useState } from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { IoArrowBack } from "react-icons/io5";
import { Input } from "@/components/ui/input";

const libraries = ["places"];

function Location() {
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 });
  // const [isCurrentLocationLoading, setIsCurrentLocationLoading] =
  //   useState(false);
  const [showManualForm, setShowManualForm] = useState(false);
  const [inputValue, setInputValue] = useState(""); // New state for input value

  const handlePlaceSelect = () => {
    if (autocomplete) {
      // setIsCurrentLocationLoading(true);
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
        setInputValue(place.formatted_address); // Update input value state
        map.panTo(place.geometry.location);
      }
      // setIsCurrentLocationLoading(false);
    }
  };

  // const getCurrentLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       async (position) => {
  //         const { latitude, longitude } = position.coords;

  //         const geocoder = new window.google.maps.Geocoder();
  //         const latLng = { lat: latitude, lng: longitude };

  //         geocoder.geocode({ location: latLng }, (results, status) => {
  //           if (status === "OK" && results[0]) {
  //             setInputValue(results[0].formatted_address); // ✅ Set input value
  //             setLocation({ lat: latitude, lng: longitude });
  //             map.panTo(latLng);
  //           } else {
  //             console.error("Geocoder failed due to:", status);
  //           }
  //         });
  //       },
  //       (error) => {
  //         console.error("Error getting location:", error.message);
  //       }
  //     );
  //   } else {
  //     alert("Geolocation is not supported by your browser.");
  //   }
  // };

  return (
    <div className="py-3">
      {!showManualForm ? (
        <div className="flex flex-col items-center justify-between min-h-screen">
          <div className="flex flex-col items-center gap-1 w-full">
            <h2 className=" text-base text-center md:text-start md:text-xl text-primary font-mulish font-bold mb-4">
              Add location
            </h2>
            <LoadScript
              googleMapsApiKey="AIzaSyCmwSko3LqQ5woNxAvfRYjgNw-I1gCnRRI"
              libraries={libraries}
            >
              <div className="relative w-full max-w-sm mx-auto h-[300px] rounded-lg overflow-hidden">
                {/* ✅ Input ko map ke andar lekar aaye */}
                <div className="absolute top-2 md:top-6 left-2 right-2 md:left-12 md:right-12 z-10">
                  <Autocomplete
                    onLoad={setAutocomplete}
                    onPlaceChanged={handlePlaceSelect}
                    className="focus:!ring-0 focus:!ring-secondary"
                  >
                    <input
                      type="text"
                      id="pickup-location"
                      className="border border-gray-300 bg-[#F8F8FE] text-gray-900 focus:!ring-0 focus:!ring-secondary  text-sm md:text-base p-2.5 md:p-2.5 rounded-lg block w-full"
                      placeholder={"Manchester Airport (MAN), UK"}
                      value={inputValue} // ✅ Bind input value to state
                      onChange={(e) => setInputValue(e.target.value)}
                      required
                    />
                  </Autocomplete>
                  <div className="absolute inset-y-0 end-0  flex items-center ">
                    <button
                      type="button"
                      className="bg-[#e5a716] hover:text-yellow-600 p-3 md:p-3 rounded-r-lg"
                      // onClick={getCurrentLocation}
                    >
                      <FaLocationCrosshairs
                        size={20}
                        className="text-neutral"
                      />
                    </button>
                  </div>
                </div>

                {/* Google Map */}
                <GoogleMap
                  mapContainerStyle={{
                    width: "100%",
                    height: "100%",
                  }}
                  zoom={18}
                  center={location}
                  onLoad={(map) => setMap(map)}
                />
              </div>
            </LoadScript>
            {/* + Add Manually Button */}
            <button
              onClick={() => setShowManualForm(true)}
              className="mt-4 text-secondary cursor-pointer hover:text-amber-600"
            >
              + Add Manually
            </button>
          </div>
          <Button className="bg-secondary animated-btn hover:bg-amber-600 font-normal px-8 md:px-12 rounded-sm">
            Save
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between min-h-screen">
          <div className="w-full flex flex-col gap-5 md:gap-10">
            <div className="flex items-center w-full">
              <button
                onClick={() => setShowManualForm(false)}
                className="text-3xl text-[#242424] cursor-pointer"
              >
                <IoArrowBack />
              </button>
              <h2 className="text-base text-center w-full md:text-xl text-primary font-mulish font-bold ">
                Add Your Location Manually
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-mulish text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Write your email address..."
                  className="mt-3 bg-[#F8F8FE] shadow-none border-0 h-10 md:h-12 focus:!ring-1 focus:!ring-secondary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-mulish text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Write your email address..."
                  className="mt-3 bg-[#F8F8FE] shadow-none border-0 h-10 md:h-12 focus:!ring-1 focus:!ring-secondary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-mulish text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Write your email address..."
                  className="mt-3 bg-[#F8F8FE] shadow-none border-0 h-10 md:h-12 focus:!ring-1 focus:!ring-secondary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-mulish text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Write your email address..."
                  className="mt-3 bg-[#F8F8FE] shadow-none border-0 h-10 md:h-12 focus:!ring-1 focus:!ring-secondary"
                  required
                />
              </div>

              {/* <input
                type="text"
                placeholder="Write street & number..."
                className="p-2 border rounded w-full"
              />
              <select className="p-2 border rounded w-full">
                <option value="">Select city</option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Los Angeles">Los Angeles</option>
              </select>
              <input
                type="text"
                placeholder="Write zip code..."
                className="p-2 border rounded w-full"
              /> */}
            </div>
          </div>
          <Button className="bg-secondary animated-btn hover:bg-amber-600 font-normal px-8 md:px-12 rounded-sm">
            Save
          </Button>
        </div>
      )}
    </div>
  );
}

export default Location;
