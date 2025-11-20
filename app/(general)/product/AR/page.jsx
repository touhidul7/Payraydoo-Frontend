import Image from "next/image";
import shapeSmall from "../../../../public/logo/Shape 3.png";
import shapeLarge from "../../../../public/logo/Shape 2.png";
import leftShape from "../../../../public/logo/Shape 3.png";
import firstStats from "../../../../public/logo/stats 1.png";
import bigDash from "../../../../public/images/4.png";
import smallDash from "../../../../public/images/3.png";
import mobileFront from "../../../../public/images/ar mobile front.png";
import laptopImage from "../../../../public/images/LaptopImage.png";
import HappyWoman from "../../../../public/images/happy-woman-with-card.png";

import logo from "../../../../public/logo/logo-open-fileArtboard-5.png";
import { ChartColumnBig, HardDriveDownload, Settings } from "lucide-react";

export default function AR() {
  return (
    <div className="font-mont bg-white">
      {/* hero section */}
      <div className="max-w-[98%] mx-auto product-hero-bg rounded-3xl  my-5">
        {/* shape and logo */}
        <div className="flex justify-between items-start relative">
          <Image src={logo} alt="Open File Logo" width={300} height={200} />
          <div className="flex justify-center items-start pt-6 absolute right-0">
            <Image
              src={shapeSmall}
              alt="small shape "
              width={100}
              height={100}
            />
            <Image
              src={shapeLarge}
              alt="small shape "
              width={200}
              height={400}
            />
          </div>
        </div>
        {/* hero text */}
        <div className=" flex flex-col justify-center items-center gap-10 md:pb-32 ">
          <h2 className="md:text-center text-start text-4xl md:text-5xl lg:text-6xl font-semibold text-white md:leading-16 lg:leading-18 px-6 lg:px-42">
            Best Tool In The Market For Processing AP Invoices
          </h2>
          <button className="custom-button-light">Get In Touch</button>
        </div>
        {/* stats section */}
        <div className="flex justify-center items-center relative">
          <div className="mt-[-130px] md:mt-0 absolute left-0">
            <Image
              src={leftShape}
              alt="left shape"
              width={150}
              height={200}
              className=""
            />
          </div>
          {/* stats & dashboard images */}
          <div className=" justify-center  md:flex lg:flex">
            <div className="mr-[-150px] mt-[-50px] z-10">
              <Image
                className="lg:block hidden"
                src={firstStats}
                alt="stats image"
                width={400}
                height={200}
              />
            </div>
            <div className="rounded-2xl">
              <Image
                className="w-[90%] mx-auto lg:w-full rounded-t-lg"
                src={bigDash}
                alt="big dashboard"
                width={800}
                height={600}
              />
            </div>
            <div className="lg:block hidden">
              <Image
                src={smallDash}
                alt="small dashboard"
                width={400}
                height={400}
                className="lg:ml-[-150px] lg:w-auto w-32 md:-ml-20 shadow-lg shadow-gray-600  mt-12 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* product details section */}
      <div className="max-w-[98%] mx-auto my-5 bg-[#f7f9fc] rounded-3xl py-22">
        {/* heading section */}
        <div className="flex flex-col justify-center items-center gap-6 px-10 py-14">
          <h2 className="text-center lg:text-5x text-3xl text-gray-600 font-semibold lg:px-32">
            <span className="gradient-header">Accounts Receivable</span>{" "}
            Automation SaaS Product Features Content
          </h2>
        </div>

        {/* features section */}
        <div className="feature-parent w-[90%] mx-auto mb-16 ">
          <div className="flex flex-col lg:grid grid-cols-3 grid-rows-5 gap-5">
            {/* grid 1 */}
            <div className="row-span-2 col-start-1 row-start-2 bg-white rounded-3xl text-black p-7 py-12">
              <div className="flex flex-col gap-3">
                <button className="card-list-button">1.</button>
                <h2 className="text-2xl font-semibold mt-12">
                  Invoice & Line Item Capture
                </h2>
                <p className="text-sm">
                  Reduce manual data entry and human error with AI based OCR and
                  machine learning technology that instantly captures and codes
                  your invoice
                </p>
              </div>
            </div>
            {/* grid 2 */}
            <div className="row-span-2 col-start-1 row-start-4 bg-white rounded-3xl text-black p-8 py-12">
              <div className="flex flex-col gap-5">
                <button className="card-list-button">3.</button>
                <h2 className="text-2xl font-semibold mt-12">
                  Invoice & Line Item Capture
                </h2>
                <p className="text-sm">
                  Reduce manual data entry and human error with AI based OCR and
                  machine learning technology that instantly captures and codes
                  your invoice
                </p>
              </div>
            </div>
            {/* grid 3 */}
            <div className="w-auto row-span-3 col-start-2 row-start-1 bg-[#a64dff] rounded-3xl text-black flex justify-center items-end ">
              <Image src={mobileFront} alt="mobile front" className="w-auto" />
            </div>
            {/* grid 4 */}
            <div className="row-span-2 col-start-2 row-start-4 bg-white rounded-3xl text-black p-8 py-12">
              <div className="flex flex-col gap-3">
                <button className="card-list-button">4.</button>
                <h2 className="text-2xl font-semibold mt-12">
                  Invoice & Line Item Capture
                </h2>
                <p className="text-sm">
                  Reduce manual data entry and human error with AI based OCR and
                  machine learning technology that instantly captures and codes
                  your invoice
                </p>
              </div>
            </div>
            {/* grid 5 */}
            <div className="row-span-2 col-start-3 row-start-2 bg-white rounded-3xl text-black p-8 py-12">
              <div className="flex flex-col gap-3">
                <button className="card-list-button">2.</button>
                <h2 className="text-2xl font-semibold mt-12">
                  Invoice & Line Item Capture
                </h2>
                <p className="text-sm">
                  Reduce manual data entry and human error with AI based OCR and
                  machine learning technology that instantly captures and codes
                  your invoice
                </p>
              </div>
            </div>
            {/* grid 6 */}
            <div className="row-span-2 row-start-4 bg-white rounded-3xl text-black p-8 py-12">
              <div className="flex flex-col gap-3">
                <button className="card-list-button">5.</button>
                <h2 className="text-2xl font-semibold mt-12">
                  Invoice & Line Item Capture
                </h2>
                <p className="text-sm">
                  Reduce manual data entry and human error with AI based OCR and
                  machine learning technology that instantly captures and codes
                  your invoice
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* dark section */}
        <div className="dark-info-section lg:p-12 p-6 rounded-3xl mb-16 mt-32 lg:py-32 py-16 ">
          <div>
            <h2 className="text-4xl font-semibold lg:px-72 text-center mt-12">
              <span className="gradient-header">Accounts Receivable</span>{" "}
              Automation SaaS Product Features Content
            </h2>
          </div>

          <div className="p-3 flex flex-col md:flex-row gap-12 justify-center lg:mt-16 mt-8 relative">
            {/* first column */}
            <div className="lg:w-[25%] pt-20">
              <div className="flex flex-col gap-3 items-start p-8">
                <h2 className="text-xl font-semibold text-[#0ae2f7]">
                  Slash DSO by 50%
                </h2>
                <p className="text-sm">
                  Automate invoicing, reconciliation, and collections to
                  accelerate cash flow and get paid faster.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start p-8">
                <h2 className="text-xl font-semibold text-[#0ae2f7]">
                  Save 80% on Manual Tasks
                </h2>
                <p className="text-sm">
                  Eliminate repetitive work with intelligent automation, freeing
                  finance teams for strategic focus.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start p-8">
                <h2 className="text-xl font-semibold text-[#0ae2f7]">
                  AI-Driven Accuracy
                </h2>
                <p className="text-sm">
                  OpenAI-powered transaction-invoice matching with 85%
                  confidence, reducing errors and manual effort.
                </p>
              </div>
            </div>

            {/* second column */}
            <div className="lg:w-[50%] flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 justify-center">
              <Image
                src={firstStats}
                alt="First Stats"
                className="w-[430px] h-[200px]"
              />
              <Image
                src={smallDash}
                alt="Small Dash"
                className="w-[230px] h-[200px] mt-32"
              />
            </div>

            {/* third column */}
            <div className="lg:w-[25%]">
              <div className="flex flex-col gap-3 items-start p-8">
                <h2 className="text-xl font-semibold text-[#0ae2f7]">
                  Seamless Integrations
                </h2>
                <p className="text-sm">
                  Connects effortlessly with Plaid for banking, QuickBooks for
                  ERP, and SendGrid for emails.
                </p>
              </div>
              <div className="flex flex-col gap-3 items-start p-8">
                <h2 className="text-xl font-semibold text-[#0ae2f7]">
                  Trusted Compliance
                </h2>
                <p className="text-sm">
                  GDPR, PCI-DSS, and PSD2-compliant for secure, reliable
                  operations in UK and USA markets.
                </p>
              </div>
              <div className="lg:flex hidden items-center gap-1 absolute bottom-8 right-0">
                <Image
                  src={shapeSmall}
                  alt="Shape"
                  className="w-16 h-12 mt-24"
                />
                <Image src={shapeSmall} alt="Shape" />
              </div>
            </div>
          </div>
        </div>
        {/* laptop image */}
        <div className="lg:mt-[-380px] mt-[-150px] flex justify-center">
          <Image src={laptopImage} alt="Laptop Image" />
        </div>
      </div>
      {/* how payraydoo works section */}

      <div className="max-w-7xl mx-auto bg-white py-16 lg:py-32">
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-6">
          <div className="lg:w-[60%] p-4 lg:p-12 flex flex-col gap-6">
            <h4 className="gradient-text text-2xl font-semibold mb-8">
              How Payraydoo Works
            </h4>
            <h2 className="text-black text-2xl lg:text-6xl font-semibold ">
              Smarter Workflows. Tangible Results.
            </h2>
            <p className="text-black text-lg pr-32">
              From invoice capture to reconciliation, Payraydoo transforms
              complex AP & AR processes into automated, accurate, and scalable
              flows — with zero guesswork.
            </p>
          </div>
          <div className="lg:w-[40%] w-[60%]">
            <Image src={HappyWoman} alt="HappyWoman" />
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-6 lg:w-full w-[90%] mx-auto">
          <h2 className="text-black text-lg font-medium">Core Capabilities:</h2>
          <div className="flex flex-col lg:flex-row gap-2 w-full text-black justify-center items-center">
            <div className=" pr-2 ">
              <div className="flex items-center gap-3">
                <HardDriveDownload className="text-amber-600 w-6 h-6" />
                <h3 className="text-purple-500 text-lg font-medium">
                  Capture & Validate
                </h3>
              </div>
              <p className="text-sm mt-4">
                AI-powered OCR extracts data from any invoice source and
                performs 2- or 3-way matching to eliminate manual errors.
              </p>
            </div>
            <div className=" hidden lg:block h-24 sm:h-16 ar-custom-bar bg-white w-0.5 m-12"></div>
            <div className=" ">
              <div className=" pr-2 ">
                <div className="flex items-center gap-3">
                  <Settings className="text-gray-600 w-6 h-6" />
                  <h3 className="text-purple-500 text-lg font-medium">
                    Automate and Act
                  </h3>
                </div>
                <p className="text-sm mt-4">
                  Accelerate workflows — from approvals to collections — with
                  smart routing, dunning schedules, and dispute resolution.
                </p>
              </div>
            </div>
            <div className="hidden lg:block h-16 sm:h-16 ar-custom-bar bg-white w-0.5 m-12"></div>
            <div className=" ">
              <div className=" w-full ">
                <div className="flex items-center gap-3">
                  <ChartColumnBig className="text-amber-600 w-6 h-6" />
                  <h3 className="text-purple-500 text-lg font-medium">
                    Sync & Track
                  </h3>
                </div>
                <p className="text-sm mt-4">
                  Get real-time visibility with dynamic dashboards and seamless
                  ERP integrations like SAP, QuickBooks, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gradient section */}
      <div className="Ap-footer lg:w-7xl  mx-auto rounded-3xl  lg:block hidden">
        {/* headings */}
        <div className="text-center text-white px-2 flex flex-col justify-center items-center pt-12 md:mb-22">
          <h2 className="text-4xl font-semibold mb-2">
            Ready To Spend Less On Invoice Processing?
          </h2>
          <h3 className="text-lg font-normal">
            Reduce errors, free up your team for strategic work, and gain
            valuable insights.
          </h3>
          <button className="ap-button-dark mt-8">Find Out How</button>
        </div>
        <div>
          <div className="flex flex-col gap-12 md:-mb-66 lg:-mb-80 md:ml-16 lg:ml-20">
            <Image
              src={firstStats}
              alt="Stats image"
              className="shadow-md lg:w-[300px] md:w-[250px] lg:h-[170px] z-10 rounded"
            />
            <Image
              src={smallDash}
              alt="Small dashboard"
              className="z-10 rounded-xl shadow-md lg:w-[250px] w-[200px] lg:h-[220px]"
            />
          </div>
          <Image
            src={bigDash}
            alt="big dashboard"
            className="z-0 lg:w-[850px] md:w-[650px] lg:h-[400px] lg:ml-[280px] md:ml-[180px] rounded-t-2xl"
          />
        </div>
      </div>
    </div>
  );
}
