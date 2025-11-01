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

export default function Home() {
  return (
    <div className="p-4 home-page pt-16">
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
          <h2 className="gradient-text font-semibold text-5xl py-3 ">
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
        <div className="bg-gray-100 rounded-3xl max-w-full font-mont relative ">
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
          <div className="bg-[#363766] rounded-xl pt-42 py-20 pb-52 px-14 mx-auto max-w-[98%]">
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
              <h2 className="finance text-7xl text-center font-semibold mt-5">
                Tangible results.
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-10 mt-20 max-w-5xl mx-auto align-items-center">
              <div className="cards">
                <h3 className="text-[#00FFF2] text-2xl">
                  Measurable by Design
                </h3>
                <p className="text-lg">Track time, errors and cache impact</p>
              </div>
              <div className="cards">
                <h3 className="text-[#00FFF2] text-2xl">
                  Measurable by Design
                </h3>
                <p className="text-lg">Track time, errors and cache impact</p>
              </div>
              <div className="cards">
                <h3 className="text-[#00FFF2] text-2xl">
                  Measurable by Design
                </h3>
                <p className="text-lg">Track time, errors and cache impact</p>
              </div>
              <div className="cards">
                <h3 className="text-[#00FFF2] text-2xl">
                  Measurable by Design
                </h3>
                <p className="text-lg">Track time, errors and cache impact</p>
              </div>
              <div className="cards">
                <h3 className="text-[#00FFF2] text-2xl">
                  Measurable by Design
                </h3>
                <p className="text-lg">Track time, errors and cache impact</p>
              </div>
            </div>
          </div>
          <div className="text-center mb-[200px] relative">
            <Image
              src={dashboard2}
              alt="small dashboard"
              width={500}
              height={250}
              className="rounded-2xl mx-auto w-[800px] h-auto absolute top-0 left-0 right-0 -mt-48"
            />
          </div>
          <div className="text-center mt-20">
            <h2 className=" text-black text-7xl text-center font-semibold">
              The Payraydoo Promise:
            </h2>
            <h2 className="finance text-7xl text-center font-semibold mt-5 ">
              Capabilities & integrations
            </h2>
          </div>
          {/* <div className="text-center mt-20">
            <ButtonAnimated dark={false} content={"ERP & Accounting"} />
          </div> */}
          {/* <div className="text-center mt-20">
            <div className="gradiant-bg w-[800px] mx-auto p-5 rounded-xl flex justify-center items-center">
              <iframe
              className="w-full "
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7edR32QVp_A?si=QyFzAJT9i0ezgOI9"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
