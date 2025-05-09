import "../globals.css";
import Image from "next/image";

export default function about() {
  return (
    <section className="flex flex-col justify-between px-4 sm:px-8 md:px-16 xl:px-[4rem] 2xl:px-[12.8rem]">
      {/* Title */}
      <div>
        <h1 className="text-6xl text-[#01191D] font-semibold py-18">
          About Us
        </h1>
      </div>

      {/* Sub Title */}
      <a className="text-[#01191D] py-19">
        At Machyna, our journey began with a clear mission: redefine retail.
        Driven by a shared passion for innovation and a belief in the power of
        technology, we&apos;ve blended our skills and experience in cutting-edge
        tech to craft a shopping experience that serves people and businesses.
      </a>

      {/* Profile Cards */}
      <div className="flex flex-col gap-16 text-[#281429] py-16 md:flex-row md:justify-between">
        {/* Victor Chan */}
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <h1 className="text-2xl font-bold">Victor Chan</h1>
          <h2 className="text-md font-semibold text-gray-700 mb-4">
            FOUNDER AND CEO
          </h2>
          <Image
            src="/portrait/victor_chan.jpg"
            width={250}
            height={250}
            alt="Picture of Victor Chan"
            className="rounded-lg mb-4"
          />
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>
              Head of Machine Learning Systems Team at Qualcomm Research
              2007–2016
            </li>
            <li>30+ issued U.S. patents</li>
            <li>Developed first ML adversarial technique</li>
            <li>Co-developed low-power AI sensor at Qualcomm Research</li>
            <li>
              M.S. Neuroscience, M.S. Computer Science at USC, B.A. Cognitive
              Science and Math at University of Rochester
            </li>
          </ul>
        </div>

        {/* Raylen Li */}
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <h1 className="text-2xl font-bold">Raylen Li</h1>
          <h2 className="text-md font-semibold text-gray-700 mb-4">
            FOUNDER AND LEAD ENGINEER
          </h2>
          <Image
            src="/portrait/raylen_li.jpg"
            width={250}
            height={250}
            alt="Picture of Raylen Li"
            className="rounded-lg mb-4"
          />
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>
              Award–winning competitive robotics and unmanned aerial vehicle
              engineer
            </li>
            <li>Self–driving vehicle research at RISELab, UC Berkeley</li>
            <li>Rapid prototyping and manufacturing expert</li>
            <li>
              B.S. Electrical Engineering and Computer Science, Mechanical
              Engineering, Data Science at UC Berkeley
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center font-semibold mt-12 text-[#01191D]">
        Proven track record in low-power AI and computer vision product
        development
      </p>
    </section>
  );
}
