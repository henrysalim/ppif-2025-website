import React from 'react';
import Link from 'next/link';

export default function BackButton({ href }) {
  if (!href) {
    console.error('BackButton membutuhkan prop "href"!');
    return null;
  }

  return (
    <Link href={href}>
      <div className="relative inline-block group">
        <img
          src="/Assets/Prev_Button.png"
          alt="Back"
          className="w-auto h-10  cursor-pointer group-hover:pulse-ring"
        />
      </div>
    </Link>
  );
}
