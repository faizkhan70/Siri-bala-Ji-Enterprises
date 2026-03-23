export default function Hero() {
  return (
    <>
      {/* 👇 IMPORTANT FIX */}
      <section className="relative w-full min-h-screen pt-20 flex items-center justify-center bg-black overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-10 left-10"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6 border border-white/10">
              ⚡ India's Smart EV Choice
            </div>

            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
              Ride the Future <br />
              <span className="text-green-400">Electric Scooties</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-lg">
              Bala Ji Enterprises, Civil Lines Raebareli — eco-friendly EV scooters.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-green-400">120km+</h3>
                <p className="text-gray-400 text-sm">Range</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-green-400">₹0.25/km</h3>
                <p className="text-gray-400 text-sm">Running Cost</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-green-400">3h</h3>
                <p className="text-gray-400 text-sm">Fast Charge</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                className="flex items-center gap-2 bg-green-500 px-6 md:px-7 py-3 rounded-full font-semibold"
              >
                Book Now
              </a>

              <button className="border border-white px-6 md:px-7 py-3 rounded-full">
                Explore Models
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <img
              src="https://www.amomobility.com/assets/images/model/Feisty/gallery/fiesty-ev-1.png"
              alt="EV Scooty"
              className="w-[280px] sm:w-[350px] md:w-[450px] drop-shadow-[0_20px_60px_rgba(0,255,100,0.3)]"
            />
          </div>

        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

      </section>
    </>
  );
}