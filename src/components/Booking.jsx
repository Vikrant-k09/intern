import React from "react";

const Booking = ({ bookingId, category, sessionTime, sessionDate, duration, status }) => {
  return (
    <div className="bg-white mt-20 w-full h-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-sm rounded-3xl p-8">
          <div className="text-center text-2xl font-bold mb-8   ">Booking Details</div>

          <div className="grid grid-cols-5 gap-4 items-center">
            <div className="flex flex-col items-center">


              <div className="text-center">
                <img src="/assets/Bookingid.png" className="rounded-full w-16 h-16" />
                <div className="text-gray-700">Booking ID</div>
                <div className="text-black font-bold">{bookingId}</div>
              </div>
            </div>



            <div className="flex flex-col items-center">
            <img src="/assets/category.png" className="rounded-full w-16 h-16" />

              <div className="text-center">
                <div className="text-gray-700">Consultation Category</div>
                <div className="text-black font-bold">{category}</div>
              </div>
            </div>
            <div className="flex flex-col items-center mt-6">
            <img src="/assets/20.png" className="rounded-full w-16 h-16" />
              <div className="text-center">
                <div className="text-gray-700">Session Time & Date</div>
                <div className="text-black font-bold">
                  {sessionDate} <br /> {sessionTime}
                </div>
                <div className="text-gray-500">{duration}</div>
              </div>
            </div>
            <div className="flex flex-col items-center">
            <img src="/assets/17.png" className="rounded-full w-16 h-16" />
              <div className="text-center">
                <div className="text-gray-700">Booking Status</div>
                <div className={`font-bold ${status === "Confirmed" ? "text-blue-500" : "text-red-500"}`}>
                  {status}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">

              <button className="px-6 py-2 bg-red-500 text-white rounded-full">
              <a href="https://www.google.com">Join Session</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12"></div>
    </div>
  );
};

export default Booking;
