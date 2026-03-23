import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-24 px-6 md:px-20 text-center">

        {/* Glow Effect */}
        <div className="absolute w-[400px] h-[400px] bg-green-500/20 blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2"></div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 relative z-10">
          About Bala Ji Enterprises ⚡
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto relative z-10">
          Driving the future of mobility in Raebareli with smart, eco-friendly electric scooters.
        </p>
      </section>

      {/* ABOUT + IMAGE */}
      <section className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-400 mb-4">
            Bala Ji Enterprises, located in Civil Lines, Raebareli, is a trusted EV dealership 
            providing high-quality electric scooters designed for modern urban mobility.
          </p>
          <p className="text-gray-400">
            We are committed to offering affordable, eco-friendly solutions that help reduce pollution 
            and create a sustainable future for our community.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/035/718/525/small/electric-scooter-and-charging-station-png.png"
            alt="EV Scooter"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </section>

      {/* MISSION + VISION */}
      <section className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10">

        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold mb-3">🚀 Our Mission</h2>
          <p className="text-gray-400">
            To accelerate EV adoption in India by providing reliable, affordable, and innovative 
            electric scooters for everyday use.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
          <h2 className="text-2xl font-bold mb-3">🌍 Our Vision</h2>
          <p className="text-gray-400">
            To become a leading EV brand across Uttar Pradesh and empower local businesses through 
            our franchise network.
          </p>
        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 md:px-20 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "⚡ Wide range of EV scooters",
            "💰 Affordable pricing",
            "🔧 Strong after-sales support",
            "🤝 Trusted local business"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition border border-gray-800 hover:border-green-500"
            >
              {item}
            </div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="py-16 text-center relative">

        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-900/20 blur-2xl"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
          Join the EV Revolution ⚡
        </h2>

        <p className="text-gray-400 mb-6 relative z-10">
          Visit our showroom in Civil Lines, Raebareli today.
        </p>

        <button className="bg-green-500 px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition relative z-10">
          Contact Us
        </button>

      </section>

    </div>
  );
};

export default About;