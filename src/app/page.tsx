"use client";
import { useEffect, useRef, useState } from "react";
import { Cable, ChartColumnIncreasing, Dot } from "lucide-react";
import { motion } from "motion/react";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
// import EmblaCarousel from "@/components/carousel/EmblaCarousel";
// import { EmblaOptionsType } from "embla-carousel";
// import "@/components/carousel/base.css";
// import "@/components/carousel/embla.css";

function CursorLines() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Update dimensions on mount and window resize
    const updateDimensions = () => {
      if (canvasRef.current && containerRef.current) {
        // Use the container's dimensions instead of the canvas
        const { width, height } = containerRef.current.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        // Set display size
        setDimensions({ width, height });

        // Set actual size in memory (scaled for device pixel ratio)
        canvasRef.current.width = width * dpr;
        canvasRef.current.height = height * dpr;

        // Scale the context to ensure correct drawing operations
        const ctx = canvasRef.current.getContext(
          "2d"
        ) as CanvasRenderingContext2D;
        if (ctx) {
          ctx.scale(dpr, dpr);
        }

        // Set CSS size
        canvasRef.current.style.width = `${width}px`;
        canvasRef.current.style.height = `${height}px`;
      }
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      if (canvasRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    const { width, height } = dimensions;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Set line style
    ctx.strokeStyle = "#C81B5B";
    ctx.lineWidth = 1.6;

    // Enable crisp lines
    ctx.lineCap = "round"; // Rounded ends look crisper
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Fixed number of columns and rows
    const cols = 24;
    const rows = 6;

    // Calculate spacing based on the fixed number of columns and rows
    const spacingX = width / cols;
    const spacingY = height / rows;

    for (let row = 0; row <= rows; row++) {
      for (let col = 0; col <= cols; col++) {
        const x = Math.round(col * spacingX); // Round to avoid subpixel rendering
        const y = Math.round(row * spacingY); // Round to avoid subpixel rendering

        // Calculate angle between point and mouse
        const dx = mousePosition.x - x;
        const dy = mousePosition.y - y;
        const angle = Math.atan2(dy, dx);

        // Calculate perpendicular angle (90 degrees rotated)
        const perpAngle = angle + Math.PI / 2;

        // Determine line length
        const lineLength = 45; // Fixed line length

        // Calculate line start and end points from the center
        // Using precise pixel alignment for sharpness
        const startX = Math.round(x - Math.cos(perpAngle) * (lineLength / 2));
        const startY = Math.round(y - Math.sin(perpAngle) * (lineLength / 2));
        const endX = Math.round(x + Math.cos(perpAngle) * (lineLength / 2));
        const endY = Math.round(y + Math.sin(perpAngle) * (lineLength / 2));

        // Draw the line
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    }
  }, [mousePosition, dimensions]);

  return (
    <div
      ref={containerRef}
      className="relative mt-15 h-96 mx-auto px-16 max-w-7xl"
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
}

function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      const h2 = containerRef.current.querySelector("h2");
      if (!h2) return;

      const { words } = splitText(h2);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center px-4 sm:px-8 md:px-16 xl:px-[4rem] 2xl:px-[12.8rem] py-8 sm:py-12 md:py-16 lg:py-20 text-gray-700"
    >
      <h1 className="text-[#001417] text-7xl font-bold leading-tight">
        <div>RISE ABOVE</div>
        <div>COMPETITORS</div>
      </h1>

      <div className="space-y-15">
        <p className="text-[#5D686A] text-lg">
          At Machyna, we&apos;re revolutionizing retail with our interactive,
          intelligent, in-store Customer Engagement Platform.
        </p>

        <div className="flex gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-[#D52052] text-white font-semibold cursor-pointer"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-white border text-[#001417] font-semibold cursor-pointer"
          >
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

      containerRef.current.style.visibility = "visible";

      const h2 = containerRef.current.querySelector("h2");
      if (!h2) return;

      const { words } = splitText(h2);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <section className="bg-[#B51A38] text-white px-16 py-20">
      <div className="max-w-6xl mx-auto mb-16">
        <span className="text-sm text-[#ffff] font-semibold tracking-widest uppercase">
          <div className="flex items-center">
            <Dot /> Why SMARTCART ?
          </div>
        </span>

        <div
          className="container text-3xl md:text-4xl font-bold mt-4"
          ref={containerRef}
          style={{ visibility: "hidden" }}
        >
          <h2 className="flex flex-row">
            SmartCart provides a{" "}
            <span className="text-[#FF3643]">
              seamless, secure, and personalized
            </span>{" "}
            experience.
          </h2>
        </div>
      </div>

      {/* Card 1 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="hidden md:block">
          <div className="w-full h-64 bg-dashed-pattern" />
        </div>

        <div className="bg-[#0C1F24] p-6 rounded-lg border border-white/10">
          <div className="flex gap-4 text-5xl mb-4">
            <ChartColumnIncreasing />
            <h3 className="text-lg font-bold mb-2">Scalable</h3>
          </div>
          <p className="text-sm text-gray-300">
            Scalable to over 1,000,000 products without model retraining. No
            store infrastructure modification. Over-the-air software management.
            Modular software and POS integration
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0C1F24] p-6 rounded-lg border border-white/10">
          <div className="flex gap-4 text-5xl mb-4">
            <Cable />
            <h3 className="text-lg font-bold mb-2">Optimal & Efficient</h3>
          </div>
          <p className="text-sm text-gray-300">
            First full-sized smart shopping cart. Frictionless checkout
            experience using AI barcode recognition. Nestable smart cart design.
            Lightweight, low-power, and low-cost
          </p>
        </div>
      </div>
    </section>
  );
}

// function CarouselSection() {
//   const OPTIONS: EmblaOptionsType = { loop: true };
//   const SLIDE_COUNT = 5;
//   const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
//   return (
//     <div>
//       <EmblaCarousel slides={SLIDES} options={OPTIONS} />
//     </div>
//   );
// }

function QuestionSection() {
  return (
    <section className="bg-white text-black px-4 sm:px-8 md:px-16 xl:px-[4rem] 2xl:px-[12.8rem] py-8 sm:py-12 md:py-16 lg:py-20">
      <h2>QUESTION SECTION</h2>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <CursorLines />
      <HeroSection />
      <WhySection />
      {/* <CarouselSection /> */}
      <QuestionSection />
    </div>
  );
}
