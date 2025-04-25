import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function BusinessHours({ next, prev, updateData }) {
  const [hours, setHours] = useState(
    daysOfWeek.map((day) => ({
      day,
      enabled: false,
      startTime: "10:00 AM",
      endTime: "10:00 AM",
      breaks: [],
    }))
  );

  const toggleDay = (i) => {
    const copy = [...hours];
    copy[i].enabled = !copy[i].enabled;
    setHours(copy);
  };

  const handleTimeChange = (i, field, val) => {
    const copy = [...hours];
    copy[i][field] = val;
    setHours(copy);
  };

  const addBreak = (i) => {
    const copy = [...hours];
    copy[i].breaks.push({ start: "10:00 AM", end: "10:00 AM" });
    setHours(copy);
  };

  const removeBreak = (dayIdx, brIdx) => {
    const copy = [...hours];
    copy[dayIdx].breaks.splice(brIdx, 1);
    setHours(copy);
  };

  const handleNext = () => {
    updateData(hours);
    next();
  };

  const times = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      const mer = h < 12 ? "AM" : "PM";
      const fh = h % 12 || 12;
      const fm = m === 0 ? "00" : m;
      times.push(`${fh}:${fm} ${mer}`);
    }
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-base text-center w-full md:text-xl text-primary font-mulish font-bold">
        Add Business Hours
      </h2>
      <div className="space-y-10 my-5 md:my-10">
        {hours.map((itm, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1  lg:grid-cols-5 gap-2 md:gap-4 items-center"
          >
            {/* Toggle Switch */}
            <div className="flex items-center gap-3 justify-center py-3 px-2 rounded-sm md:rounded-lg shadow-md">
              <button
                onClick={() => toggleDay(idx)}
                className={`w-10 h-5 flex items-center cursor-pointer rounded-full p-1 ${
                  itm.enabled ? "bg-info" : "bg-info"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full shadow-md transform ${
                    itm.enabled ? "translate-x-5 bg-secondary" : "bg-primary"
                  } transition`}
                />
              </button>
              <span
                className={`w-12  ${
                  itm.enabled ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {itm.day}
              </span>
            </div>

            {/* Start Time */}
            <select
              disabled={!itm.enabled}
              value={itm.startTime}
              onChange={(e) =>
                handleTimeChange(idx, "startTime", e.target.value)
              }
              className="px-4 md:px-5 py-2 cursor-pointer md:py-3 bg-[#F8F8FE] rounded-md"
            >
              {times.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            {/* End Time */}
            <select
              disabled={!itm.enabled}
              value={itm.endTime}
              onChange={(e) => handleTimeChange(idx, "endTime", e.target.value)}
              className="px-4 md:px-5 py-2 cursor-pointer md:py-3 bg-[#F8F8FE] rounded-md"
            >
              {times.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            {/* Breaks */}
            {itm.breaks.map((br, bi) => (
              <div
                key={bi}
                className="flex flex-col md:flex-row w-full items-center gap-2"
              >
                <h1 className="md:hidden mt-5 md:mt-0 text-start text-sm text-gray-500">
                  Add Break
                </h1>
                <select
                  value={br.start}
                  onChange={(e) =>
                    handleTimeChange(idx, "breaks", [
                      ...itm.breaks.slice(0, bi),
                      { ...br, start: e.target.value },
                      ...itm.breaks.slice(bi + 1),
                    ])
                  }
                  className="px-4 md:px-5 py-2 md:py-3 cursor-pointer w-full md:w-auto bg-[#F8F8FE] rounded-md"
                >
                  {times.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <select
                  value={br.end}
                  onChange={(e) =>
                    handleTimeChange(idx, "breaks", [
                      ...itm.breaks.slice(0, bi),
                      { ...br, end: e.target.value },
                      ...itm.breaks.slice(bi + 1),
                    ])
                  }
                  className="px-4 md:px-5 py-2 md:py-3 cursor-pointer w-full md:w-auto bg-[#F8F8FE] rounded-md"
                >
                  {times.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <button
                  onClick={() => removeBreak(idx, bi)}
                  className="text-gray-400 cursor-pointer hover:text-secondary"
                >
                  <RxCrossCircled size={20} />
                </button>
              </div>
            ))}

            {itm.enabled && itm.breaks.length === 0 && (
              <button
                onClick={() => addBreak(idx)}
                className="flex items-center gap-1 text-gray-500 cursor-pointer "
              >
                <IoIosAddCircleOutline /> Add Break
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between w-full mt-10">
        <Button
          onClick={prev}
          variant="outline"
          className="text-[#939393] font-normal px-8 md:px-12 rounded-sm"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          className="bg-secondary hover:bg-amber-600 font-normal px-8 md:px-12 rounded-sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

// const generateTimes = () => {
//   const times = [];

//   for (let hour = 0; hour < 24; hour++) {
//     for (let minute = 0; minute < 60; minute += 30) {
//       const meridiem = hour < 12 ? "AM" : "PM";
//       const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
//       const formattedMinute = minute === 0 ? "00" : minute;
//       times.push(`${formattedHour}:${formattedMinute} ${meridiem}`);
//     }
//   }

//   return times;
// };

BusinessHours.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};
