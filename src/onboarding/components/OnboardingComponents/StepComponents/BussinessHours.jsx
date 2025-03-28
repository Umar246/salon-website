import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

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

  const [hasBreakAdded, setHasBreakAdded] = useState(
    Array(daysOfWeek.length).fill(false)
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
    if (!hasBreakAdded[index]) {
      const updatedHours = [...hours];
      updatedHours[index].breaks.push({
        start: "10:00 AM",
        end: "10:00 AM",
      });
      setHours(updatedHours);

      const updatedHasBreakAdded = [...hasBreakAdded];
      updatedHasBreakAdded[index] = true;
      setHasBreakAdded(updatedHasBreakAdded);
    }
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

    const updatedHasBreakAdded = [...hasBreakAdded];
    updatedHasBreakAdded[dayIndex] = false;
    setHasBreakAdded(updatedHasBreakAdded);
  };

  const handleNext = () => {
    console.log("Business Hours:", hours);
  };

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-base text-center w-full md:text-xl text-primary font-mulish font-bold">
        Add Business Hours
      </h2>
      <div className="space-y-10 my-5 md:my-10">
        {hours.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1  lg:grid-cols-5 gap-2 md:gap-4 items-center"
          >
            {/* Toggle Switch */}
            <div className="flex items-center gap-3 justify-center py-3 px-2 rounded-sm md:rounded-lg shadow-md">
              <button
                onClick={() => toggleDay(index)}
                className={`w-10 h-5 flex items-center cursor-pointer rounded-full p-1 ${
                  item.enabled ? "bg-info" : "bg-info"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full shadow-md transform ${
                    item.enabled ? "translate-x-5 bg-secondary" : "bg-primary"
                  } transition`}
                />
              </button>
              <span
                className={`w-12  ${
                  item.enabled ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {item.day}
              </span>
            </div>

            {/* Start Time */}
            <select
              value={item.startTime}
              onChange={(e) =>
                handleTimeChange(index, "startTime", e.target.value)
              }
              className="px-4 md:px-5 py-2 cursor-pointer md:py-3 bg-[#F8F8FE] rounded-md"
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
              className="px-4 md:px-5 py-2 cursor-pointer md:py-3 bg-[#F8F8FE] rounded-md"
            >
              {generateTimes().map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            {/* Breaks */}
            {item.breaks.map((brk, breakIndex) => (
              <div
                key={breakIndex}
                className="flex flex-col md:flex-row w-full items-center gap-2"
              >
                <h1 className="md:hidden mt-5 md:mt-0 text-start text-sm text-gray-500">
                  Add Break
                </h1>
                <select
                  value={brk.start}
                  onChange={(e) =>
                    handleBreakChange(
                      index,
                      breakIndex,
                      "start",
                      e.target.value
                    )
                  }
                  className="px-4 md:px-5 py-2 md:py-3 cursor-pointer w-full md:w-auto bg-[#F8F8FE] rounded-md"
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
                  className="px-4 md:px-5 py-2 md:py-3 cursor-pointer w-full md:w-auto bg-[#F8F8FE] rounded-md"
                >
                  {generateTimes().map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => removeBreak(index, breakIndex)}
                  className="text-gray-400 cursor-pointer hover:text-secondary"
                >
                  <RxCrossCircled size={20} />
                </button>
              </div>
            ))}

            {!hasBreakAdded[index] && (
              <button
                onClick={() => addBreak(index)}
                className="text-gray-500 cursor-pointer flex items-center justify-center gap-1 rounded-sm md:rounded-lg p-3 hover:text-secondary shadow-md"
              >
                <IoIosAddCircleOutline />
                <span>Add Break</span>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between w-full mt-10">
        <Button
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

const generateTimes = () => {
  const times = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const meridiem = hour < 12 ? "AM" : "PM";
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
      const formattedMinute = minute === 0 ? "00" : minute;
      times.push(`${formattedHour}:${formattedMinute} ${meridiem}`);
    }
  }

  return times;
};
