import { useState } from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";

const libraries = ["places"];

export default function Location() {
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 }); // Default location (San Francisco)

  const handlePlaceSelect = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
        map.panTo(place.geometry.location);
      }
    }
  };

  return (
    <div className="py-3">
      <LoadScript
        googleMapsApiKey="AIzaSyCmwSko3LqQ5woNxAvfRYjgNw-I1gCnRRI"
        libraries={libraries}
      >
        {/* Search Box */}
        <Autocomplete
          onLoad={setAutocomplete}
          onPlaceChanged={handlePlaceSelect}
        >
          <input
            type="text"
            placeholder="Search location..."
            className="p-2 w-full border rounded mb-2"
          />
        </Autocomplete>

        {/* Google Map */}
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "300px",
            borderRadius: "10px",
          }}
          zoom={12}
          center={location}
          onLoad={(map) => setMap(map)}
        />
      </LoadScript>
    </div>
  );
}
