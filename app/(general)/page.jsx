"use client";
import Image from "next/image";
import small_dash from "../../public/images/Untitled-1 (2).png";
import ButtonAnimated from "../Components/ButtonAnimated";
import Counter from "../Components/Counter";
import TiltShineCard from "../Components/TiltShineCard";
import small_logo from "../../public/logo/small_logo.png";
import TabSection from "../Components/TabSection";
import InvoiceFeaturesLeft from "../Components/InvoiceFeaturesLeft";
import dashboard2 from "../../public/images/dasboard-img.png";
import microsoft from "../../public/logo/microsoft.png";
import oracle from "../../public/logo/Oracle_NetSuite_2021.png";
import sap from "../../public/logo/SAP-Emblem.png";
import workday from "../../public/logo/Workday_Logo.png";
import sage from "../../public/logo/Sage-logo_svg.svg.png";
import banco from "../../public/logo/Banco_Santander_Logotipo.svg.png";
import barclays from "../../public/logo/Barclays-Logo.png";
import hsbc from "../../public/logo/HSBC-Logo.png";
import jp_morgan from "../../public/logo/JP-Morgan-Chase-Logo.png";
import llyods from "../../public/logo/Lloyds-Bank-Logo-2013.png";
import new_wise from "../../public/logo/New_Wise_(formerly_TransferWise)_logo.svg.png";
import plaid from "../../public/logo/Plaid_logo.svg.png";
import revolut from "../../public/logo/Revolut.png";
import TestimonialSlider from "../Components/TestimonialSlider";
import second_dash from "../../public/images/4.png";
import s_small_dash from "../../public/images/3.png";
import CardAnimationSection from "../Components/CardAnimationSection";
import AnimatedSection from "../Components/AnimatedSection";
import TagibleResultCard from "../Components/TagibleResultCard";

