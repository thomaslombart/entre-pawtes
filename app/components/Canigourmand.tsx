import Link from "next/link";
import { ReactNode } from "react";
export default function Canigourmand({ children }: { children?: ReactNode }) {
  return (
    <div className="my-4 rounded-lg bg-blue-100 p-5 md:p-7 not-prose text-blue-900 leading-normal">
      <div className="flex flex-col md:flex-row items-start gap-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 w-8 h-8"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M11.25 16.25h1.5L12 17zM16 14v.5" />
            <path d="M4.42 11.247A13.2 13.2 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.7 11.7 0 0 0-.493-3.309M8 14v.5" />
            <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5c-1.931.722-3.576-.297-3.656-1c-.113-.994 1.177-6.53 4-7c1.923-.321 3.651.845 3.651 2.235A7.5 7.5 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277c2.823.47 4.113 6.006 4 7c-.08.703-1.725 1.722-3.656 1c-1.261-.472-1.855-1.45-2.239-2.5" />
          </g>
        </svg>
        <div>
          {children}
          <div className="mt-4">
            <Link
              href="https://www.canigourmand.com/69-friandises-naturelles-chien#ref=6674286"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all font-semibold text-sm md:text-base"
            >
              Visiter Canigourmand
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
