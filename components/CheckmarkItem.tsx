import React from "react";

interface CheckmarkItemProps {
  title: string;
  description: string;
  emoji?: string;
}

const CheckmarkItem: React.FC<CheckmarkItemProps> & {
  Icon: React.FC;
  WhiteIcon: React.FC;
} = ({ title, description, emoji }) => {
  return (
    <li className="flex items-start">
      {emoji ? (
        <div className="h-8 w-8 mr-3 flex-shrink-0 text-xl flex items-center justify-center">
          {emoji}
        </div>
      ) : (
        <CheckmarkIcon />
      )}
      <div>
        <h4 className="text-lg font-bold text-primary mb-1">{title}</h4>
        <p className="text-sm sm:text-base">{description}</p>
      </div>
    </li>
  );
};

const CheckmarkIcon: React.FC = () => (
  <div className="h-5 w-5 sm:h-6 sm:w-6 text-white mr-2 sm:mr-3 flex-shrink-0 rounded-full bg-primary flex items-center justify-center">
    <svg
      className="h-3 w-3 sm:h-4 sm:w-4"
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

const WhiteCheckmarkIcon: React.FC = () => (
  <div className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2 sm:mr-3 flex-shrink-0 rounded-full bg-white flex items-center justify-center">
    <svg
      className="h-3 w-3 sm:h-4 sm:w-4"
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

CheckmarkItem.Icon = CheckmarkIcon;
CheckmarkItem.WhiteIcon = WhiteCheckmarkIcon;

export default CheckmarkItem;
