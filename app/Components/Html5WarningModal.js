"use client";
import React from "react";

export default function Html5WarningModal({ open, onClose }) {
  if (!open) return null;
  
    function handleClose() {
    onClose(); 
    setTimeout(() => {
      window.location.href = "https://www.google.com";
    }, 150);
  }
  return (
    <div className="modal-backdrop">
      <div className="modal-popup">
        <p>
          Browser yang digunakan belum mendukung fungsi HTML5, silahkan ganti dengan Browser Google Chrome.
        </p>
        <button className="modal-close" onClick={handleClose}>
          Close
        </button>
      </div>
      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          z-index: 9999;
          top: 0; left: 0; right: 0; bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.35);
          backdrop-filter: blur(2px);
        }
        .modal-popup {
          background: #222;
          color: #fff;
          padding: 2rem 1.5rem 1.2rem 1.5rem;
          border-radius: 20px;
          max-width: 80vw;
          width: 380px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          font-size: 1.1rem;
          position: relative;
        }
        .modal-close {
          margin-top: 1.4rem;
          background: none;
          border: none;
          color: #74aaff;
          font-size: 1.1rem;
          cursor: pointer;
          float: right;
        }
        @media (max-width: 400px) {
          .modal-popup {
            max-width: 95vw;
            width: 95vw;
            padding: 1.2rem 1rem 1rem 1rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}