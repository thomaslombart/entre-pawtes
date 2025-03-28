import React from "react";

const CheckmarkIcon: React.FC = () => (
  <div className="h-5 w-5 md:h-6 md:w-6 text-white mr-2 md:mr-3 flex-shrink-0 rounded-full bg-primary flex items-center justify-center">
    <svg
      className="h-3 w-3 md:h-4 md:w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M5 13l4 4L19 7"
      />
    </svg>
  </div>
);

export default CheckmarkIcon;
