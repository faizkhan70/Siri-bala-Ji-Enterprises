import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const spareParts = [
  {
    id: 1,
    name: "EV Battery",
    desc: "High performance lithium battery",
    img: "https://www.lionev.in/cdn/shop/files/EBIKECONTROLLER_grande.png?v=1703234924",
  },
  {
    id: 2,
    name: "Motor",
    desc: "Powerful BLDC motor",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/11/469531342/KI/UF/EE/3174989/-10-inch-1100-watt-scooty-motor-250x250.png",
  },
  {
    id: 3,
    name: "Controller",
    desc: "Smart control system",
    img: "https://m.media-amazon.com/images/I/4196XhFRpxL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Charger",
    desc: "Fast charging support",
    img: "https://onlineautoservices.com/wp-content/uploads/2023/11/dc-dc-300x300.webp",
  },
  {
    id: 5,
    name: "Display",
    desc: "Digital speedometer",
    img: "https://www.lionev.in/cdn/shop/products/DigitalMeter_grande.png?v=1682071515",
  },
  {
    id: 6,
    name: "Brake Kit",
    desc: "Advanced braking system",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/8/447061867/FK/HU/WC/4955236/combi-brake-assembly-for-electric-scooter-500x500.jpeg",
  },
];

const SpareParts = () => {
  return (
    <div className="bg-black px-4 sm:px-6 md:px-10 py-12 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-green-500/20 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-blue-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* Heading */}
      <div className="text-center mb-10 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          🔧 EV Spare Parts
        </h1>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Reliable • Durable • High Performance
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

        {spareParts.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-green-500 transition duration-300 flex flex-col"
          >

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-44 sm:h-48 md:h-52 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-green-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
                Genuine
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  {item.name}
                </h2>
                <p className="text-gray-400 mt-1 text-sm">
                  {item.desc}
                </p>
              </div>

              {/* Mobile CTA */}
              <a
                href={`https://wa.me/91XXXXXXXXXX?text=I need ${item.name}`}
                target="_blank"
                className="mt-4 md:hidden bg-green-500 text-black text-center py-2 rounded-full font-semibold"
              >
                Enquire
              </a>
            </div>

            {/* Desktop Hover Overlay */}
            <div className="hidden md:flex absolute inset-0 bg-black/80 flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">

              <a
                href={`https://wa.me/91XXXXXXXXXX?text=I need ${item.name}`}
                target="_blank"
                className="flex items-center gap-2 bg-green-500 px-5 py-2 rounded-full text-black font-semibold hover:bg-green-400 transition"
              >
                <FaWhatsapp /> Enquire
              </a>

              <button className="border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition">
                View Details
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default SpareParts;