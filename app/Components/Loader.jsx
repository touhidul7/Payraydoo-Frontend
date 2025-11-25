import React from "react";

export default function Loader({bg="dark"}) {
  return (
    <div className={`flex gap-2 h-screen w-screen justify-center items-center ${bg=="dark"?"bg-[#3E3870]":""}`}>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
      <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
    </div>
  );
}
