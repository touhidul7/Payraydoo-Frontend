"use client";
import Image from "next/image";
import small_dash from "../public/images/Untitled-1 (2).png";
import ButtonAnimated from "./Components/ButtonAnimated";
import Counter from "./Components/Counter";
import TiltShineCard from "./Components/TiltShineCard";
import small_logo from "../public/logo/small_logo.png";
import InvoiceFeatures from "./Components/InvoiceFeatures";
import InvoiceFeaturesLeft from "./Components/InvoiceFeaturesLeft";
import setting from "../public/images/noun-erp-7857504.png";
import dashboard2 from "../public/images/dasboard-img.png";
import microsoft from "../public/logo/microsoft.png"
import oracle from "../public/logo/Oracle_NetSuite_2021.png"
import sap from "../public/logo/SAP-Emblem.png"
import workday from "../public/logo/Workday_Logo.png"
import sage from "../public/logo/Sage-logo_svg.svg.png"
import banco from "../public/logo/Banco_Santander_Logotipo.svg.png"
import barclays from "../public/logo/Barclays-Logo.png"
import hsbc from "../public/logo/HSBC-Logo.png"
import jp_morgan from "../public/logo/JP-Morgan-Chase-Logo.png"
import llyods from "../public/logo/Lloyds-Bank-Logo-2013.png"
import new_wise from "../public/logo/New_Wise_(formerly_TransferWise)_logo.svg.png"
import plaid from "../public/logo/Plaid_logo.svg.png"
import revolut from "../public/logo/Revolut.png"
import TestimonialSlider from "./Components/TestimonialSlider";
import second_dash from "../public/images/4.png"
import s_small_dash from "../public/images/3.png"

