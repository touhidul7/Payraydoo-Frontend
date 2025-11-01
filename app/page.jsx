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
    <div className="p-4 home-page pt-16 pb-20">
      {/* hero section start */}

      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-8 py-10 px-4 font-mont">
        {/* heading and slogan section */}
        <div className="flex flex-col justify-center items-center gap-3 ">
          <h2 className="text-7xl font-bold"> Finance That Runs Itself </h2>
          <h2 className="text-3xl font-bold">
            Collect Cash | Pay Vendors | Close Faster
          </h2>
          <p className="text-2xl font-medium mt-4">
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
      <div>
        <div className=" flex justify-center relative h-screen mt-20 mb-20">
          <TiltShineCard />
        </div>
        <div className="flex justify-center items-center mt-10 relative">
          <Image
            src={small_dash}
            alt="small dashboard"
            width={250}
            height={250}
            className="rounded-2xl absolute bottom-45 left-70"
          />
        </div>
      </div>

      {/* hero section end */}
      {/* Second section starts here */}
      <div className="mx-auto max-w-[98%] bg-white rounded-3xl relative py-10">
        {/* upper part */}

        {/* Logo */}
        <div className="relative">
          <div className=" border-animation absolute -top-25 left-0 right-0 mx-auto p-4">
            <Image src={small_logo} alt="small logo" width={75} height={75} />
          </div>
        </div>

        {/* UPEPER CONTENT */}
        <div className="mx-auto max-w-7xl mt-14 p-14 font-mont text-center  ">
          <h2 className="gradient-header font-semibold text-5xl py-3 ">
            Why Oschestrates Your Finance Operations?
          </h2>
          <p className="text-black text-2xl font-medium mt-5">
            No more tab-hopping in manual finance work. Just flow
          </p>
          <p className="text-gray-600 font-medium text-2xl mt-4">
            Payraydoo captures invoices, routes approvals, reconciles payments,
            and tracks collections so your team focuses on decisions, not data
            entry.
          </p>
          <div className="mt-10 ">
            <ButtonAnimated content="See how much you'll save" />
          </div>
        </div>
        {/* UPEPER CONTENT END  */}

        {/* lower part  */}
        <div className="bg-gray-50 rounded-3xl max-w-full font-mont relative ">
          {/* INVOICE FEATURES */}
          <div className="py-22 px-22 ">
            <h2 className="gradient-text font-semibold text-5xl">
              Accounts Recievable
            </h2>
            <h2 className="text-black text-7xl mt-5 font-medium">
              {" "}
              Receivables on time, every time
            </h2>
            <InvoiceFeatures />
          </div>
          <div className="mt-20 mb-20  px-22 ">
            <h2 className="gradient-text font-semibold text-5xl py-2">
              Accounts Payable
            </h2>
            <h2 className="text-black text-7xl mt-5 font-medium">
              {" "}
              Invoices in. Payments out
            </h2>
            <InvoiceFeaturesLeft />
          </div>

          {/* finance stack section */}
          <div className=" finance-stack-body rounded-xl pt-42 py-20 pb-52 px-14 mx-auto max-w-[98%]">
            <div>
              <h2 className=" text-white text-7xl text-center font-semibold">
                The missing link in your
              </h2>
              <h2 className="finance text-7xl text-center font-semibold mt-5">
                finance stack
              </h2>
            </div>
            {/* First Card */}
            <div className="flex justify-center items-center mt-16  ">
              <div className="w-[750px] h-auto bg-white clip-card rounded-xl custom-white-card relative">
                <div className="z-10">
                  <div className=" border-animation absolute -top-15 left-[50%] p-4 z-10 transform -translate-x-1/2">
                    <Image
                      src={small_logo}
                      alt="small logo"
                      width={75}
                      height={75}
                    />
                  </div>
                </div>
                <h2 className="text-gray-700 mt-10 p-2 px-5 py-8 font-medium font-mont text-3xl text-center">
                  Payraydoo bridges recievables and payables automating the flow
                  of money in and out
                </h2>
              </div>
            </div>
            {/* 2nd card */}
            <div className="w-6xl mx-auto custom-white-card  mt-20 font-mont p-10 rounded-xl flex justify-between items-center gap-10 bg-white  text-center">
              <div className="">
                <h2 className="text-black text-2xl mb-12">
                  {" "}
                  Accounts Receivable
                </h2>
                <div className="grid grid-cols-4 gap-10 text-gray-700 font-medium">
                  <div>
                    <p>Cash Application agent</p>
                  </div>
                  <div>
                    <p>Collection agent</p>
                  </div>
                  <div>
                    <p>Dispute agent</p>
                  </div>
                  <div>
                    <p>Closing agent</p>
                  </div>
                </div>
              </div>
              <div className=" h-36 custom-bar bg-white w-0.5 "></div>
              <div>
                <h2 className="text-black text-2xl mb-12">
                  {" "}
                  Accounts Receivable
                </h2>

                <div className="grid grid-cols-3 gap-10 text-gray-700 font-medium items-center">
                  <div>
                    <p>Invoice Capturing agent</p>
                  </div>
                  <div>
                    <p>Varification & Reconciliation agent</p>
                  </div>
                  <div>
                    <p>Scheduling agent</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Card with gradient */}
            <div className="max-w-5xl mx-auto flex flex-col items-center custom-gradient-card  rounded-xl mt-20 p-10">
              <Image src={setting} alt="setting" width={150} height={150} />
              <h2 className="text-white text-3xl font-mont font-medium mt-10 text-center">
                Your ERP/ Accounting Software
              </h2>
            </div>
            <div className="text-center mt-20">
              <ButtonAnimated content={"Connect Your Finance Stack"} />
            </div>
            <div className="text-center mt-20">
              <h2 className=" text-white text-7xl text-center font-semibold">
                Smarter workflows.
              </h2>
              <h2 className="finance text-7xl text-center font-semibold mt-5 py-2">
                Tangible results.
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-14 mt-20 mb-20 max-w-6xl mx-auto items-center justify-center font-semibold">
              <div className="cards">
                <h3 className="text-[#00FFF2] text-3xl">
                  Measurable by Design
                </h3>
                <p className="text-2xl">Track time, errors and cache impact</p>
              </div>
              <div className="cards">
                <h3 className="text-[#00FFF2] text-3xl">
                  Complete control
                </h3>
                <p className="text-2xl">You set the rules, we
                  enforce them.</p>
              </div>
              <div className="cards">
                <h3 className="text-[#00FFF2] text-3xl">
                  Global-ready
                </h3>
                <p className="text-2xl">Multi-entity. Multi
                  currency. Audit proof.</p>
              </div>
              <div className="cards">
                <h3 className="text-[#00FFF2] text-3xl">
                  Seamless integrations
                </h3>
                <p className="text-2xl">Connect to your ERP
                  in minutes.</p>
              </div>
              <div className="cards">
                <h3 className="text-[#00FFF2] text-3xl">
                  ERP-native
                </h3>
                <p className="text-2xl">Works with how you
                  already work.</p>
              </div>
            </div>
          </div>

          {/* finance stack section end here */}


          <div className="text-center mb-[200px] relative">
            <Image
              src={dashboard2}
              alt="small dashboard"
              width={800}
              height={550}
              className="rounded-2xl mx-auto w-[800px] h-auto absolute top-0 left-0 right-0 -mt-48"
            />
          </div>
          {/* Payraydoo promise start here */}
          <section>
            <div className="text-center mt-20">
              <h2 className=" text-black text-7xl text-center font-semibold">
                The Payraydoo Promise:
              </h2>
              <h2 className="finance text-7xl text-center font-semibold mt-5 text-shadow-lg py-2">
                Capabilities & integrations
              </h2>
            </div>
            <div className="text-center mt-20 ">
              <ButtonAnimated dark={false} content={"ERP & Accounting"} className="text-lg" />
            </div>

            {/* company logo */}

            <div>
              <div className="grid grid-cols-5 gap-10 mt-20 mb-20 max-w-6xl mx-auto items-center justify-center">
                <Image src={microsoft} alt="microsoft logo" width={150} height={75} className="mx-auto" />
                <Image src={oracle} alt="microsoft logo" width={150} height={75} className="mx-auto" />
                <Image src={sap} alt="microsoft logo" width={150} height={75} className="mx-auto" />
                <Image src={workday} alt="microsoft logo" width={150} height={75} className="mx-auto" />
                <Image src={sage} alt="microsoft logo" width={150} height={75} className="mx-auto" />
              </div>
            </div>
            <div className="text-center mt-10 mb-20 ">
              <ButtonAnimated content="Banking, Treasury & Payment" dark={false} />
            </div>
            <div>
              <div className="grid grid-cols-4 gap-10 mt-20 mb-20 max-w-6xl mx-auto items-center justify-center">
                <Image src={jp_morgan} alt="microsoft logo" width={150} height={75} className="mx-auto" />
                <Image src={barclays} alt="microsoft logo" width={150} height={75} className="mx-auto" />
                <Image src={banco} alt="microsoft logo" width={150} height={75} className="mx-auto" />
                <Image src={hsbc} alt="microsoft logo" width={150} height={75} className="mx-auto" />
                <Image src={llyods} alt="microsoft logo" width={150} height={75} className="mx-auto" />
                <Image src={plaid} alt="microsoft logo" width={150} height={75} className="mx-auto" />
                <Image src={new_wise} alt="microsoft logo" width={150} height={75} className="mx-auto" />
                <Image src={revolut} alt="microsoft logo" width={150} height={75} className="mx-auto" />
              </div>
            </div>

            <div className="text-center mt-10 mb-20 ">
              <ButtonAnimated content="Explore more integrations" />
            </div>

            <div className="px-4 sm:px-6 lg:px-8 mb-40 bg-white">
              <TestimonialSlider />
            </div>
          </section>

          <div className="finance-stack-body rounded-xl pt-20 px-14 mx-auto max-w-[98%] font-mont">

            <div className="flex flex-col justify-center items-center gap-8">
              <h2 className="text-center text-6xl font-semibold px-[250px]">
                Ready to save thousands on <span className="gradient-text">invoice processing?</span>
              </h2>
              <p className="text-center text-2xl font-medium">
                Run a quick analysis and get your personalized ROI.
              </p>
              <ButtonAnimated content="Get your Savings Report" />
            </div>
            {/* dashboard images */}
            <div className="relative">
              <Image src={second_dash} alt="small dashboard" width={1000} height={750} className="rounded-t-2xl mx-auto mt-40" />
              <div className="absolute top-40 -left-8">
                <Image src={s_small_dash} alt="small dashboard" width={300} height={200} className="rounded-2xl" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
