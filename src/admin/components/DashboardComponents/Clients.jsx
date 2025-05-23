// src/components/Clients.jsx
import { useState } from "react";
// import { useBusinessProfile } from "@/admin/hooks/useBusinessProfile";
import { supabase } from "@/config/supabaseClient";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { useBusinessProfile } from "@/admin/hooks/useBussinessProfile";

export default function Clients() {
  const { profile, loadingProfile, error, refetchProfile } =
    useBusinessProfile();
  const clients = profile?.clients || [];
  const profileId = profile?.id;

  // Modal state for Add/Edit
  const [openModal, setOpenModal] = useState(false);
  const [editingIdx, setEditingIdx] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    profile_picture: "",
  });

  const openForm = (idx = null) => {
    if (idx !== null) {
      setForm(clients[idx]);
      setEditingIdx(idx);
    } else {
      setForm({ name: "", email: "", profile_picture: "" });
      setEditingIdx(null);
    }
    setOpenModal(true);
  };
  const closeForm = () => {
    setOpenModal(false);
    setEditingIdx(null);
  };
  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // Add / Update client
  const handleSubmit = async () => {
    let newClients = [...clients];
    if (editingIdx !== null) {
      newClients[editingIdx] = { ...newClients[editingIdx], ...form };
    } else {
      newClients.push(form);
    }

    const { error: updError } = await supabase
      .from("onboarding_profiles")
      .update({ clients: newClients })
      .eq("id", profileId);

    if (updError) {
      toast.error("Save failed: " + updError.message);
    } else {
      await refetchProfile();
      toast.success(editingIdx !== null ? "Client updated" : "Client added");
      closeForm();
    }
  };

  // Remove client
  const handleDelete = async (idx) => {
    if (!confirm("Remove this client?")) return;
    const newClients = clients.filter((_, i) => i !== idx);
    const { error: delError } = await supabase
      .from("onboarding_profiles")
      .update({ clients: newClients })
      .eq("id", profileId);

    if (delError) {
      toast.error("Remove failed: " + delError.message);
    } else {
      await refetchProfile();
      toast.success("Client removed");
    }
  };

  

  if (loadingProfile) return <p className="p-6">Loading…</p>;
  if (error) return <p className="p-6 text-red-600">{error.message}</p>;

  return (
    <div className="p-6 space-y-6 font-mulish">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Clients</h2>
        <Button
          onClick={() => openForm()}
          className="bg-secondary hover:bg-amber-600 hover:text-white"
        >
          + Add Client
        </Button>
      </div>

      {/* Clients Grid */}
      {/* Clients Grid */}
      {clients.length > 0 && (
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {clients.map((c, idx) => (
              <Card
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-2xl shadow"
              >
                <img
                  src={c.profile_picture || "/default-avatar.png"}
                  alt={c.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-medium text-lg">{c.name}</h3>
                  <p className="text-sm text-gray-600">{c.email}</p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openForm(idx)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-red-600"
                    onClick={() => handleDelete(idx)}
                  >
                    Remove
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-w-md rounded-2xl bg-white p-6 shadow-lg">
          <DialogHeader className="flex items-center justify-between pb-4 mb-4">
            <DialogTitle className="text-2xl font-semibold">
              {editingIdx !== null ? "Edit Client" : "Add Client"}
            </DialogTitle>
         
          </DialogHeader>

          <div className="space-y-4">
            {[
              ["name", "text", "Full Name"],
              ["email", "email", "Email"],
              ["profile_picture", "url", "Profile Picture URL"],
            ].map(([field, type, label]) => (
              <div key={field} className="flex flex-col">
                <label
                  htmlFor={field}
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  {label}
                </label>
                <Input
                  id={field}
                  name={field}
                  type={type}
                  value={form[field] || ""}
                  onChange={onChange}
                  className="bg-gray-50"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <Button variant="outline" onClick={closeForm}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-secondary text-white hover:bg-amber-600"
            >
              {editingIdx !== null ? "Update Client" : "Add Client"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
