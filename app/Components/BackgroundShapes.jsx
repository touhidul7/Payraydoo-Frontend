"use client";

export default function BackgroundShapes() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6627C4] to-[#8E3FEF]" />

      {/* Back (lighter) shape */}
      <div
        className="absolute w-[160px] h-[160px] bg-[#A066E8]/25 rounded-[8px] rotate-[15deg]"
        style={{
          top: "70px",
          left: "180px",
        }}
      ></div>

      {/* Front (darker) shape */}
      <div
        className="absolute w-[160px] h-[160px] bg-[#9B5FE0]/40 rounded-[8px] rotate-[15deg]"
        style={{
          top: "100px",
          left: "130px",
        }}
      ></div>
    </div>
  );
}