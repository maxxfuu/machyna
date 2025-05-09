"use client";
import { useEffect, useRef, useState } from "react";
import {
  Cable,
  ChartColumnIncreasing,
  Dot,
  ChevronRight,
  Check,
  ChevronLeft,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

        <div className="bg-[#F6F6F6] px-8 py-6 rounded-lg border border-white/10">
          <div className="flex gap-4 text-5xl mb-4">
            <ChartColumnIncreasing color="#01191D" />
            <h3 className="text-lg text-[#01191D] font-bold mb-2">Scalable</h3>
          </div>
          <ul className="text-[#01191D] list-disc">
            <li>
              Scalable to over 1,000,000 products without model retraining.
            </li>
            <li>No store infrastructure modification.</li>
            <li>Over-the-air software management.</li>
            <li>Modular software and POS integration</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F6F6F6] px-8 py-6 rounded-lg border border-white/10">
          <div className="flex gap-4 text-5xl mb-4">
            <Cable color="#01191D" />
            <h3 className="text-lg text-[#01191D] font-bold mb-2">
              Optimal & Efficient
            </h3>
          </div>
          <ul className="text-[#01191D] list-disc">
            <li>First full-sized smart shopping cart.</li>
            <li>
              Frictionless checkout experience using AI barcode recognition.
            </li>
            <li>Nestable smart cart design.</li>
            <li>Lightweight, low-power, and low-cost</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function InStoreBenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      img: "https://via.placeholder.com/350x200?text=Incremental+Spend",
      title: "Incremental consumer spend",
      bullets: [
        "Larger baskets during shops",
        "More frequent return trips",
        "Increased LTV of every customer",
      ],
    },
    {
      img: "https://via.placeholder.com/350x200?text=Revenue+Streams",
      title: "Alternate revenue streams",
      bullets: [
        "Personalized, location-based and real-time contextual advertising",
        "Drive engagement and usage of digital coupons via onboard screen",
      ],
    },
    {
      img: "https://via.placeholder.com/350x200?text=Seamless+Integration",
      title: "Seamless integration",
      bullets: [
        "Works with your existing POS system and loyalty program",
        "Provides easy access to cart monitoring tools to help prevent shrink",
      ],
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-16 xl:px-[4rem] 2xl:px-[12.8rem]">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#001417]">
        Seamless and personalized in-store shopping experience
      </h2>
      <div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: isInView ? i * 0.25 : 0,
              ease: "easeOut",
            }}
            className="bg-[#F6F6F6] rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center text-center"
          >
            <img
              src={card.img}
              alt={card.title}
              className="rounded-xl mb-6 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold text-[#001417] mb-4">
              {card.title}
            </h3>
            <ul className="text-[#5D686A] text-base space-y-2 text-left">
              {card.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-[#D52052] text-lg mt-1">
                    <Check />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TestimonialCarouselSection() {
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

  const media = [
    {
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);
  const imgRef = useRef(null);
  const inView = useInView(imgRef, { once: true, margin: "-100px" });

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === media.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-[#F7F9F8] py-24 px-4 sm:px-8 md:px-16 xl:px-[4rem] 2xl:px-[12.8rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#232323]">
            Machyna in the media
          </h2>
          <button className="mt-6 px-8 py-4 bg-[#232323] text-white rounded-full font-semibold text-lg inline-flex items-center gap-2 cursor-pointer">
            Learn more about Machyna <ChevronRight />
          </button>
          <div className="flex gap-4 mt-12">
            {/* left button */}
            <motion.button
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="group flex flex-row items-center justify-center w-12 h-12 rounded-full bg-[#ffff] border-2 border-[#232323] bg-[#fffff] cursor-pointer hover:bg-[#232323] transition-colors duration-300"
            >
              <ChevronLeft
                className="transition-colors duration-300 group-hover:text-white"
                style={{ color: "#232323" }}
              />
            </motion.button>

            {/* right button */}
            <motion.button
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="group flex flex-row items-center justify-center w-12 h-12 rounded-full bg-[#ffff] border-2 border-[#232323] bg-[#fffff] cursor-pointer hover:bg-[#232323] transition-colors duration-300"
            >
              <ChevronRight
                className="transition-colors duration-300 group-hover:text-white"
                style={{ color: "#232323" }}
              />
            </motion.button>
          </div>
        </div>

        {/* Right column */}
        <div className="relative overflow-hidden">
          {/* Left margin/gradient overlay */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-[#F7F9F8] to-transparent z-10"></div>

          {/* Image carousel */}
          <motion.div
            className="flex"
            animate={{ x: -current * 100 + "%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            ref={imgRef}
          >
            {media.map((item, index) => (
              <motion.div
                key={index}
                className="min-w-full px-4"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={item.img}
                  alt={`Media ${index + 1}`}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuestionSection() {
  return (
    <section className="bg-white text-[#01191D] px-4 sm:px-8 md:px-16 xl:px-[4rem] 2xl:px-[12.8rem] py-8 sm:py-12 md:py-16 lg:py-20 space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">FAQs</h2>
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg md:text-xl font-semibold">
            Is Checkout Faster?
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-600">
            Yes. The SmartCart enables fast and contactless shopping powered by
            frontier computer vision models means no more waiting in line.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg md:text-xl font-semibold">
            Does it protect against Theft?
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-600">
            Yes. Each item is verified by weight, and a camera records every
            shopping session.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg md:text-xl font-semibold">
            Does it SmartCart Need Recharging?
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-600">
            Yes. The SmartCart has a 14+ hour battery life before the batteries
            needs to be charged or swapped.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg md:text-xl font-semibold">
            Does the SmartCart increase average order value?
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-600">
            Yes. SmartCart boosts average order value by suggesting relevant
            add-ons based on items in the cart.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="bg-[#F6F6F6] rounded-4xl p-26 mt-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-6xl md:text-4xl font-bold">
            Transform your shopping experience
          </h2>
          <p className="text-lg text-gray-700">
            Reduce wait times, drive revenue and delight your customers with
            Machyna&apos;s SmartCart.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full font-semibold inline-flex items-center">
            Book a Demo
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <CursorLines />
      <HeroSection />
      <WhySection />
      <InStoreBenefitsSection />
      <TestimonialCarouselSection />
      <QuestionSection />
    </div>
  );
}
