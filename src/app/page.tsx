import { Cable, ChartColumnIncreasing} from 'lucide-react';

function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-16 text-gray-700 `max-w-5xl mx-auto">
      <div>
        <h1 className="text-6xl font-bold leading-tight">
          <div>
            RISE ABOVE
          </div>
          <div>
            COMPETITORS
          </div>
        </h1>
      </div>

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

function WhySection() {
  return(
<section className="bg-[#B51A39] text-white px-6 py-20">
  {/* Top heading and subheading */}
  <div className="max-w-6xl mx-auto mb-16">
    <span className="text-sm text-white font-semibold tracking-widest uppercase">
      WHY SMARTCART?
    </span>
    <h2 className="text-3xl md:text-4xl font-bold mt-4">
      SmartCart provides a <span className="text-[white]">seamless, secure, and personalized</span> experience.
    </h2>
  </div>

  {/* Grid layout with visual + 2 stats */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
    {/* Visual placeholder */}
    <div className="hidden md:block">
      {/* Could be an SVG or pattern image */}
      <div className="w-full h-64 bg-dashed-pattern" />
    </div>

    {/* Stat 1 */}
    <div className="bg-[#0C1F24] p-6 rounded-lg border border-white/10">
      <div className="flex gap-4 text-5xl mb-4">
        <ChartColumnIncreasing/>
        <h3 className="text-lg font-bold mb-2">Scalable</h3>
      </div>
      <p className="text-sm text-gray-300">
        Scalable to over 1,000,000 products without model retraining. No store infrastructure modification. Over-the-air software management. Modular software and POS integration
      </p>
    </div>

    {/* Stat 2 */}
    <div className="bg-[#0C1F24] p-6 rounded-lg border border-white/10">
      <div className="flex gap-4 text-5xl mb-4">
        <Cable/>
        <h3 className="text-lg font-bold mb-2">Optimal & Efficient</h3>
      </div>
      <p className="text-sm text-gray-300"> 
        First full-sized smart shopping cart. Frictionless checkout experience using AI barcode recognition. Nestable smart cart design. Lightweight, low-power, and low-cost
      </p>
    </div>
  </div>
</section>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <WhySection/>
    </div>
  );
}
