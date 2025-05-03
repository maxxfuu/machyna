'use client'
import {useEffect, useRef } from 'react';
import { Cable, ChartColumnIncreasing, Dot} from 'lucide-react';
import { motion } from 'motion/react';
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";

function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-80 items-center px-16 py-16 text-gray-700 `max-w-5xl mx-auto">
      <div>
        <h1 className="text-[#001417] text-6xl font-bold leading-tight">
          <div>
            RISE ABOVE
          </div>
          <div>
            COMPETITORS
          </div>
        </h1>
      </div>

      <div className="space-y-6">
        <p className="text-[#001417] text-lg">
        At Machyna, we’re revolutionizing retail with our interactive, intelligent, in-store
        Customer Engagement Platform.
        </p>

        <div className="flex gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-[#D52052] text-white font-semibold cursor-pointer">
            Get Started
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-white border text-[#001417] font-semibold cursor-pointer">
            Join Us
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = 'visible';

      const h2 = containerRef.current.querySelector('h2');
      if (!h2) return;

      const { words } = splitText(h2);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: 'spring',
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return(
    <section className="bg-[#B51A39] text-white px-16 py-20">
      <div className="max-w-6xl mx-auto mb-16">
        <span className="text-sm text-white font-semibold tracking-widest uppercase">
          <div className='flex items-center'>
            <Dot/> Why SMARTCART ?
          </div> 
        </span> 
        <div className="container" ref={containerRef} style={{ visibility: "hidden" }}>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            SmartCart provides a <span className="text-[white]">seamless, secure, and personalized</span> experience.
          </h2>
        </div> 

      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="hidden md:block">
          <div className="w-full h-64 bg-dashed-pattern" />
        </div>

        <div className="bg-[#001417] p-6 rounded-lg border border-white/10">
          <div className="flex gap-4 text-5xl mb-4">
            <ChartColumnIncreasing/>
            <h3 className="text-lg font-bold mb-2">Scalable</h3>
          </div>
          <p className="text-sm text-gray-300">
            Scalable to over 1,000,000 products without model retraining. No store infrastructure modification. Over-the-air software management. Modular software and POS integration
          </p>
        </div>

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
