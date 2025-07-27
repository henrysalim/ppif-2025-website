import React from "react";

export default function BackButton({ className, onPrev }) {
  return (
    <button onClick={onPrev} className={className}>
      <img
        src="/Assets/Prev_Button.png"
        alt="Back"
        className="w-auto h-10  cursor-pointer group-hover:pulse-ring"
      />
    </button>
  );
}
