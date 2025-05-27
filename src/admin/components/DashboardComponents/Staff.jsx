// src/components/Staff.jsx
import  { useState } from "react";
// import { useBusinessProfile } from "@/admin/hooks/useBusinessProfile";
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

export default function Staff() {
  const { profile, loadingProfile, error, refetchProfile } =
    useBusinessProfile();
  const staffList = profile?.staff || [];
  const profileId = profile?.id;

  // Modal & form state (including status & role)
  const [openModal, setOpenModal] = useState(false);
  const [editingIdx, setEditingIdx] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    status: "available",  // default
  });

  const openForm = (idx = null) => {
    if (idx !== null) {
      setForm(staffList[idx]);
      setEditingIdx(idx);
    } else {
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        status: "available",
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
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  // Add / Update
  const handleSubmit = async () => {
    let newStaff = [...staffList];
    if (editingIdx !== null) {
      newStaff[editingIdx] = { ...newStaff[editingIdx], ...form };
    } else {
      newStaff.push(form);
    }

    const { error: updError } = await supabase
      .from("onboarding_profiles")
      .update({ staff: newStaff })
      .eq("id", profileId);

    if (updError) {
      toast.error("Save failed: " + updError.message);
    } else {
      await refetchProfile();
      toast.success(
        editingIdx !== null
          ? "Staff updated successfully"
          : "Staff added successfully"
      );
      closeForm();
    }
  };

  // Delete
  const handleDelete = async (idx) => {
    if (!confirm("Remove this staff member?")) return;
    const newStaff = staffList.filter((_, i) => i !== idx);
    const { error: delError } = await supabase
      .from("onboarding_profiles")
      .update({ staff: newStaff })
      .eq("id", profileId);

    if (delError) {
      toast.error("Remove failed: " + delError.message);
    } else {
      await refetchProfile();
      toast.success("Staff removed successfully");
    }
  };

  if (loadingProfile) return <p className="p-6">Loading…</p>;
  if (error) return <p className="p-6 text-red-600">{error.message}</p>;

  return (
    <div className="p-6 space-y-6 font-mulish">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Staff</h2>
        <Button
          className="bg-secondary hover:bg-amber-600 hover:text-white"
          onClick={() => openForm()}
        >
          + Add Staff
        </Button>
      </div>

      {/* Table */}
      {staffList.length === 0 ? (
        <p>No staff members yet!</p>
      ) : (
        <Card className="p-3 md:p-5">
          <Table>
            <TableCaption>Your salon staff</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staffList.map((s, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    {s.firstName} {s.lastName}
                  </TableCell>
                  <TableCell>{s.email}</TableCell>
                  <TableCell>{s.phone}</TableCell>
                  <TableCell>{s.role || "—"}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        s.status === "available"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {s.status}
                    </span>
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
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}

      {/* Add/Edit Modal */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-w-lg rounded-2xl bg-white p-6 shadow-lg">
          <DialogHeader className="flex items-center justify-between pb-4 mb-4 border-b">
            <DialogTitle className="text-2xl font-semibold">
              {editingIdx !== null ? "Edit Staff" : "Add Staff"}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              ["firstName", "text", "First Name"],
              ["lastName", "text", "Last Name"],
              ["email", "email", "Email"],
              ["phone", "tel", "Phone"],
              ["role", "text", "Role"],
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
            {/* Status dropdown spans full width */}
            <div className="flex flex-col md:col-span-2">
              <label
                htmlFor="status"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                value={form.status}
                onChange={onChange}
                className="bg-gray-50 p-2 rounded-md border"
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <Button variant="outline" onClick={closeForm}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-secondary text-white hover:bg-amber-600"
            >
              {editingIdx !== null ? "Update Staff" : "Add Staff"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
