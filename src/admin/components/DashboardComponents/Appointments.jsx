import { useState, useMemo } from "react";
import { supabase } from "@/config/supabaseClient";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import { format } from "date-fns";
import PropTypes from "prop-types";
import { useBusinessProfile } from "@/admin/hooks/useBussinessProfile";
// import { icons } from "lucide-react";

const STATUS_STYLES = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  canceled: "bg-red-100 text-red-800",
};

export default function Appointments() {
  const { profile, loadingProfile, error, refetchProfile } =
    useBusinessProfile();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const clients = useMemo(() => profile?.clients || [], [profile]);
  const staffList = useMemo(() => profile?.staff || [], [profile]);
  const servicesList = useMemo(() => profile?.services || [], [profile]);
  console.log("clients", clients);
  console.log("staffList", staffList);
  console.log("servicesList", servicesList);

  const allAppointments = useMemo(
    () =>
      clients.flatMap((c, ci) =>
        (c.appointments || []).map((appt) => ({ ...appt, clientIndex: ci }))
      ),
    [clients]
  );

  const appointments = useMemo(() => {
    return allAppointments
      .filter((a) => (filter === "all" ? true : a.status === filter))
      .filter((a) => {
        const q = search.toLowerCase();
        return (
          a.client.name.toLowerCase().includes(q) ||
          `${a.staff.firstName} ${a.staff.lastName}`.toLowerCase().includes(q)
        );
      });
  }, [allAppointments, filter, search]);

  const profileId = profile?.id;

  const openForm = () => {
    setForm({
      clientIndex: "0",
      staffIndex: "0",
      serviceIndex: "0",
      date: "",
      time: "",
    });
    setOpen(true);
  };
  const closeForm = () => setOpen(false);
  const onChange = (f) => (e) =>
    setForm((prev) => ({
      ...prev,
      [f]: e.target?.value ?? e,
    }));

  const saveAppointment = async (updatedClients) => {
    const { error: updateError } = await supabase
      .from("onboarding_profiles")
      .update({ clients: updatedClients })
      .eq("id", profileId);
    if (updateError) {
      toast.error("Failed to save appointment: " + updateError.message);
      return false;
    }
    await refetchProfile();
    return true;
  };

  const handleSubmit = async () => {
    const { clientIndex, staffIndex, serviceIndex, date, time } = form;
    if (!date || !time) return toast.error("Choose date & time.");

    const newAppt = {
      id: crypto.randomUUID(),
      date,
      time,
      client: clients[clientIndex],
      staff: staffList[staffIndex],
      service: servicesList[serviceIndex],
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    const updated = clients.map((c, ci) =>
      ci === +clientIndex
        ? {
            ...c,
            appointments: [...(c.appointments || []), newAppt],
          }
        : c
    );
    if (await saveAppointment(updated)) {
      toast.success("Appointment added!");
      closeForm();
    }
  };

  const updateStatus = async (appt, newStatus) => {
    const updated = clients.map((c, ci) => {
      if (ci !== appt.clientIndex) return c;
      return {
        ...c,
        appointments: c.appointments.map((a) =>
          a.id === appt.id ? { ...a, status: newStatus } : a
        ),
      };
    });
    if (await saveAppointment(updated)) {
      toast.success(`Marked ${appt.client.name} as ${newStatus}.`);
    }
  };

  const deleteAppointment = async (appt) => {
    const updated = clients.map((c, ci) => {
      if (ci !== appt.clientIndex) return c;
      return {
        ...c,
        appointments: c.appointments.filter((a) => a.id !== appt.id),
      };
    });
    if (await saveAppointment(updated)) {
      toast.success(`Deleted appointment for ${appt.client.name}.`);
    }
  };

  if (loadingProfile) return <p className="p-6">Loading…</p>;
  if (error) return <p className="p-6 text-red-600">{error.message}</p>;

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 font-mulish">
      {/* Header & Filters */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl sm:text-2xl font-semibold">Appointments</h2>

        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <Input
            placeholder="Search client or staff…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Select
              value={filter}
              onValueChange={setFilter}
              className="w-full sm:w-32"
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["all", "pending", "confirmed", "completed", "canceled"].map(
                  (s) => (
                    <SelectItem key={s} value={s}>
                      {s.charAt(0).toUpperCase() + s.slice(1)}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>

            <Button
              onClick={openForm}
              className="w-full sm:w-auto bg-secondary hover:bg-amber-600"
            >
              + Add Appointment
            </Button>
          </div>
        </div>
      </div>

      {/* Appointment List */}
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 py-5 md:py-2 gap-5  sm:gap-4">
          {appointments.map((appt) => (
            <Card
              key={appt.id}
              className="flex flex-col p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow relative"
            >
              <div className="flex-1 w-full">
                <div className="flex items-start sm:items-center gap-2 sm:gap-3">
                  <img
                    src={appt.client.profile_picture}
                    alt={appt.client.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />

                  <div className="flex-1">
                    <p className="text-sm sm:text-base font-medium mb-1">
                      {format(new Date(appt.date), "PPP")} @ {appt.time}
                    </p>
                    <p className="text-xs sm:text-sm">
                      <span className="font-semibold">{appt.client.name}</span>{" "}
                      with{" "}
                      <span className="font-semibold">
                        {appt.staff.firstName} {appt.staff.lastName}
                      </span>
                      <span className="italic"> — {appt.service.name}</span>
                    </p>
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="mt-3 w-full md:hidden">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs sm:text-sm ${
                          STATUS_STYLES[appt.status] || ""
                        }`}
                      >
                        {appt.status.charAt(0).toUpperCase() +
                          appt.status.slice(1)}
                      </span>

                      <Select
                        value={appt.status}
                        onValueChange={(val) => updateStatus(appt, val)}
                        className="flex-1"
                      >
                        <SelectTrigger className="h-8 text-xs">
                          <SelectValue placeholder="Change…" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(STATUS_STYLES).map((s) => (
                            <SelectItem key={s} value={s} className="text-xs">
                              {s.charAt(0).toUpperCase() + s.slice(1)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-wrap">
                      {/* {appt.status === "pending" && (
                        <Button
                          size="sm"
                          className="text-xs h-8 flex-1"
                          onClick={() => updateStatus(appt, "confirmed")}
                        >
                          Confirm
                        </Button>
                      )}
                      {appt.status === "confirmed" && (
                        <Button
                          size="sm"
                          className="text-xs h-8 flex-1"
                          onClick={() => updateStatus(appt, "completed")}
                        >
                          Complete
                        </Button>
                      )} */}
                      {/* no more “Confirm” buttons */}
                      <Button
                        size="sm"
                        // variant="ghost"
                        className="bg-red-700 hover:bg-red-800 text-white text-sm h-8 flex-1"
                        onClick={() => deleteAppointment(appt)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Actions */}
              <div className="hidden md:flex items-center gap-2 mt-3 sm:mt-0">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    STATUS_STYLES[appt.status] || ""
                  }`}
                >
                  {appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}
                </span>

                <Select
                  value={appt.status}
                  onValueChange={(val) => updateStatus(appt, val)}
                >
                  <SelectTrigger className="h-9 text-sm">
                    <SelectValue placeholder="Change…" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(STATUS_STYLES).map((s) => (
                      <SelectItem key={s} value={s} className="text-sm">
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex">
                  {/* {appt.status === "pending" && (
                    <Button
                      size="sm"
                      className="text-sm h-9"
                      onClick={() => updateStatus(appt, "confirmed")}
                    >
                      Confirm
                    </Button>
                  )}
                  {appt.status === "confirmed" && (
                    <Button
                      size="sm"
                      className="text-sm h-9"
                      onClick={() => updateStatus(appt, "completed")}
                    >
                      Complete
                    </Button>
                  )} */}
                  {/* no more “Confirm” buttons */}
                  <Button
                    // variant="ghost"
                    className="bg-red-700 hover:bg-red-800 text-white h-8 flex-1"
                    onClick={() => deleteAppointment(appt)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* New Appointment Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[95%] sm:max-w-lg rounded-xl sm:rounded-2xl p-4 sm:p-6">
          <DialogHeader className="pb-3 sm:pb-4">
            <div className="flex justify-between items-center">
              <DialogTitle className="text-xl sm:text-2xl">
                New Appointment
              </DialogTitle>
              {/* <button
                onClick={closeForm}
                className="p-1 text-lg sm:text-xl hover:bg-gray-100 rounded-full"
              >
                &times;
              </button> */}
            </div>
          </DialogHeader>

          <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
            {/* Client selector with preview */}
            <FormField
              label="Client"
              as="select"
              value={form.clientIndex}
              onChange={onChange("clientIndex")}
              options={clients.map((c, i) => ({
                value: i,
                label: ` ${c.name}`,
              }))}
            />
            {clients[form.clientIndex] && (
              <div className="flex items-center gap-2 mt-1">
                <img
                  src={clients[form.clientIndex].profile_picture}
                  alt={clients[form.clientIndex].name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-sm sm:text-base">
                  {clients[form.clientIndex].name}
                </span>
              </div>
            )}

            {/* Staff selector */}
            <FormField
              label="Staff"
              as="select"
              value={form.staffIndex}
              onChange={onChange("staffIndex")}
              options={staffList.map((s, i) => ({
                value: i,
                label: `${s.firstName} ${s.lastName} (${s.role})`,
              }))}
            />

            {/* Service selector */}
            <FormField
              label="Service"
              as="select"
              value={form.serviceIndex}
              onChange={onChange("serviceIndex")}
              options={servicesList.map((sv, i) => ({
                value: i,
                label: `${sv.name} — ${sv.price || "-"}$`,
              }))}
            />

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <FormField
                label="Date"
                type="date"
                value={form.date}
                onChange={onChange("date")}
              />
              <FormField
                label="Time"
                type="time"
                value={form.time}
                onChange={onChange("time")}
              />
            </div>

            {/* Save button */}
            <Button
              onClick={handleSubmit}
              className="w-full bg-secondary hover:bg-amber-600 text-sm sm:text-base py-2 sm:py-3"
            >
              Save Appointment
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Changes in FormField component:
function FormField({
  label,
  as = "input",
  options = [],
  value,
  onChange,
  ...rest
}) {
  return (
    <div className="font-mulish">
      <label className="block mb-1 text-sm sm:text-base font-medium">
        {label}
      </label>
      {as === "select" ? (
        <Select value={String(value)} onValueChange={onChange} {...rest}>
          <SelectTrigger className="text-sm sm:text-base h-9 sm:h-10">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="text-sm sm:text-base">
            {options.map((opt) => (
              <SelectItem
                key={opt.value}
                value={String(opt.value)}
                className="text-sm sm:text-base"
              >
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Input
          {...rest}
          className="text-sm sm:text-base h-9 sm:h-10"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  as: PropTypes.oneOf(["input", "select"]),
  options: PropTypes.array,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};
