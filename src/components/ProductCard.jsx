import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  { id: 1, name: "Ola S1 Pro", range: "181 km", price: "₹1,30,000", img: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/undefined-stripling-yellow-1602248998321.jpg?q=80" },
  { id: 2, name: "Ather 450X", range: "150 km", price: "₹1,25,000", img: "https://evhub.co.in/cdn/shop/files/4_a80609f1-0e18-4ae6-be56-205fd4038821.jpg?v=1749725862&width=823" },
  { id: 3, name: "TVS iQube", range: "140 km", price: "₹1,10,000", img: "https://5.imimg.com/data5/SELLER/Default/2022/8/BA/PK/GW/158705746/vesta-ev-scooter-1000x1000.png" },
  { id: 4, name: "Bajaj Chetak", range: "126 km", price: "₹1,20,000", img: "https://cdn.bikedekho.com/processedimages/bajaj/2022-chetak/source/2022-chetak69a9252c23b41.jpg?imwidth=400&impolicy=resize" },
  { id: 5, name: "Vida V1", range: "165 km", price: "₹1,30,000", img: "https://cdn.bikedekho.com/processedimages/honda/activa-electric/source/activa-electric68ce3ab3c7624.jpg" },
  { id: 6, name: "Ampere Magnus", range: "121 km", price: "₹95,000", img: "https://cdn.bikedekho.com/processedimages/ather-energy/2025-450x/source/2025-450x69a92155caf0d.jpg?imwidth=400&impolicy=resize" },
  { id: 7, name: "Simple One", range: "212 km", price: "₹1,45,000", img: "https://cdn.bikedekho.com/processedimages/ola-electric/2025-s1-pro/source/2025-s1-pro68da2dd1c2f71.jpg?imwidth=400&impolicy=resize" },
  { id: 8, name: "Okinawa Praise", range: "139 km", price: "₹1,10,000", img: "https://cdn.bikedekho.com/processedimages/simple-energy/simple-one/source/simple-one6964d3f677845.jpg?imwidth=400&impolicy=resize" }
];

export default function ProductCard() {
  return (
    <div className="min-h-screen bg-black px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-white mb-3">
          ⚡ EV Scooty Collection
        </h1>
        <p className="text-gray-400 text-lg">
          Smart • Silent • Sustainable
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {products.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-green-500 transition duration-300"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Range Badge */}
            <div className="absolute top-3 left-3 bg-green-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
              {item.range}
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-lg font-bold text-white">
                {item.name}
              </h2>

              <p className="text-green-400 text-xl font-semibold mt-1">
                {item.price}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">

              <a
                href={`https://wa.me/91XXXXXXXXXX?text=I am interested in ${item.name}`}
                target="_blank"
                className="flex items-center gap-2 bg-green-500 px-5 py-2 rounded-full text-black font-semibold hover:bg-green-400 transition"
              >
                <FaWhatsapp /> Enquire
              </a>

              <button className="border border-white px-5 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
                View Details
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}