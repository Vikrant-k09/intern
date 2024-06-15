import React, { useRef } from "react";
import {
  CreditCardIcon,
  CheckCircleIcon,
  CalendarIcon,
  CurrencyRupeeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Calendar from "./Calendar";

const Hero = () => {
  const calendarRef = useRef(null);

  const handleBookNowClick = () => {
    calendarRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="bg-white mt-20 w-full mb-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md-pink rounded-2xl p-8 flex flex-col">
            {/* Image */}
            <span className="flex flex-col md:flex-row w-full">
              <div className="mb-4 md:mb-0 md:mr-6 flex justify-center">
                <img
                  className="rounded-full w-[100px] h-[100px]"
                  src="/assets/heroavatar.png"
                  alt="Ridhima Sen"
                />
              </div>

              <div className="flex flex-col md:flex-row w-full">
                {/* Name */}
                <div className="md:w-2/3 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-900 mt-2">
                    Ridhima Sen
                  </h2>
                  <p className="text-gray-600 mb-3">Startup Consultant</p>
                  <ul className="text-gray-600 mb-4">
                    <li className="flex items-center justify-center md:justify-start py-1">
                      <CheckCircleIcon className="h-6 w-6 text-gray-500 mr-1" />
                      <span className="ml-2">Qualified in startup Consulting</span>
                    </li>
                    <li className="flex items-center justify-center md:justify-start py-1">
                      <CalendarIcon className="h-6 w-6 text-gray-500 mr-1" />
                      <span className="ml-2">20 Years of experience in consulting</span>
                    </li>
                    <li className="flex items-center justify-center md:justify-start py-1">
                      <CreditCardIcon className="h-6 w-6 text-gray-500 mr-1" />
                      <span className="ml-2">Consultation fee ₹1000</span>
                    </li>
                  </ul>
                </div>

                <div className="h-full hidden md:block border-r border-black"></div>

                <div className="mt-4 md:mt-0 md:ml-16 w-full md:w-[70%] text-center md:text-left">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                    Consultation Prices
                  </h2>
                  <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                    <p className="text-gray-600 flex items-center justify-center md:justify-start">
                      <CurrencyRupeeIcon className="h-8 w-8 text-gray-500 mr-1" />
                      <span className="ml-1">30 min session: ₹1000</span>
                    </p>
                    <p className="text-gray-600 flex items-center justify-center md:justify-start">
                      <CurrencyRupeeIcon className="h-8 w-8 text-gray-500 mr-1" />
                      <span className="ml-1">01 hr session: ₹1500</span>
                    </p>
                    <p className="text-gray-600 flex items-center justify-center md:justify-start">
                      <ClockIcon className="h-8 w-8 text-gray-500 mr-1" />
                      <span className="ml-1">Availability: Mon-Sat</span>
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    <button
                      className="px-6 py-2 bg-red-500 text-white rounded-full mt-4"
                      onClick={handleBookNowClick}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </span>

            {/* SKILLS */}
            <div className="mt-4">
              <h3 className="text-3xl font-semibold text-gray-800 mb-5 mt-5">
                Skills
              </h3>
              <div className="flex flex-wrap gap-5 justify-center md:justify-start">
                <span className="bg-red-100 text-red-800 text-lg font-medium px-2.5 py-0.5 rounded-xl">
                  Marketing Consulting
                </span>
                <span className="bg-red-100 text-red-800 text-lg font-medium px-2.5 py-0.5 rounded-xl">
                  Accounts Consulting
                </span>
                <span className="bg-red-100 text-red-800 text-lg font-medium px-2.5 py-0.5 rounded-xl">
                  Business Consulting
                </span>
                <span className="bg-red-100 text-red-800 text-lg font-medium px-2.5 py-0.5 rounded-xl">
                  Business Consulting
                </span>
                <span className="bg-red-100 text-red-800 text-lg font-medium px-2.5 py-0.5 rounded-xl">
                  Business Consulting
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section ref={calendarRef}>
        <Calendar onBookingStart={() => console.log("Booking Started")} />
      </section>
    </div>
  );
};

export default Hero;
