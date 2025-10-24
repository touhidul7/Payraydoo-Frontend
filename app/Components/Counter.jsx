"use client";
import CountUp from "react-countup";

export default function Counter() {
  const stats = [
    { value: 95, suffix: "%", label: "Fewer Errors" },
    { value: 11, suffix: "X", label: "Faster Cycle Times" },
    { value: 60, suffix: "%", label: "Lower Cost" },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 bg-gradient-to-r from-[#2B1A5A] to-[#412B88] text-white rounded-2xl border px-32   md:p-10 shadow-lg custom-card h-auto font-mont">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center relative px-6"
        >
          <h2 className="text-5xl font-bold">
            <CountUp end={stat.value} duration={2.5} />
            {stat.suffix}
          </h2>
          <p className="text-2xl mt-2 opacity-80">{stat.label}</p>

          {/* Divider line between items */}
          {index !== stats.length - 1 && (
            <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-10 w-[2px] bg-gradient-to-b from-transparent via-purple-400 to-transparent " />
          )}
        </div>
      ))}
    </div>
  );
}