import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;

    const msg = `Name: ${name}%0APhone: ${phone}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`);
  };

  return (
    <div className="bg-black text-white px-6 md:px-20 py-16">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Contact Us 📞
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT - FORM */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              placeholder="Your Name"
              className="p-3 rounded bg-black border border-gray-700 focus:outline-none"
              required
            />

            <input
              name="phone"
              placeholder="Phone Number"
              className="p-3 rounded bg-black border border-gray-700 focus:outline-none"
              required
            />

            <button className="bg-green-500 hover:bg-green-600 py-3 rounded font-semibold flex items-center justify-center gap-2">
              <FaWhatsapp /> Send on WhatsApp
            </button>
          </form>
        </div>

        {/* RIGHT - INFO */}
        <div className="flex flex-col gap-6 justify-center">

          <div className="bg-gray-900 p-5 rounded-lg flex items-center gap-4">
            <FaMapMarkerAlt className="text-green-400 text-2xl" />
            <p>
              Bala Ji Enterprises, Civil Lines, Raebareli, Uttar Pradesh
            </p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg flex items-center gap-4">
            <FaPhoneAlt className="text-green-400 text-2xl" />
            <p>+91 XXXXX XXXXX</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg flex items-center gap-4">
            <FaWhatsapp className="text-green-400 text-2xl" />
            <p>Chat with us on WhatsApp for quick response</p>
          </div>

        </div>

      </div>

      {/* MAP */}
      <div className="mt-16">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Raebareli%20Civil%20Lines&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-80 rounded-lg border-0"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;