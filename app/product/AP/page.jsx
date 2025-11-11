import Image from "next/image";
import shapeSmall from '../../../public/logo/Shape 1.png';
import logo from "../../../public/logo/logo-open-fileArtboard-5.png";
import shapeLarge from '../../../public/logo/Shape 2.png';
import leftShape from '../../../public/logo/Shape 3.png'
import firstStats from '../../../public/logo/stats 1.png';
import bigDash from '../../../public/images/4.png';
import smallDash from '../../../public/images/3.png';
import FstCard from '../../../public/images/card 1.png';
import SndCard from '../../../public/images/card 2.png';
import TrdCard from '../../../public/images/card 3.png';
import FthCard from '../../../public/images/card 4.png';
import FfthCard from '../../../public/images/card 5.png';
import SxthCard from '../../../public/images/card 6.png';
import dShapeLarge from '../../../public/images/Shape 21.png';
import dShapSmall from '../../../public/images/Shape 22.png';



export default function AP() {
  return (
    <div className="font-mont bg-white">
      {/* hero section */}
      <div className="max-w-[98%] mx-auto product-hero-bg rounded-3xl  my-5">
        {/* shape and logo */}
        <div className="flex justify-between items-start">
          <Image src={logo} alt="Open File Logo" width={300} height={200} />
          <div className="flex justify-center items-start pt-6">
            <Image src={shapeSmall} alt="small shape " width={100} height={100} />
            <Image src={shapeLarge} alt="small shape " width={200} height={400} />
          </div>
        </div>
        {/* hero text */}
        <div className="mt-[-120px] flex flex-col justify-center items-center gap-10 pb-32">
          <h2 className="text-center text-6xl font-semibold text-white leading-18 px-42">
            Best Tool In The Market For
            Processing AP Invoices
          </h2>
          <button className="custom-button-light">
            Get In Touch
          </button>
        </div>
        {/* stats section */}
        <div className="flex justify-between items-center">
          <div>
            <Image src={leftShape} alt="left shape" width={150} height={200} />
          </div>
          {/* stats & dashboard images */}
          <div className="flex justify-center ">
            <div className="mr-[-150px] mt-[-50px] z-10">
              <Image src={firstStats} alt="stats image" width={400} height={200} />
            </div>
            <div className="rounded-2xl" >
              <Image src={bigDash} alt="big dashboard" width={800} height={600} />
            </div>
            <div >
              <Image src={smallDash} alt="small dashboard" width={400} height={400} className="ml-[-150px] shadow-lg shadow-gray-600  mt-12 rounded-3xl" />
            </div>
          </div>

        </div>

      </div>

      {/* product details section */}
      <div className="max-w-[98%] mx-auto my-5 bg-[#f7f9fc] rounded-3xl py-22">
        {/* heading section */}
        <div className="flex flex-col justify-center items-center gap-6 px-10 py-14">
          <h2 className="text-center text-5xl text-gray-600 font-semibold">
            Why automate your <span className="gradient-text">AP invoice</span> processing?
          </h2>
          <h3 className="text-2xl text-gray-600 font-normal px-62 text-center">
            Free your AP teams from mundane processes to focus on strategic
            initiatives and better vendor relationships
          </h3>
        </div>
        {/* details card section */}
        <div className="flex flex-col justify-center items-center gap-20 pb-20">

          {/* 1st card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-10 flex md:flex-row flex-col justify-center items-center gap-8 ">
            <div className=" w-[60%]">
              <div className="flex justify- items-center gap-5">
                <p className="card-list-button">1</p>
                <h2 className="text-black text-3xl font-semibold">Invoice & Line Item Capture</h2>
              </div>
              <p className="text-gray-900 text-lg mt-5">
                Reduce manual data entry and human error with AI based
                OCR and machine learning technology that instantly
                captures and codes your invoice
              </p>
            </div>
            {/* 2part */}
            <div className=" w-[40%] mx-auto">
              <div>
                <Image src={FstCard} alt="card image" width={400} height={200} />
              </div>
            </div>
          </div>
          {/* 2nd card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-10 flex md:flex-row flex-col justify-center items-center gap-8 ">
            <div className=" w-[60%]">
              <div className="flex justify- items-center gap-5">
                <p className="card-list-button">2</p>
                <h2 className="text-black text-3xl font-semibold">Automatic Data Validation</h2>
              </div>
              <p className="text-gray-900 text-lg mt-5">
                Automatically validate invoices against corresponding
                purchase orders, receipts, and invoice numbers using 2-way
                and 3-way matching for enhanced accuracy.
              </p>
            </div>
            {/* 2part */}
            <div className=" w-[40%] mx-auto">
              <div>
                <Image src={SndCard} alt="card image" width={400} height={200} />
              </div>
            </div>
          </div>
          {/* 3rd card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-10 flex md:flex-row flex-col justify-center items-center gap-8 ">
            <div className=" w-[60%]">
              <div className="flex justify- items-center gap-5">
                <p className="card-list-button">3</p>
                <h2 className="text-black text-3xl font-semibold">Streamlined Approvals</h2>
              </div>
              <p className="text-gray-900 text-lg mt-5">
                Accelerate invoice approvals with streamlined workflows,
                routing invoices to the right user based on custom built
                rules - no matter how complex they are
              </p>
            </div>
            {/* 2part */}
            <div className=" w-[40%] mx-auto">
              <div>
                <Image src={TrdCard} alt="card image" width={400} height={200} />
              </div>
            </div>
          </div>
          {/* 4th card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-10 flex md:flex-row flex-col justify-center items-center gap-8 ">
            <div className=" w-[60%]">
              <div className="flex justify- items-center gap-5">
                <p className="card-list-button">4</p>
                <h2 className="text-black text-3xl font-semibold">Accrual Automation</h2>
              </div>
              <p className="text-gray-900 text-lg mt-5">
                Simplify month-end closing for AP Teams by generating
                accurate accrual entries to save time, reduce manual errors
                and gain cashflow visibility
              </p>
            </div>
            {/* 2part */}
            <div className=" w-[40%] mx-auto">
              <div>
                <Image src={FthCard} alt="card image" width={400} height={200} />
              </div>
            </div>
          </div>
          {/* 5th card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-10 flex md:flex-row flex-col justify-center items-center gap-8 ">
            <div className=" w-[60%]">
              <div className="flex justify- items-center gap-5">
                <p className="card-list-button">5</p>
                <h2 className="text-black text-3xl font-semibold">Manage Multiple Entities</h2>
              </div>
              <p className="text-gray-900 text-lg mt-5">
                Effortlessly add & manage affiliated entities along with their
                invoices, and assign granular user roles for enhanced control
                and visibility
              </p>
            </div>
            {/* 2part */}
            <div className=" w-[40%] mx-auto">
              <div>
                <Image src={FfthCard} alt="card image" width={400} height={200} />
              </div>
            </div>
          </div>
          {/* 6th card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-10 flex md:flex-row flex-col justify-center items-center gap-8 ">
            <div className=" w-[60%]">
              <div className="flex justify- items-center gap-5">
                <p className="card-list-button">6</p>
                <h2 className="text-black text-3xl font-semibold">Informed Decision Making</h2>
              </div>
              <p className="text-gray-900 text-lg mt-5">
                Access real-time reports to identify trends, optimize processes,
                and make data-driven decisions that improve your financial
                performance
              </p>
            </div>
            {/* 2part */}
            <div className=" w-[40%] mx-auto">
              <div>
                <Image src={SxthCard} alt="card image" width={400} height={200} />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="home-page">
        {/* dark info section */}
          <div className="dark-info-section max-w-[98%] mx-auto my-10 rounded-3xl p-14">
            {/* shape and heading */}
            <div className="flex items-center">
              <div>
                <Image src={dShapeLarge} alt="large shape" width={200} height={400} />
                <Image src={dShapSmall} alt="small shape" width={100} height={200} className="ml-[-50px] mt-[-150px]" />
              </div>
              <div className="text-center mt-[-100px]">
                <h2 className="text-5xl font-semibold text-white px-42">
                  Ready to transform your AP invoice processing?
                </h2>
                
              </div>

            </div>
          </div>
      </div>
    </div>
  );
}