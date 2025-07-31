"use client";
import React, { useState, useEffect } from "react";
import Html5WarningModal from "./Html5WarningModal";

export default function Html5ModalWrapper() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.localStorage) 
        setShow(true);
      if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) 
        setShow(true);
    }
  }, []);

  return (
    <Html5WarningModal open={show} onClose={() => setShow(false)} />
  );
}