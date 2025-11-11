"use client";
import Image from "next/image";
import small_dash from "../public/images/Untitled-1 (2).png";
import ButtonAnimated from "./Components/ButtonAnimated";
import Counter from "./Components/Counter";
import TiltShineCard from "./Components/TiltShineCard";
import small_logo from "../public/logo/small_logo.png";
import FeatureSelector from "./Components/InvoiceFeatures";
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
    <div className="p-2 sm:p-4 home-page pt-8 sm:pt-16 pb-10 sm:pb-20 scroll-smooth">
      {/* hero section start */}

      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-4 sm:gap-8 py-5 sm:py-10 px-4 font-mont">
        {/* heading and slogan section */}
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight"> Finance That Runs Itself </h2>
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold">
            Collect Cash | Pay Vendors | Close Faster
          </h2>
          <p className="text-base sm:text-xl lg:text-2xl font-medium mt-2 sm:mt-4 px-4">
            Payradoo orchestrates AR & AP end to end inside your ERP
          </p>
        </div>
        {/* heading and slogan section  end*/}

        {/*action button*/}
        <ButtonAnimated content="Get Your Savings Report" />
        {/*action button end*/}

        <Counter />
      </div>
      
      {/* dashboard image start */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center relative min-h-[300px] sm:min-h-[500px] lg:h-screen mt-10 sm:mt-20 mb-10 sm:mb-20">
          <TiltShineCard />
        </div>
        
        {/* Fixed: Using relative positioning with transform for responsive scaling */}
        <div className="flex justify-center items-end relative -mt-20 sm:-mt-32 lg:-mt-40">
          <div className="relative w-full max-w-5xl">
            {/* Small dashboard positioned relative to parent, scales with container */}
            <div className="absolute left-[5%] sm:left-[10%] bottom-0 w-[35%] sm:w-[30%] lg:w-[250px] z-10">
              <Image
                src={small_dash}
                alt="small dashboard"
                width={250}
                height={250}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* hero section end */}
      {/* Second section starts here */}
      <div className="mx-auto max-w-[98%] bg-white rounded-3xl relative py-10 mt-20 sm:mt-32">
        {/* upper part */}

        {/* Logo */}
        <div className="relative">
          <div className="border-animation absolute -top-12 sm:-top-25 left-0 right-0 mx-auto p-3 sm:p-4">
            <Image src={small_logo} alt="small logo" width={75} height={75} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[75px] lg:h-[75px]" />
          </div>
        </div>

        {/* UPPER CONTENT */}
        <div className="mx-auto max-w-7xl mt-8 sm:mt-14 p-4 sm:p-8 lg:p-14 font-mont text-center">
          <h2 className="gradient-header font-semibold text-2xl sm:text-4xl lg:text-5xl py-3 px-2">
            Why Orchestrate Your Finance Operations?
          </h2>
          <p className="text-black text-lg sm:text-xl lg:text-2xl font-medium mt-3 sm:mt-5">
            No more tab-hopping in manual finance work. Just flow
          </p>
          <p className="text-gray-600 font-medium text-base sm:text-lg lg:text-2xl mt-3 sm:mt-4 px-2">
            Payraydoo captures invoices, routes approvals, reconciles payments,
            and tracks collections so your team focuses on decisions, not data
            entry.
          </p>
          <div className="mt-6 sm:mt-10">
            <ButtonAnimated content="See how much you'll save" />
          </div>
        </div>
        {/* UPPER CONTENT END  */}

        {/* lower part  */}
        <div className="bg-gray-50 rounded-3xl max-w-full font-mont relative">
          {/* INVOICE FEATURES */}
          <div className="py-10 sm:py-16 lg:py-22 px-4 sm:px-10 lg:px-22">
            <h2 className="gradient-text font-semibold text-2xl sm:text-4xl lg:text-5xl">
              Accounts Receivable
            </h2>
            <h2 className="text-black text-3xl sm:text-5xl lg:text-7xl mt-3 sm:mt-5 font-medium">
              Receivables on time, every time
            </h2>
            <InvoiceFeatures />
          </div>
          
          <div className="mt-10 sm:mt-20 mb-10 sm:mb-20 px-4 sm:px-10 lg:px-22">
            <h2 className="gradient-text font-semibold text-2xl sm:text-4xl lg:text-5xl py-2">
              Accounts Payable
            </h2>
            <h2 className="text-black text-3xl sm:text-5xl lg:text-7xl mt-3 sm:mt-5 font-medium">
              Invoices in. Payments out
            </h2>
            <InvoiceFeaturesLeft />
          </div>

          {/* finance stack section */}
          <div className="finance-stack-body rounded-xl pt-20 sm:pt-32 lg:pt-42 py-10 sm:py-20 pb-20 sm:pb-40 lg:pb-52 px-4 sm:px-8 lg:px-14 mx-auto max-w-[98%]">
            <div className="px-2">
              <h2 className="text-white text-3xl sm:text-5xl lg:text-7xl text-center font-semibold">
                The missing link in your
              </h2>
              <h2 className="finance text-3xl sm:text-5xl lg:text-7xl text-center font-semibold mt-3 sm:mt-5">
                finance stack
              </h2>
            </div>
            
            {/* First Card */}
            <div className="flex justify-center items-center mt-10 sm:mt-16 px-2">
              <div className="w-full max-w-[750px] h-auto bg-white clip-card rounded-xl custom-white-card relative">
                <div className="z-10">
                  <div className="border-animation absolute -top-8 sm:-top-15 left-[50%] p-3 sm:p-4 z-10 transform -translate-x-1/2">
                    <Image
                      src={small_logo}
                      alt="small logo"
                      width={75}
                      height={75}
                      className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[75px] lg:h-[75px]"
                    />
                  </div>
                </div>
                <h2 className="text-gray-700 mt-8 sm:mt-10 p-4 sm:p-6 lg:px-5 lg:py-8 font-medium font-mont text-lg sm:text-2xl lg:text-3xl text-center">
                  Payraydoo bridges receivables and payables automating the flow
                  of money in and out
                </h2>
              </div>
            </div>
            
            {/* 2nd card - Responsive grid */}
            <div className="w-full max-w-6xl mx-auto custom-white-card mt-10 sm:mt-20 font-mont p-4 sm:p-8 lg:p-10 rounded-xl bg-white">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-10 text-center">
                <div className="w-full lg:w-auto">
                  <h2 className="text-black text-xl sm:text-2xl mb-6 sm:mb-12">
                    Accounts Receivable
                  </h2>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 text-gray-700 font-medium text-sm sm:text-base">
                    <div><p>Cash Application agent</p></div>
                    <div><p>Collection agent</p></div>
                    <div><p>Dispute agent</p></div>
                    <div><p>Closing agent</p></div>
                  </div>
                </div>
                
                <div className="hidden lg:block h-36 custom-bar bg-white w-0.5"></div>
                <div className="block lg:hidden w-full h-0.5 custom-bar bg-white"></div>
                
                <div className="w-full lg:w-auto">
                  <h2 className="text-black text-xl sm:text-2xl mb-6 sm:mb-12">
                    Accounts Payable
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10 text-gray-700 font-medium text-sm sm:text-base items-center">
                    <div><p>Invoice Capturing agent</p></div>
                    <div><p>Verification & Reconciliation agent</p></div>
                    <div><p>Scheduling agent</p></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Card with gradient */}
            <div className="max-w-5xl mx-auto flex flex-col items-center custom-gradient-card rounded-xl mt-10 sm:mt-20 p-6 sm:p-10">
              <Image src={setting} alt="setting" width={150} height={150} className="w-20 h-20 sm:w-32 sm:h-32 lg:w-[150px] lg:h-[150px]" />
              <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-mont font-medium mt-6 sm:mt-10 text-center px-4">
                Your ERP/ Accounting Software
              </h2>
            </div>
            
            <div className="text-center mt-10 sm:mt-20">
              <ButtonAnimated content={"Connect Your Finance Stack"} />
            </div>
            
            <div className="text-center mt-10 sm:mt-20 px-2">
              <h2 className="text-white text-3xl sm:text-5xl lg:text-7xl text-center font-semibold">
                Smarter workflows.
              </h2>
              <h2 className="finance text-3xl sm:text-5xl lg:text-7xl text-center font-semibold mt-3 sm:mt-5 py-2">
                Tangible results.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-14 mt-10 sm:mt-20 mb-10 sm:mb-20 max-w-6xl mx-auto items-center justify-center font-semibold px-4">
              <div className="cards">
                <h3 className="text-[#00FFF2] text-xl sm:text-2xl lg:text-3xl">
                  Measurable by Design
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl">Track time, errors and cache impact</p>
              </div>
              <div className="cards">
                <h3 className="text-[#00FFF2] text-xl sm:text-2xl lg:text-3xl">
                  Complete control
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl">You set the rules, we enforce them.</p>
              </div>
              <div className="cards">
                <h3 className="text-[#00FFF2] text-xl sm:text-2xl lg:text-3xl">
                  Global-ready
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl">Multi-entity. Multi currency. Audit proof.</p>
              </div>
              <div className="cards">
                <h3 className="text-[#00FFF2] text-xl sm:text-2xl lg:text-3xl">
                  Seamless integrations
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl">Connect to your ERP in minutes.</p>
              </div>
              <div className="cards">
                <h3 className="text-[#00FFF2] text-xl sm:text-2xl lg:text-3xl">
                  ERP-native
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl">Works with how you already work.</p>
              </div>
            </div>
          </div>

          {/* finance stack section end here */}

          <div className="text-center mb-20 sm:mb-32 lg:mb-[200px] relative px-4">
            <Image
              src={dashboard2}
              alt="small dashboard"
              width={800}
              height={550}
              className="rounded-2xl mx-auto w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[800px] h-auto absolute top-0 left-0 right-0 -mt-20 sm:-mt-32 lg:-mt-48"
            />
          </div>
          
          {/* Payraydoo promise start here */}
          <section>
            <div className="text-center mt-10 sm:mt-20 px-4">
              <h2 className="text-black text-3xl sm:text-5xl lg:text-7xl text-center font-semibold">
                The Payraydoo Promise:
              </h2>
              <h2 className="finance text-3xl sm:text-5xl lg:text-7xl text-center font-semibold mt-3 sm:mt-5 text-shadow-lg py-2">
                Capabilities & integrations
              </h2>
            </div>
            
            <div className="text-center mt-10 sm:mt-20">
              <ButtonAnimated dark={false} content={"ERP & Accounting"} className="text-base sm:text-lg" />
            </div>

            {/* company logo */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10 mt-10 sm:mt-20 mb-10 sm:mb-20 max-w-6xl mx-auto items-center justify-center px-4">
                <Image src={microsoft} alt="microsoft logo" width={150} height={75} className="mx-auto w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] h-auto" />
                <Image src={oracle} alt="oracle logo" width={150} height={75} className="mx-auto w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] h-auto" />
                <Image src={sap} alt="sap logo" width={150} height={75} className="mx-auto w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] h-auto" />
                <Image src={workday} alt="workday logo" width={150} height={75} className="mx-auto w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] h-auto" />
                <Image src={sage} alt="sage logo" width={150} height={75} className="mx-auto w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] h-auto col-span-2 sm:col-span-1" />
              </div>
            </div>
            
            <div className="text-center mt-10 mb-10 sm:mb-20">
              <ButtonAnimated content="Banking, Treasury & Payment" dark={false} />
            </div>
            
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 mt-10 sm:mt-20 mb-10 sm:mb-20 max-w-6xl mx-auto items-center justify-center px-4">
                <Image src={jp_morgan} alt="jp morgan logo" width={150} height={75} className="mx-auto w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] h-auto" />
                <Image src={barclays} alt="barclays logo" width={150} height={75} className="mx-auto w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] h-auto" />
                <Image src={banco} alt="banco logo" width={150} height={75} className="mx-auto w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] h-auto" />
                <Image src={hsbc} alt="hsbc logo" width={150} height={75} className="mx-auto w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] h-auto" />
                <Image src={llyods} alt="lloyds logo" width={150} height={75} className="mx-auto w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] h-auto" />
                <Image src={plaid} alt="plaid logo" width={150} height={75} className="mx-auto w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] h-auto" />
                <Image src={new_wise} alt="wise logo" width={150} height={75} className="mx-auto w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] h-auto" />
                <Image src={revolut} alt="revolut logo" width={150} height={75} className="mx-auto w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] h-auto" />
              </div>
            </div>

            <div className="text-center mt-10 mb-10 sm:mb-20">
              <ButtonAnimated content="Explore more integrations" />
            </div>

            <div className="px-4 sm:px-6 lg:px-8 mb-20 sm:mb-40 bg-white">
              <TestimonialSlider />
            </div>
          </section>

          <div className="finance-stack-body rounded-xl pt-10 sm:pt-20 px-4 sm:px-8 lg:px-14 mx-auto max-w-[98%] font-mont">
            <div className="flex flex-col justify-center items-center gap-4 sm:gap-8 px-4">
              <h2 className="text-center text-2xl sm:text-4xl lg:text-6xl font-semibold px-0 sm:px-10 lg:px-[250px]">
                Ready to save thousands on <span className="gradient-text">invoice processing?</span>
              </h2>
              <p className="text-center text-base sm:text-xl lg:text-2xl font-medium">
                Run a quick analysis and get your personalized ROI.
              </p>
              <ButtonAnimated content="Get your Savings Report" />
            </div>
            
            {/* dashboard images - Responsive layout */}
            <div className="relative mt-20 sm:mt-32 lg:mt-40">
              <Image 
                src={second_dash} 
                alt="main dashboard" 
                width={1000} 
                height={750} 
                className="rounded-t-2xl mx-auto w-full max-w-[900px]" 
              />
              <div className="hidden md:block lg:block absolute top-10 sm:top-20 lg:top-40 -left-2 sm:-left-4 lg:-left-8">
                <Image 
                  src={s_small_dash} 
                  alt="small dashboard" 
                  
                  className="rounded-2xl w-[150px] sm:w-[200px] lg:w-[300px] h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}