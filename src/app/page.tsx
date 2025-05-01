import Image from "next/image";

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-16 text-gray-700 `max-w-5xl mx-auto">
      {/* Left: big headline */}
      <div>
        <h1 className="text-5xl font-bold leading-tight">
          RISE<br/>ABOVE<br/>COMPETITORS
        </h1>
      </div>

      {/* Right: sub-text + buttons */}
      <div className="space-y-6">
        <p className="text-lg text-gray-700">
        At Machyna, we’re revolutionizing retail with our interactive, intelligent, in-store
        Customer Engagement Platform.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-lg bg-[#EB2845] text-white font-semibold">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-lg bg-black border text-white font-semibold">
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero/>
    </div>
  );
}