export default function Home() {
  return (
    <div className="p-2 sm:p-4 home-page pt-4 sm:pt-16 pb-6 sm:pb-20 scroll-smooth overflow-x-hidden">
      {/* hero section start */}
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-4 sm:gap-8 py-4 sm:py-10 px-3 sm:px-4 font-mont">
        {/* heading and slogan section */}
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight px-2">
            Finance That Runs Itself
          </h2>
          <h2 className="text-base xs:text-lg sm:text-2xl lg:text-3xl font-bold px-2">
            Collect Cash | Pay Vendors | Close Faster
          </h2>
          <p className="text-sm xs:text-base sm:text-xl lg:text-2xl font-medium mt-2 sm:mt-4 px-3 max-w-4xl">
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
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        {/* Tilt Shine Card Section */}
        <div className="flex justify-center relative min-h-[250px] xs:min-h-[300px] sm:min-h-[400px] lg:h-[80vh] xl:h-[90vh] mt-8 sm:mt-20 mb-8 sm:mb-20">
          <TiltShineCard />
        </div>

        {/* Dashboard image container */}
        <div className="flex justify-center items-end relative -mt-10 sm:-mt-20 lg:-mt-28 xl:-mt-36">
          <div className="relative w-full max-w-6xl flex justify-center">
            {/* Small dashboard - scales smoothly with screen */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:left-[5%] lg:left-[10%] sm:translate-x-0">
              <div className="w-[65vw] xs:w-[60vw] sm:w-[35vw] md:w-[30vw] lg:w-[250px] xl:w-[280px]">
                <Image
                  src={small_dash}
                  alt="small dashboard"
                  width={280}
                  height={280}
                  className="rounded-xl sm:rounded-2xl w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
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
            <InvoiceFeatures />
          </div>

          <div className="mt-8 sm:mt-16 mb-8 sm:mb-20 px-4 sm:px-6 lg:px-20">
            <h2 className="gradient-text font-semibold text-xl sm:text-3xl lg:text-5xl py-2">
              Accounts Payable
            </h2>
            <h2 className="text-black text-2xl sm:text-4xl lg:text-6xl xl:text-7xl mt-2 sm:mt-4 font-medium">
              Invoices in. Payments out
            </h2>
            <InvoiceFeaturesLeft />
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

            {/* First Card */}
            <div className="flex justify-center items-center mt-8 sm:mt-12 px-2">
              <div className="w-full max-w-[90%] sm:max-w-[750px] h-auto bg-white clip-card rounded-xl custom-white-card relative">
                <div className="z-10">
                  <div className="border-animation absolute -top-6 sm:-top-12 left-[50%] p-2 sm:p-3 z-10 transform -translate-x-1/2">
                    <Image
                      src={small_logo}
                      alt="small logo"
                      width={75}
                      height={75}
                      className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 lg:w-[75px] lg:h-[75px]"
                    />
                  </div>
                </div>
                <h2 className="text-gray-700 mt-6 sm:mt-8 p-4 sm:p-5 lg:px-6 lg:py-8 font-medium font-mont text-base sm:text-xl lg:text-2xl text-center">
                  Payraydoo bridges receivables and payables automating the flow
                  of money in and out
                </h2>
              </div>
            </div>

            {/* 2nd card - Responsive grid */}
            <div className="w-full max-w-6xl mx-auto custom-white-card mt-8 sm:mt-16 font-mont p-4 sm:p-6 lg:p-8 rounded-xl bg-white">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-8 text-center">
                <div className="w-full lg:w-auto">
                  <h2 className="text-black text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-8">
                    Accounts Receivable
                  </h2>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-gray-700 font-medium text-xs sm:text-sm lg:text-base">
                    <div><p>Cash Application agent</p></div>
                    <div><p>Collection agent</p></div>
                    <div><p>Dispute agent</p></div>
                    <div><p>Closing agent</p></div>
                  </div>
                </div>

                <div className="hidden lg:block h-24 sm:h-32 custom-bar bg-white w-0.5"></div>
                <div className="block lg:hidden w-full h-0.5 custom-bar bg-white my-4"></div>

                <div className="w-full lg:w-auto">
                  <h2 className="text-black text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-8">
                    Accounts Payable
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 text-gray-700 font-medium text-xs sm:text-sm lg:text-base items-center">
                    <div><p>Invoice Capturing agent</p></div>
                    <div><p>Verification & Reconciliation agent</p></div>
                    <div><p>Scheduling agent</p></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Card with gradient */}
            <div className="max-w-5xl mx-auto flex flex-col items-center custom-gradient-card rounded-xl mt-8 sm:mt-16 p-4 sm:p-6 lg:p-8">
              <Image 
                src={setting} 
                alt="setting" 
                width={120} 
                height={120} 
                className="w-16 h-16 sm:w-24 sm:h-24 lg:w-[120px] lg:h-[120px]" 
              />
              <h2 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-mont font-medium mt-4 sm:mt-6 text-center px-2">
                Your ERP/ Accounting Software
              </h2>
            </div>

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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 mt-8 sm:mt-16 mb-8 sm:mb-16 max-w-6xl mx-auto items-center justify-center font-semibold px-3">
              <div className="cards text-center sm:text-left">
                <h3 className="text-[#00FFF2] text-lg sm:text-xl lg:text-2xl">
                  Measurable by Design
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">Track time, errors and cache impact</p>
              </div>
              <div className="cards text-center sm:text-left">
                <h3 className="text-[#00FFF2] text-lg sm:text-xl lg:text-2xl">
                  Complete control
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">You set the rules, we enforce them.</p>
              </div>
              <div className="cards text-center sm:text-left">
                <h3 className="text-[#00FFF2] text-lg sm:text-xl lg:text-2xl">
                  Global-ready
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">Multi-entity. Multi currency. Audit proof.</p>
              </div>
              <div className="cards text-center sm:text-left">
                <h3 className="text-[#00FFF2] text-lg sm:text-xl lg:text-2xl">
                  Seamless integrations
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">Connect to your ERP in minutes.</p>
              </div>
              <div className="cards text-center sm:text-left">
                <h3 className="text-[#00FFF2] text-lg sm:text-xl lg:text-2xl">
                  ERP-native
                </h3>
                <p className="text-sm sm:text-base lg:text-lg">Works with how you already work.</p>
              </div>
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
              <ButtonAnimated dark={false} content={"ERP & Accounting"} className="text-sm sm:text-base" />
            </div>

            {/* company logo */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-16 mb-8 sm:mb-16 max-w-6xl mx-auto items-center justify-center px-3">
                <Image src={microsoft} alt="microsoft logo" width={120} height={60} className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto" />
                <Image src={oracle} alt="oracle logo" width={120} height={60} className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto" />
                <Image src={sap} alt="sap logo" width={120} height={60} className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto" />
                <Image src={workday} alt="workday logo" width={120} height={60} className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto" />
                <Image src={sage} alt="sage logo" width={120} height={60} className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto col-span-2 sm:col-span-1" />
              </div>
            </div>

            <div className="text-center mt-8 mb-8 sm:mb-16">
              <ButtonAnimated content="Banking, Treasury & Payment" dark={false} />
            </div>

            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-16 mb-8 sm:mb-16 max-w-6xl mx-auto items-center justify-center px-3">
                <Image src={jp_morgan} alt="jp morgan logo" width={120} height={60} className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto" />
                <Image src={barclays} alt="barclays logo" width={120} height={60} className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto" />
                <Image src={banco} alt="banco logo" width={120} height={60} className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto" />
                <Image src={hsbc} alt="hsbc logo" width={120} height={60} className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto" />
                <Image src={llyods} alt="lloyds logo" width={120} height={60} className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto" />
                <Image src={plaid} alt="plaid logo" width={120} height={60} className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto" />
                <Image src={new_wise} alt="wise logo" width={120} height={60} className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto" />
                <Image src={revolut} alt="revolut logo" width={120} height={60} className="mx-auto w-full max-w-[80px] xs:max-w-[90px] sm:max-w-[100px] lg:max-w-[120px] h-auto" />
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
                Ready to save thousands on <span className="gradient-text">invoice processing?</span>
              </h2>
              <p className="text-center text-sm sm:text-lg lg:text-xl font-medium">
                Run a quick analysis and get your personalized ROI.
              </p>
              <ButtonAnimated content="Get your Savings Report" />
            </div>

            {/* dashboard images - Responsive layout */}
            <div className="relative mt-12 sm:mt-24 lg:mt-32">
              <Image
                src={second_dash}
                alt="main dashboard"
                width={1000}
                height={750}
                className="rounded-t-xl sm:rounded-t-2xl mx-auto w-full max-w-[300px] xs:max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[900px]"
              />
              <div className="hidden sm:block absolute top-4 sm:top-8 lg:top-16 -left-2 sm:-left-4 lg:-left-6">
                <Image
                  src={s_small_dash}
                  alt="small dashboard"
                  width={200}
                  height={150}
                  className="rounded-xl w-[100px] sm:w-[150px] lg:w-[200px] xl:w-[250px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}