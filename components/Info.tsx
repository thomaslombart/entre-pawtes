import { ReactNode } from "react";

export default function Info({
  children,
  noIcon,
  variant = "info",
}: {
  children: ReactNode;
  noIcon?: boolean;
  variant?: "info" | "tip" | "warning";
}) {
  const styles = {
    info: {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="size-7 md:size-8"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4m0-4h.01" />
          </g>
        </svg>
      ),
      bg: "bg-blue-50",
      text: "text-blue-500",
      content: "text-blue-800",
    },
    tip: {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="size-7 md:size-8"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            color="currentColor"
          >
            <path d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14" />
            <path d="M14 10c-.613.643-1.289 1-2 1s-1.387-.357-2-1m-2.617 7.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527c-.17.511-.255.767-.386.974a2 2 0 0 1-1.2.869c-.238.059-.506.059-1.043.059h-3.976c-.537 0-.806 0-1.043-.06a2 2 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974M15 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C13.082 22 12.72 22 12 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L9 19m3-3.5V11" />
          </g>
        </svg>
      ),
      bg: "bg-amber-50",
      text: "text-amber-500",
      content: "text-amber-800",
    },
    warning: {
      icon: (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="size-7 md:size-8"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="m250.26 195.39l5.74 122l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95"
          />
          <path
            fill="currentColor"
            d="M256 397.25a20 20 0 1 1 20-20a20 20 0 0 1-20 20"
          />
        </svg>
      ),
      bg: "bg-orange-50",
      text: "text-orange-500",
      content: "text-orange-800",
    },
  };

  const style = styles[variant];

  return (
    <div className={`my-4 rounded-lg ${style.bg} px-4 md:px-7 py-2 md:py-3`}>
      <div className="flex items-center">
        {noIcon ? null : (
          <span className={`${style.text} mr-3 flex-shrink-0`}>
            {style.icon}
          </span>
        )}
        <div className={`${style.content} font-medium text-sm md:text-base`}>
          {children}
        </div>
      </div>
    </div>
  );
}
