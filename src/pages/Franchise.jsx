import React from "react";
import { FaChargingStation, FaHandshake, FaChartLine } from "react-icons/fa";

const Franchise = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const city = e.target.city.value;

    const msg = `Franchise Inquiry 🚀%0AName: ${name}%0APhone: ${phone}%0ACity: ${city}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`);
  };

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center px-6">

        {/* Glow Background */}
        <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-10"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight z-10">
          Build Your EV Business ⚡
        </h1>

        <p className="text-gray-400 max-w-xl mb-8 z-10">
          Partner with Bala Ji Enterprises and start your own electric vehicle dealership in your city.
        </p>

        <div className="flex gap-4 z-10">
          <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-semibold transition shadow-lg">
            Apply Now
          </button>
          <button className="border border-gray-600 px-8 py-3 rounded-full hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-3 gap-10">
        {[{
          icon: <FaChargingStation />,
          title: "High Demand Market",
          desc: "Electric vehicles are the future. Huge demand with low competition."
        },{
          icon: <FaHandshake />,
          title: "Full Business Support",
          desc: "We provide marketing, setup and technical support end-to-end."
        },{
          icon: <FaChartLine />,
          title: "High Profit Margins",
          desc: "Earn more with low investment and scalable model."
        }].map((item, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:scale-105 transition duration-300 text-center">
            <div className="text-4xl text-green-400 mb-4 flex justify-center">
              {item.icon}
            </div>
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* REQUIREMENTS */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Franchise Requirements
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            "📍 300–500 sq.ft showroom space",
            "💰 Investment: ₹3–5 Lakhs",
            "⚡ Passion for EV industry",
            "📈 Basic business understanding"
          ].map((item, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-green-500 transition">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-white/10">

          <h2 className="text-3xl font-bold text-center mb-8">
            Apply for Franchise
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-6">

            <input
              name="name"
              placeholder="Your Name"
              className="p-3 rounded bg-black border border-gray-700 focus:border-green-500 outline-none"
              required
            />

            <input
              name="phone"
              placeholder="Phone Number"
              className="p-3 rounded bg-black border border-gray-700 focus:border-green-500 outline-none"
              required
            />

            <input
              name="city"
              placeholder="City"
              className="p-3 rounded bg-black border border-gray-700 focus:border-green-500 outline-none"
              required
            />

            <button className="bg-green-500 hover:bg-green-600 py-3 rounded font-semibold transition shadow-lg">
              Submit on WhatsApp 🚀
            </button>
          </form>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-900/20 blur-2xl"></div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
          Ready to Start Your EV Journey?
        </h2>

        <p className="mb-6 text-gray-400 relative z-10">
          Limited slots available in Raebareli & nearby cities.
        </p>

        <button className="bg-green-500 px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition relative z-10">
          Contact Now
        </button>
      </section>

    </div>
  );
};

export default Franchise;