import { useState } from "react";
// import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";
// import { FaLocationCrosshairs } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
// import { IoArrowBack } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

// const libraries = ["places"];

function Service() {
  // const [map, setMap] = useState(null);
  // const [autocomplete, setAutocomplete] = useState(null);
  // const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 });
  // const [isCurrentLocationLoading, setIsCurrentLocationLoading] =
  //   useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  // const [inputValue, setInputValue] = useState(""); // New state for input value

  // const handlePlaceSelect = () => {
  //   if (autocomplete) {
  //     // setIsCurrentLocationLoading(true);
  //     const place = autocomplete.getPlace();
  //     if (place.geometry) {
  //       setLocation({
  //         lat: place.geometry.location.lat(),
  //         lng: place.geometry.location.lng(),
  //       });
  //       setInputValue(place.formatted_address); // Update input value state
  //       map.panTo(place.geometry.location);
  //     }
  //     // setIsCurrentLocationLoading(false);
  //   }
  // };

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

  
  const [showAddService, setShowAddService] = useState(false);
  const [serviceData, setServiceData] = useState({
    name: "",
    category: "",
    subCategory: "",
    price: "",
    durationHour: "",
    durationMin: "",
  });

  const handleChange = (e) => {
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Service Saved:", serviceData);
    setShowAddService(false);
  };

  return (
    <div className="py-3">
      {!showServiceForm ? (
      <div>Categories and Services part</div>
      ) : (
        
          <div className="p-6 space-y-4">
            <button
              className="flex items-center text-sm text-gray-600 hover:text-black"
              onClick={() => setShowAddService(false)}
            >
              <ArrowLeft className="w-4 h-4 mr-1" /> Back
            </button>
    
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-4 shadow space-y-4">
              <h2 className="font-semibold text-lg">Service Info</h2>
              <Input
                placeholder="Service Name"
                name="name"
                value={serviceData.name}
                onChange={handleChange}
              />
              <Input
                placeholder="Category"
                name="category"
                value={serviceData.category}
                onChange={handleChange}
              />
              <Input
                placeholder="Sub-category"
                name="subCategory"
                value={serviceData.subCategory}
                onChange={handleChange}
              />
            </div>
    
            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-4 shadow space-y-4">
              <h2 className="font-semibold text-lg">Price</h2>
              <Input
                placeholder="Enter Price ($)"
                name="price"
                type="number"
                value={serviceData.price}
                onChange={handleChange}
              />
            </div>
    
            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-4 shadow space-y-4">
              <h2 className="font-semibold text-lg">Duration</h2>
              <div className="flex gap-4">
                <Input
                  placeholder="Hours"
                  name="durationHour"
                  type="number"
                  value={serviceData.durationHour}
                  onChange={handleChange}
                />
                <Input
                  placeholder="Minutes"
                  name="durationMin"
                  type="number"
                  value={serviceData.durationMin}
                  onChange={handleChange}
                />
              </div>
            </div>
    
            {/* Save Button */}
            <div className="pt-4">
              <Button onClick={handleSubmit} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Save Service
              </Button>
            </div>
          </div>
        
      )}
    </div>
  );
}

export default Service;