export default function Home() {
  const receivableFeatures = [
    {
      title: "Auto-send invoices",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=800&fit=crop",
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Smart payment reminders",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=800&fit=crop",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Instant payment matching",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "Real-time customer status",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop",
      color: "from-violet-500 to-violet-700",
    },
  ];
  const payableFeatures = [
    {
      title: "Capture invoices instantly",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop",
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Validate with precision",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Approvals that move fast",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      title: "One-click payments",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      color: "from-violet-500 to-violet-700",
    },
  ];

  return (
    <div className="p-2 sm:p-4 home-page pt-4 sm:pt-16 pb-6 sm:pb-20 scroll-smooth overflow-x-hidden">
      {/* hero section start */}
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-4 sm:gap-8 py-4 sm:py-10 px-3 sm:px-4 font-mont">
        {/* heading and slogan section */}
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight px-2">
            Finance That Runs Itself
          </h2>
          <h2 className="text-base md:text-2xl lg:text-3xl font-medium md:font-bold px-2">
            Collect Cash | Pay Vendors | Close Faster
          </h2>
          <p className="text-[14px] xs:text-base sm:text-xl lg:text-2xl font-medium mt-2 sm:mt-4 px-3 max-w-4xl">
            Payradoo orchestrates AR & AP end to end inside your ERP
          </p>
        </div>
        {/* heading and slogan section end */}

        {/* action button */}
        <div className="mt-2 sm:mt-4">
          <ButtonAnimated content="Get Your Savings Report" />
        </div>
        {/* action button end */}

        <Counter />
      </div>

      {/* dashboard image start */}
      <div className=" mx-auto px-3 sm:px-4 mt-16 flex justify-center items-center">
        {/* Tilt Shine Card Section */}
        <div className="w-fit h-fit relative">
          <TiltShineCard />
          <Image
            src={small_dash}
            alt="small dashboard"
            width={280}
            height={280}
            className="rounded-xl w-20 lg:w-52 h-auto sm:rounded-2xl absolute bottom-0"
            priority
          />
        </div>
        {/* Dashboard image container */}
      </div>

      {/* hero section end */}

      {/* Second section starts here */}
      <div className="mx-auto max-w-[95%] sm:max-w-[98%] bg-white rounded-2xl sm:rounded-3xl relative py-8 sm:py-10 mt-16 sm:mt-32">
        {/* upper part */}

        {/* Logo */}
        <div className="relative">
          <div className="border-animation absolute -top-10 sm:-top-20 left-0 right-0 mx-auto p-2 sm:p-4">
            <Image
              src={small_logo}
              alt="small logo"
              width={50}
              height={50}
              className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 lg:w-[75px] lg:h-[75px]"
            />
          </div>
        </div>

        {/* UPPER CONTENT */}
        <div className="mx-auto max-w-7xl mt-8 sm:mt-14 p-4 sm:p-6 lg:p-14 font-mont text-center">
          <h2 className="gradient-header font-semibold text-xl sm:text-3xl lg:text-5xl py-2 sm:py-3 px-2">
            Why Orchestrate Your Finance Operations?
          </h2>
          <p className="text-black text-base sm:text-xl lg:text-2xl font-medium mt-2 sm:mt-5">
            No more tab-hopping in manual finance work. Just flow
          </p>
          <p className="text-gray-600 font-medium text-sm sm:text-base lg:text-xl mt-2 sm:mt-4 px-2 max-w-4xl mx-auto">
            Payraydoo captures invoices, routes approvals, reconciles payments,
            and tracks collections so your team focuses on decisions, not data
            entry.
          </p>
          <div className="mt-4 sm:mt-8 lg:mt-10">
            <ButtonAnimated content="See how much you'll save" />
          </div>
        </div>
        {/* UPPER CONTENT END  */}

        {/* lower part  */}
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl max-w-full font-mont relative">
          {/* INVOICE FEATURES */}
          <div className="py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-20">
            <h2 className="gradient-text font-semibold text-xl sm:text-3xl lg:text-5xl">
              Accounts Receivable
            </h2>
            <h2 className="text-black text-2xl sm:text-4xl lg:text-6xl xl:text-7xl mt-2 sm:mt-4 font-medium">
              Receivables on time, every time
            </h2>
            <TabSection dirrection="row" data={receivableFeatures} />
          </div>

          <div className="mt-8 sm:mt-16 mb-8 sm:mb-20 px-4 sm:px-6 lg:px-20">
            <h2 className="gradient-text font-semibold text-xl sm:text-3xl lg:text-5xl py-2">
              Accounts Payable
            </h2>
            <h2 className="text-black text-2xl sm:text-4xl lg:text-6xl xl:text-7xl mt-2 sm:mt-4 font-medium">
              Invoices in. Payments out
            </h2>
            {/* <InvoiceFeaturesLeft /> */}
            <TabSection dirrection="row-reverse" data={payableFeatures} />
          </div>

          {/* finance stack section */}
          <div className="finance-stack-body rounded-xl pt-12 sm:pt-24 lg:pt-32 py-8 sm:py-16 pb-16 sm:pb-32 lg:pb-48 px-4 sm:px-6 lg:px-12 mx-auto max-w-[95%] sm:max-w-[98%]">
            <div className="px-2">
              <h2 className="text-white text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-center font-semibold">
                The missing link in your
              </h2>
              <h2 className="finance text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-center font-semibold mt-2 sm:mt-4">
                finance stack
              </h2>
            </div>
            {/* Animated card section--------------------------------------------- */}
            {/* <CardAnimationSection/> */}
            <AnimatedSection />
            {/* Animated card section end here-------------------------------------- */}

            <div className="text-center mt-8 sm:mt-16">
              <ButtonAnimated content={"Connect Your Finance Stack"} />
            </div>

            <div className="text-center mt-8 sm:mt-16 px-2">
              <h2 className="text-white text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-center font-semibold">
                Smarter workflows.
              </h2>
              <h2 className="finance text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-center font-semibold mt-2 sm:mt-4 py-1 sm:py-2">
                Tangible results.
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mt-8 sm:mt-16 mb-8 sm:mb-16 max-w-6xl mx-auto items-center justify-center font-semibold px-3">
              <TagibleResultCard
                title="Measurable by Design"
                content={"Track time, errors and cache impact"}
              />

              <TagibleResultCard
                title="Complete control"
                content={"You set the rules, we enforce them."}
              />

              <TagibleResultCard
                title="Global-ready"
                content={"Multi-entity. Multi currency. Audit proof."}
              />

              <TagibleResultCard
                title=" Seamless integrations"
                content={" Connect to your ERP in minutes."}
              />

              <TagibleResultCard
                title="ERP-native"
                content={"  Works with how you already work."}
              />
            </div>
          </div>
          {/* finance stack section end here */}

          <div className="text-center mb-16 sm:mb-28 lg:mb-40 relative px-4">
            <Image
              src={dashboard2}
              alt="small dashboard"
              width={800}
              height={550}
              className="rounded-xl sm:rounded-2xl mx-auto w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] h-auto absolute top-0 left-0 right-0 -mt-16 sm:-mt-24 lg:-mt-36"
            />
          </div>

          {/* Payraydoo promise start here */}
          <section>
            <div className="text-center mt-8 sm:mt-16 px-4">
              <h2 className="text-black text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-center font-semibold">
                The Payraydoo Promise:
              </h2>
              <h2 className="finance text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-center font-semibold mt-2 sm:mt-4 text-shadow-lg py-1 sm:py-2">
                Capabilities & integrations
              </h2>
            </div>

            <div className="text-center mt-8 sm:mt-16">
              <ButtonAnimated
                dark={false}
                content={"ERP & Accounting"}
                className="text-sm sm:text-base"
              />
            </div>

            {/* company logo */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-16 mb-8 sm:mb-16 max-w-6xl mx-auto items-center justify-center px-3">
                <Image
                  src={microsoft}
                  alt="microsoft logo"
                  width={120}
                  height={60}
                  className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto"
                />
                <Image
                  src={oracle}
                  alt="oracle logo"
                  width={120}
                  height={60}
                  className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto"
                />
                <Image
                  src={sap}
                  alt="sap logo"
                  width={120}
                  height={60}
                  className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto"
                />
                <Image
                  src={workday}
                  alt="workday logo"
                  width={120}
                  height={60}
                  className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto"
                />
                <Image
                  src={sage}
                  alt="sage logo"
                  width={120}
                  height={60}
                  className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto col-span-2 sm:col-span-1"
                />
              </div>
            </div>

            <div className="text-center mt-8 mb-8 sm:mb-16">
              <ButtonAnimated
                content="Banking, Treasury & Payment"
                dark={false}
              />
            </div>

            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-16 mb-8 sm:mb-16 max-w-6xl mx-auto items-center justify-center px-3">
                <Image
                  src={jp_morgan}
                  alt="jp morgan logo"
                  width={120}
                  height={60}
                  className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto"
                />
                <Image
                  src={barclays}
                  alt="barclays logo"
                  width={120}
                  height={60}
                  className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto"
                />
                <Image
                  src={banco}
                  alt="banco logo"
                  width={120}
                  height={60}
                  className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto"
                />
                <Image
                  src={hsbc}
                  alt="hsbc logo"
                  width={120}
                  height={60}
                  className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto"
                />
                <Image
                  src={llyods}
                  alt="lloyds logo"
                  width={120}
                  height={60}
                  className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto"
                />
                <Image
                  src={plaid}
                  alt="plaid logo"
                  width={120}
                  height={60}
                  className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto"
                />
                <Image
                  src={new_wise}
                  alt="wise logo"
                  width={120}
                  height={60}
                  className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto"
                />
                <Image
                  src={revolut}
                  alt="revolut logo"
                  width={120}
                  height={60}
                  className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto"
                />
              </div>
            </div>

            <div className="text-center mt-8 mb-8 sm:mb-16">
              <ButtonAnimated content="Explore more integrations" />
            </div>

            <div className="px-3 sm:px-4 lg:px-6 mb-16 sm:mb-32 bg-white">
              <TestimonialSlider />
            </div>
          </section>

          <div className="finance-stack-body rounded-xl pt-8 sm:pt-16 px-4 sm:px-6 lg:px-12 mx-auto max-w-[95%] sm:max-w-[98%] font-mont">
            <div className="flex flex-col justify-center items-center gap-3 sm:gap-6 px-3">
              <h2 className="text-center text-xl sm:text-3xl lg:text-5xl font-semibold px-0 sm:px-6 lg:px-40 xl:px-60">
                Ready to save thousands on{" "}
                <span className="gradient-text">invoice processing?</span>
              </h2>
              <p className="text-center text-sm sm:text-lg lg:text-xl font-medium">
                Run a quick analysis and get your personalized ROI.
              </p>
              <ButtonAnimated content="Get your Savings Report" />
            </div>

            {/* dashboard images - Responsive layout */}
            <div className="relative mt-12 sm:mt-24 lg:mt-32 lg:w-full w-[90%] m-auto flex justify-center items-center">
              <div className="w-fit h-fit relative">
                <Image
                  src={second_dash}
                  alt="main dashboard"
                  width={1000}
                  height={750}
                  className="rounded-t-xl sm:rounded-t-2xl mx-auto w-full max-w-[300px] xs:max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[900px]"
                />

                <Image
                  src={s_small_dash}
                  alt="small dashboard"
                  width={200}
                  height={150}
                  className="absolute top-[32] left-0 lg:-ml-32 -ml-6  rounded-xl w-[100px] sm:w-[150px] lg:w-[200px] xl:w-[250px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
