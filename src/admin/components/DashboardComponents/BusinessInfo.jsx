import { useEffect, useState } from "react";
import { supabase } from "@/config/supabaseClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";
import { useBussinessProfile } from "@/admin/hooks/useBussinessProfile";
import BussinessInfoEditModal from "./BussinessInfoEditModal";

export default function BusinessInfo() {
  const { userProfile, loadingProfile, error } = useBussinessProfile();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editSection, setEditSection] = useState(""); // categories / location / hours
  const [formData, setFormData] = useState({});
  const [currentProfile, setCurrentProfile] = useState(null);

  useEffect(() => {
    if (userProfile?.[0]) setCurrentProfile(userProfile[0]);
  }, [userProfile]);

  if (loadingProfile) return <p>Loading business info…</p>;
  if (error) return <p className="text-red-600">Error: {error.message}</p>;
  if (!currentProfile) return <p>No profile data available.</p>;

  const { id, categories = [], location = {}, hours = [] } = currentProfile;
  const fullAddress = `${location.address}, Street #${location.street}, ${location.city}`;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    fullAddress
  )}&output=embed`;

  const handleEditClick = (section) => {
    setEditSection(section);
    if (section === "location") {
      setFormData({
        address: location.address,
        street: location.street,
        city: location.city,
      });
    } else if (section === "categories") {
      setFormData({ categories: categories.join(", ") }); // comma separated string
    }
    setIsEditOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    let updated = {};

    if (editSection === "location") {
      updated.location = {
        address: formData.address,
        street: formData.street,
        city: formData.city,
      };
    } else if (editSection === "categories") {
      updated.categories = formData.categories.split(",").map((c) => c.trim());
    }

    const { error } = await supabase
      .from("onboarding_profiles")
      .update(updated)
      .eq("id", id);

    if (error) {
      console.error("Update failed", error);
    } else {
      setIsEditOpen(false);
      location.reload(); // Or better: re-fetch userProfile
    }
  };

  return (
    <div className="space-y-6 p-3 md:p-6">
      <h2 className="text-3xl font-bold">Business Info</h2>

      {/* Edit Modal */}
      <BussinessInfoEditModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        title={`Edit ${editSection}`}
        formData={formData}
        onChange={handleChange}
        onSave={handleSave}
      />

      {/* Categories */}
      <Card>
        <div className="flex justify-between items-center px-8">
          <CardTitle>Categories</CardTitle>
          <Button
            size={"sm"}
            variant="outline"
            className="bg-secondary text-white hover:bg-amber-600 hover:text-white"
            onClick={() => handleEditClick("categories")}
          >
            <Edit2 size={16} /> <span>Edit</span>
          </Button>
        </div>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <div className="flex justify-between items-center px-8">
          <CardTitle>Location</CardTitle>
          <Button
            size="sm"
            variant="outline"
            className="bg-secondary text-white hover:bg-amber-600 hover:text-white"
            onClick={() => handleEditClick("location")}
          >
            <Edit2 size={16} /> <span>Edit</span>
          </Button>
        </div>
        <CardContent className="space-y-4">
          <p className="text-gray-700">{fullAddress}</p>
          <div className=" h-[300px] rounded-lg overflow-hidden ">
            <iframe
              title="Shop Location"
              src={mapSrc}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Working Hours (You can expand editing later) */}
      <Card>
        <CardHeader className="flex justify-between ">
          <CardTitle>Working Hours</CardTitle>
          {/* Working Hours editing can be added similar way */}
        </CardHeader>
        <CardContent>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="px-2 py-1">Day</th>
                <th className="px-2 py-1">Open</th>
                <th className="px-2 py-1">Close</th>
              </tr>
            </thead>
            <tbody>
              {hours
                .filter((h) => h.enabled)
                .map(({ day, endTime, openTime }) => (
                  <tr key={day} className="border-b hover:bg-gray-50">
                    <td className="px-2 py-1">{day}</td>
                    <td className="px-2 py-1">{openTime || "—"}</td>
                    <td className="px-2 py-1">{endTime}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
