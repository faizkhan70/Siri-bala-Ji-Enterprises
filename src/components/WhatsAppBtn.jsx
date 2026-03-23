import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBtn = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Pulse Effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>

      {/* Button */}
      <a
        href="https://wa.me/917054856378"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition duration-300 group"
      >
        <FaWhatsapp className="text-xl" />

        {/* Text (hidden on mobile) */}
        <span className="hidden md:block font-semibold">
          Chat Now
        </span>
      </a>

    </div>
  );
};

export default WhatsAppBtn;