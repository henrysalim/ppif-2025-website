import Image from "next/image";
import React from "react";

export default function BackButton({ className, onPrev }) {
  return (
    <button onClick={onPrev} className={className}>
      <Image
        width={100}
        height={100}
        src="/Assets/Prev_Button.png"
        alt="Back"
        className="w-auto h-7 lg:h-10  cursor-pointer group-hover:pulse-ring"
      />
    </button>
  );
}
