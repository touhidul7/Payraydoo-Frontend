'use client';
import Image from "next/image";
import small_dash from "../public/images/Untitled-1 (2).png"
import ButtonAnimated from "./Components/ButtonAnimated";
import Counter from "./Components/Counter";
import TiltShineCard from "./Components/TiltShineCard";
import small_logo from "../public/logo/small_logo.png"
import ScrollRevealSection from "./Components/ScrollRevealSection";

export default function Home() {

  return (
    <div className="p-4 home-page pt-16">
     {/* hero section start */}

      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-8 py-10 px-4 font-mont">
        {/* heading and slogan section */}
        <div className="flex flex-col justify-center items-center gap-3 ">
          <h2 className="text-7xl font-bold"> Finance That Runs Itself </h2>
          <h2 className="text-3xl font-bold">Collect Cash | Pay Vendors | Close Faster</h2>
          <p className="text-2xl font-medium mt-4">Payradoo orchestrates AR & AP end to end inside your ERP</p>
        </div>
        {/* heading and slogan section  end*/}

        {/*action button*/}
        <ButtonAnimated content="Get Your Savings Report" />
        {/*action button end*/}

        <Counter />
      </div>
      {/* dashboard image start */}
      <div>
        <div className=" flex justify-center relative h-screen mt-20 mb-20">
      <TiltShineCard/>
        </div>
        <div className="flex justify-center items-center mt-10 relative">
          <Image src={small_dash} alt="small dashboard" width={250} height={250} className="rounded-2xl absolute bottom-45 left-70"/>
        </div>
      </div>
      
      {/* hero section end */}
      {/* Second section starts here */}
      <div className="mx-auto max-w-[98%] bg-white rounded-3xl relative py-10">
        {/* upper part */}

        {/* Logo */}
        <div className="relative">
          <div className=" border-animation absolute -top-25 left-165 p-4">
          <Image src={small_logo} alt="small logo" width={75} height={75} />
        </div>
        </div>

        {/* UPEPER CONTENT */}
        <div className="mx-auto max-w-7xl mt-14 p-14 font-mont text-center  ">
            <h2 className="gradient-text font-semibold text-5xl py-3 ">Why Oschestrates Your Finance Operations?</h2>
            <p className="text-black text-2xl font-medium mt-5">No more tab-hopping in manual finance work. Just flow</p>
            <p className="text-gray-600 font-medium text-2xl mt-4">Payraydoo captures invoices, routes approvals, reconciles payments, and tracks collections so your
team focuses on decisions, not data entry.</p>
            <div className="mt-10 ">
              <ButtonAnimated content="See how much you'll save"/>
            </div>
        </div>
        {/* UPEPER CONTENT END  */}

        {/* lower part  */}
        <div className="bg-gray-200 rounded-3xl py-20 max-w-full">

        </div>

      </div>
    <ScrollRevealSection/>
    </div>
  );
}