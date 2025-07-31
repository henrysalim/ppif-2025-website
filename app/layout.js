import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Html5ModalWrapper from "./Components/Html5ModalWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PPIF 2025",
  description: "Made with 🩷 by Website division",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Html5ModalWrapper />
          {children}
      </body>
    </html>
  );
}

