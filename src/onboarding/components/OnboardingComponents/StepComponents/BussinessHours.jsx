import { useState } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function BusinessHours() {
  const [hours, setHours] = useState(
    daysOfWeek.map((day) => ({
      day,
      enabled: false,
      startTime: "10:00 AM",
      endTime: "10:00 AM",
      breaks: [],
    }))
  );

  const toggleDay = (index) => {
    const updatedHours = [...hours];
    updatedHours[index].enabled = !updatedHours[index].enabled;
    setHours(updatedHours);
  };

  const handleTimeChange = (index, field, value) => {
    const updatedHours = [...hours];
    updatedHours[index][field] = value;
    setHours(updatedHours);
  };

  const addBreak = (index) => {
    const updatedHours = [...hours];
    updatedHours[index].breaks.push({
      start: "10:00 AM",
      end: "10:00 AM",
    });
    setHours(updatedHours);
  };

  const handleBreakChange = (dayIndex, breakIndex, field, value) => {
    const updatedHours = [...hours];
    updatedHours[dayIndex].breaks[breakIndex][field] = value;
    setHours(updatedHours);
  };

  const removeBreak = (dayIndex, breakIndex) => {
    const updatedHours = [...hours];
    updatedHours[dayIndex].breaks.splice(breakIndex, 1);
    setHours(updatedHours);
  };

  const handleNext = () => {
    console.log("Business Hours:", hours);
    // Yahan Supabase ke liye code dalna hai
  };

  return (
    <div className="p-6">
      <h2 className="text-center text-xl font-semibold mb-6">
        Add Business Hours
      </h2>
      <div className="space-y-4">
        {hours.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* Toggle Switch */}
            <button
              onClick={() => toggleDay(index)}
              className={`w-10 h-5 flex items-center rounded-full p-1 ${
                item.enabled ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
                  item.enabled ? "translate-x-5" : ""
                } transition`}
              />
            </button>

            {/* Day Name */}
            <span className="w-12">{item.day}</span>

            {/* Start Time */}
            <select
              value={item.startTime}
              onChange={(e) =>
                handleTimeChange(index, "startTime", e.target.value)
              }
              className="p-2 border rounded"
            >
              {generateTimes().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            {/* End Time */}
            <select
              value={item.endTime}
              onChange={(e) =>
                handleTimeChange(index, "endTime", e.target.value)
              }
              className="p-2 border rounded"
            >
              {generateTimes().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            {/* Breaks */}
            {item.breaks.map((brk, breakIndex) => (
              <div key={breakIndex} className="flex items-center gap-2">
                <select
                  value={brk.start}
                  onChange={(e) =>
                    handleBreakChange(index, breakIndex, "start", e.target.value)
                  }
                  className="p-2 border rounded"
                >
                  {generateTimes().map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <select
                  value={brk.end}
                  onChange={(e) =>
                    handleBreakChange(index, breakIndex, "end", e.target.value)
                  }
                  className="p-2 border rounded"
                >
                  {generateTimes().map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {/* Remove Break Button */}
                <button
                  onClick={() => removeBreak(index, breakIndex)}
                  className="text-gray-400 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}

            {/* Add Break Button */}
            <button
              onClick={() => addBreak(index)}
              className="text-gray-500 hover:text-orange-500"
            >
              + Add Break
            </button>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button className="p-2 border rounded bg-gray-200">Back</button>
        <button
          onClick={handleNext}
          className="p-2 border rounded bg-orange-500 text-white hover:bg-orange-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

// Time Generation Function
const generateTimes = () => {
  const times = [];
  let hour = 0;
  let minute = 0;
  let meridiem = "AM";

  while (hour < 12 || (hour === 12 && minute === 0)) {
    const formattedTime = `${hour === 0 ? 12 : hour}:${
      minute === 0 ? "00" : minute
    } ${meridiem}`;
    times.push(formattedTime);
    minute += 30;
    if (minute === 60) {
      minute = 0;
      hour++;
      if (hour === 12) meridiem = meridiem === "AM" ? "PM" : "AM";
      if (hour > 12) hour = 1;
    }
  }
  return times;
};
