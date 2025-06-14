"use client";

import React from "react";

type ScheduleCardProps = {
  date: string;
  time: string;
  movieId: string;
  offsetY?: string; // for vertical shifting
};

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  date,
  time,
  movieId,
  offsetY = "0",
}) => {
  const handleTimeClick = () => {
    console.log(`Selected time for movie ${movieId}: ${time}`);
  };

  return (
    <div className={`flex flex-col items-center ${offsetY} mx-2`}>
      {/* Date box */}
      <div className="h-20 w-28 bg-gray-300 text-black px-4 py-2 rounded-xl font-mono shadow text-sm flex items-center justify-center text-center">
        {date}
      </div>

      {/* Time button */}
      <button
        onClick={handleTimeClick}
        className="mt-3 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl text-sm font-semibold shadow font-mono transition duration-200"
      >
        {time}
      </button>
    </div>
  );
};

export default ScheduleCard;
