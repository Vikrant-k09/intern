import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon } from "@heroicons/react/24/outline";
import Booking from "./Booking";

const timeslots30min = [
  { id: "30-9:00-10:00 AM", time: "9:00-10:00 AM", available: true },
  { id: "30-10:00-11:00 AM", time: "10:00-11:00 AM", available: true },
  { id: "30-11:00-12:00 PM", time: "11:00-12:00 PM", available: false },
  { id: "30-2:00-3:00 PM", time: "2:00-3:00 PM", available: true },
  { id: "30-3:00-4:00 PM", time: "3:00-4:00 PM", available: true },
  { id: "30-4:00-5:00 PM", time: "4:00-5:00 PM", available: false },
];

const timeslots1hour = [
  { id: "60-9:00-10:00 AM", time: "9:00-10:00 AM", available: true },
  { id: "60-10:00-11:00 AM", time: "10:00-11:00 AM", available: true },
  { id: "60-11:00-12:00 PM", time: "11:00-12:00 PM", available: true },
  { id: "60-2:00-3:00 PM", time: "2:00-3:00 PM", available: false },
  { id: "60-3:00-4:00 PM", time: "3:00-4:00 PM", available: false },
  { id: "60-4:00-5:00 PM", time: "4:00-5:00 PM", available: true },
];

const sessionDurations = [
  { duration: "30 min", slots: timeslots30min },
  { duration: "01 hour", slots: timeslots1hour },
];

const Calendar = () => {
  const [selectedType, setSelectedType] = useState("Startup Consulting");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [booking, setBooking] = useState(false);
  const maxFutureDays = 15;
  const today = new Date();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    updateProgress();
  }, [selectedDate]);

  const updateProgress = () => {
    const diffInTime = selectedDate.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
    const progress = Math.min((diffInDays / maxFutureDays) * 100, 100);
    setProgress(progress);
  };

  const handlePreviousDay = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() - 1);
      if (newDate < new Date(today.setHours(0, 0, 0, 0))) {
        return prevDate;
      }
      return newDate;
    });
  };

  const handleNextDay = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + 1);
      const maxDate = new Date();
      maxDate.setDate(today.getDate() + maxFutureDays);
      if (newDate > maxDate) {
        return prevDate;
      }
      return newDate;
    });
  };

  const getRelativeDayLabel = (date) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    let label;
    if (date.toDateString() === today.toDateString()) {
      label = "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      label = "Tomorrow";
    } else {
      label = date.toLocaleDateString("en-US", { weekday: "long" });
    }
    const day = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "short" });
    return `${label} ${day} ${month}`;
  };

  const handleProceedPayment = () => {
    if (selectedSlot) {
      setBooking(true);
    } else {
      alert("Please select a time slot before proceeding.");
    }
  };

  if (booking) {
    return (
      <Booking
        bookingId="123456"
        category={selectedType}
        sessionTime={selectedSlot.time}
        sessionDate={selectedDate.toDateString()}
        duration={selectedSlot.id.startsWith("30") ? "30 min" : "01 hour"}
        status="Confirmed"
      />
    );
  }

  return (
    <div className="bg-white mt-16 w-full h-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-3xl p-8">
          <div className="flex justify-center mb-[60px] space-x-32 max-md:space-x-16">
            <button
              className={`px-4 py-2 rounded-3xl ${
                selectedType === "Startup Consulting"
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedType("Startup Consulting")}
            >
              Startup Consulting
            </button>
            <button
              className={`px-4 py-2 rounded-3xl ${
                selectedType === "Career Consulting"
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedType("Career Consulting")}
            >
              Career Consulting
            </button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="w-12 h-12 shadow-md rounded-full flex items-center justify-center cursor-pointer">
              <ChevronLeftIcon className="h-6 w-6" onClick={handlePreviousDay} />
            </div>
            <div className="flex justify-between items-center mb-4 gap-32">
              {[0, 1, 2].map((daysFromToday) => {
                const date = new Date(selectedDate);
                date.setDate(selectedDate.getDate() + daysFromToday);
                return (
                  <div key={daysFromToday} className="text-center">
                    <div className="text-red-500 font-bold">
                      {getRelativeDayLabel(date)}
                    </div>
                    <div className="text-blue-500">06 Available</div>
                  </div>
                );
              })}
            </div>
            <div className="w-12 h-12 shadow-md rounded-full flex items-center justify-center cursor-pointer">
              <ChevronRightIcon className="h-6 w-6" onClick={handleNextDay} />
            </div>
          </div>

          <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-6">
            <div className="absolute top-0 left-0 h-full bg-red-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>

          <div className="mb-6 mt-16">
            {sessionDurations.map((session, idx) => (
              <div className="flex flex-row gap-6" key={idx}>
                <div className="w-[10%] max-md:w-[5%] flex flex-col my-auto">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <ClockIcon className="h-6 w-6 text-gray-500 mr-1" />
                      <span className="text-lg">{session.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="w-full ml-32 max-md:ml-2 flex flex-col">
                  <div className="my-8 grid grid-cols-4 gap-2">
                    {session.slots.map((slot, index) => (
                      <button
                        key={index}
                        className={`my-auto mx-auto border rounded-2xl px-4 py-2 max-md:px-2 ${
                          slot.available
                            ? selectedSlot?.id === slot.id
                              ? "bg-red-400 text-white"
                              : "border-red-500 text-red-500"
                            : "border-gray-300 text-gray-300 cursor-not-allowed"
                        }`}
                        disabled={!slot.available}
                        onClick={() => {
                          setSelectedSlot(slot);
                        }}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-6 py-2 bg-red-500 text-white rounded-3xl" onClick={handleProceedPayment}>
              Proceed Payment
            </button>
          </div>
        </div>
        <div className="mx-auto h-10   flex justify-center items-center">
          <div className="mt-8 w-full border-t border-gray-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
