// src/components/Services.jsx
import { useState } from "react";
// import { useBusinessProfile } from "@/hooks/useFullUserList";
import { supabase } from "@/config/supabaseClient";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
// import { useBusinessProfile } from "@/admin/hooks/useBussinessProfile";
import { toast } from "react-toastify";
import { useBusinessProfile } from "@/admin/hooks/useBussinessProfile";
import { Card } from "@/components/ui/card";
// import { X } from "lucide-react";

export default function Services() {
  const { profile, loadingProfile, error, refetchProfile } =
    useBusinessProfile();
  const services = profile?.services || [];
  const profileId = profile?.id;

  // Modal & form state
  const [openModal, setOpenModal] = useState(false);
  const [editingIdx, setEditingIdx] = useState(null);
  const [form, setForm] = useState({
    name: "",
    category: "",
    subCategory: "",
    description: "",
    price: "",
    hours: "",
    minutes: "",
  });

  const openForm = (idx = null) => {
    if (idx !== null) {
      setForm(services[idx]);
      setEditingIdx(idx);
    } else {
      setForm({
        name: "",
        category: "",
        subCategory: "",
        description: "",
        price: "",
        hours: "",
        minutes: "",
      });
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

  // Save (Add or Update)
  const handleSubmit = async () => {
    let newServices = [...services];
    const payload = {
      ...form,
      price: Number(form.price),
      hours: Number(form.hours),
      minutes: Number(form.minutes),
    };

    if (editingIdx !== null) {
      newServices[editingIdx] = { ...newServices[editingIdx], ...payload };
    } else {
      newServices.push(payload);
    }

    const { error: updError } = await supabase
      .from("onboarding_profiles")
      .update({ services: newServices })
      .eq("id", profileId);

    if (updError) {
      alert("Save failed: " + updError.message);
    } else {
      await refetchProfile();
      closeForm();
      toast.success(
        editingIdx !== null
          ? "Service updated successfully"
          : "Service added successfully"
      );
    }
  };

  // Delete
  const handleDelete = async (idx) => {
    // if (!confirm("Delete this service?")) return;
    const newServices = services.filter((_, i) => i !== idx);

    const { error: delError } = await supabase
      .from("onboarding_profiles")
      .update({ services: newServices })
      .eq("id", profileId);

    if (delError) {
      alert("Delete failed: " + delError.message);
    } else {
      await refetchProfile();
      toast.success("Service deleted successfully");
    }
  };

  if (loadingProfile) return <p className="p-6">Loading…</p>;
  if (error) return <p className="p-6 text-red-600">{error.message}</p>;

  return (
    <div className="p-3 md:p-6 space-y-6 font-mulish">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Services</h2>
        <Button
          className="bg-secondary hover:bg-amber-600 hover:text-white"
          onClick={() => openForm()}
        >
          + Add Service
        </Button>
      </div>

      {services.length === 0 ? (
        <p>No services yet!</p>
      ) : (
        <Card className={"p-3 md:p-5"}>
          <Table>
            <TableCaption>Your salon services</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Sub-Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((svc, idx) => (
                <TableRow key={idx}>
                  <TableCell>{svc.name}</TableCell>
                  <TableCell>{svc.category}</TableCell>
                  <TableCell>{svc.subCategory}</TableCell>
                  <TableCell>{svc.description}</TableCell>
                  <TableCell>${svc.price}</TableCell>
                  <TableCell>
                    {svc.hours}h {svc.minutes}m
                  </TableCell>
                  <TableCell className="text-right space-x-2">
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
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}

      {/* Modal for Add/Edit */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-w-xl rounded-2xl bg-white p-6 shadow-lg">
          {/* Header with close icon */}
          <DialogHeader className="flex items-center justify-between pb-4 mb-4">
            <DialogTitle className="text-2xl font-semibold">
              {editingIdx !== null ? "Edit Service" : "Add Service"}
            </DialogTitle>
            {/* <button
              onClick={closeForm}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button> */}
          </DialogHeader>

          {/* Form grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ["name", "text"],
              ["category", "text"],
              ["subCategory", "text"],
              ["description", "text"],
              ["price", "number"],
              ["hours", "number"],
              ["minutes", "number"],
            ].map(([field, type]) => (
              <div key={field} className="flex flex-col">
                <label
                  htmlFor={field}
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  {field === "subCategory"
                    ? "Sub-Category"
                    : field.charAt(0).toUpperCase() + field.slice(1)}
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

          {/* Actions */}
          <div className="mt-6 flex justify-end space-x-3">
            <Button variant="outline" onClick={closeForm}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-secondary text-white hover:bg-amber-600"
            >
              {editingIdx !== null ? "Update Service" : "Add Service"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
