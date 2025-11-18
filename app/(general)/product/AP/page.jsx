import Image from "next/image";
import shapeSmall from '../../../../public/logo/Shape 1.png';
import logo from "../../../../public/logo/logo-open-fileArtboard-5.png";
import shapeLarge from '../../../../public/logo/Shape 2.png';
import leftShape from '../../../../public/logo/Shape 3.png'
import firstStats from '../../../../public/logo/stats 1.png';
import bigDash from '../../../../public/images/4.png';
import smallDash from '../../../../public/images/3.png';
import FstCard from '../../../../public/images/card 1.png';
import SndCard from '../../../../public/images/card 2.png';
import TrdCard from '../../../../public/images/card 3.png';
import FthCard from '../../../../public/images/card 4.png';
import FfthCard from '../../../../public/images/card 5.png';
import SxthCard from '../../../../public/images/card 6.png';
import dShapeLarge from '../../../../public/images/Shape 21.png';
import dShapSmall from '../../../../public/images/Shape 22.png';
import StatsCounter from "../../../Components/StatsCounter";
import Workflow from "../../../../public/images/workflow.png";
import ocr from '../../../../public/images/ocr.png';
import apBottleneck from '../../../../public/images/ap bottleneck.png';
import customChart from '../../../../public/images/custom chart.png';
import ERPIntegration from '../../../../public/images/erp intre.png';
import APteams from '../../../../public/images/ap teams.png';
import supportTeam from '../../../../public/images/support team.png';
import globalSupport from '../../../../public/images/global support.png';

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
        <div className="md:mt-[-120px] flex flex-col justify-center items-center gap-10 md:pb-32 ">
          <h2 className="md:text-center text-start text-4xl md:text-5xl lg:text-6xl font-semibold text-white md:leading-16 lg:leading-18 px-6 lg:px-42">
            Best Tool In The Market For
            Processing AP Invoices
          </h2>
          <button className="custom-button-light">
            Get In Touch
          </button>
        </div>
        {/* stats section */}
        <div className="flex justify-between items-center ">
          <div className="mt-[-130px] md:mt-0">
            <Image src={leftShape} alt="left shape" width={150} height={200} className=""/>
          </div>
          {/* stats & dashboard images */}
          <div className=" justify-center hidden md:flex lg:flex">
            <div className="mr-[-150px] mt-[-50px] z-10">
              <Image src={firstStats} alt="stats image" width={400} height={200} />
            </div>
            <div className="rounded-2xl" >
              <Image src={bigDash} alt="big dashboard" width={800} height={600} />
            </div>
            <div >
              <Image src={smallDash} alt="small dashboard" width={400} height={400} className="lg:ml-[-150px] md:ml-[-80px] shadow-lg shadow-gray-600  mt-12 rounded-3xl" />
            </div>
          </div>

        </div>

      </div>

      {/* product details section */}
      <div className="max-w-[98%] mx-auto my-5 bg-[#f7f9fc] rounded-3xl p-5 md:py-22">
        {/* heading section */}
        <div className="flex flex-col justify-center items-center gap-6 px-2 md-px-8 lg:px-10 py-5 md:py-14">
          <h2 className="text-center text-2xl md:text-4xl lg:text-5xl text-gray-600 font-semibold">
            Why automate your <span className="gradient-text">AP invoice</span> processing?
          </h2>
          <h3 className="md:text-2xl text-lg text-gray-600 font-normal px-3 lg:px-62 text-center">
            Free your AP teams from mundane processes to focus on strategic
            initiatives and better vendor relationships
          </h3>
        </div>
        {/* details card section */}
        <div className="flex flex-col justify-center items-center gap-10  md:gap-20 pb-20">

          {/* 1st card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-3 md:p-10 flex md:flex-row flex-col md:justify-center items-center md:gap-8 gap-3">
            <div className=" md:w-[60%] w-full">
              <div className="flex justify- items-center gap-5">
                <p className="card-list-button">1.</p>
                <h2 className="text-black md:text-3xl text-xl font-semibold">Invoice & Line Item Capture</h2>
              </div>
              <p className="text-gray-900 text-md md:text-lg mt-5">
                Reduce manual data entry and human error with AI based
                OCR and machine learning technology that instantly
                captures and codes your invoice
              </p>
            </div>
            {/* 2part */}
            <div className=" md:w-[40%] w-full mx-auto">
              <div>
                <Image src={FstCard} alt="card image" width={400} height={200} />
              </div>
            </div>
          </div>
          {/* 2nd card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl md:p-10 p-3 flex md:flex-row flex-col justify-center items-center md:gap-8 gap-3 ">
            <div className=" md:w-[60%] w-full">
              <div className="flex justify- items-center gap-5">
                <p className="card-list-button">2</p>
                <h2 className="text-black md:text-3xl text-xl font-semibold">Automatic Data Validation</h2>
              </div>
              <p className="text-gray-900 md:text-lg text-md mt-5">
                Automatically validate invoices against corresponding
                purchase orders, receipts, and invoice numbers using 2-way
                and 3-way matching for enhanced accuracy.
              </p>
            </div>
            {/* 2part */}
            <div className=" md:w-[40%] w-full mx-auto">
              <div>
                <Image src={SndCard} alt="card image" width={400} height={200} />
              </div>
            </div>
          </div>
          {/* 3rd card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl md:p-10 p-3 flex md:flex-row flex-col justify-center items-center md:gap-8 gap-3 ">
            <div className=" md:w-[60%] w-full">
              <div className="flex justify- items-center gap-5">
                <p className="card-list-button">3</p>
                <h2 className="text-black text-xl md:text-3xl font-semibold">Streamlined Approvals</h2>
              </div>
              <p className="text-gray-900 text-md md:text-lg mt-5">
                Accelerate invoice approvals with streamlined workflows,
                routing invoices to the right user based on custom built
                rules - no matter how complex they are
              </p>
            </div>
            {/* 2part */}
            <div className=" md:w-[40%] w-full mx-auto">
              <div>
                <Image src={TrdCard} alt="card image" width={400} height={200} />
              </div>
            </div>
          </div>
          {/* 4th card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl md:p-10 p-3 flex md:flex-row flex-col justify-center items-center md:gap-8 gap-3 ">
            <div className=" md:w-[60%] w-full">
              <div className="flex justify- items-center gap-5">
                <p className="card-list-button">4</p>
                <h2 className="text-black text-xl md:text-3xl font-semibold">Accrual Automation</h2>
              </div>
              <p className="text-gray-900 text-md md:text-lg mt-5">
                Simplify month-end closing for AP Teams by generating
                accurate accrual entries to save time, reduce manual errors
                and gain cashflow visibility
              </p>
            </div>
            {/* 2part */}
            <div className=" w-full md:w-[40%] mx-auto">
              <div>
                <Image src={FthCard} alt="card image" width={400} height={200} />
              </div>
            </div>
          </div>
          {/* 5th card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl md:p-10 p-3 flex md:flex-row flex-col justify-center items-center md:gap-8 gap-3 ">
            <div className="w-full md:w-[60%]">
              <div className="flex justify- items-center gap-5">
                <p className="card-list-button">5</p>
                <h2 className="text-black text-xl md:text-3xl font-semibold">Manage Multiple Entities</h2>
              </div>
              <p className="text-gray-900 text-md md:text-lg mt-5">
                Effortlessly add & manage affiliated entities along with their
                invoices, and assign granular user roles for enhanced control
                and visibility
              </p>
            </div>
            {/* 2part */}
            <div className="w-full md:w-[40%] mx-auto">
              <div>
                <Image src={FfthCard} alt="card image" width={400} height={200} />
              </div>
            </div>
          </div>
          {/* 6th card */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl md:p-10 p-3 flex md:flex-row flex-col justify-center items-center md:gap-8 gap-3 ">
            <div className="w-full md:w-[60%]">
              <div className="flex justify- items-center gap-5">
                <p className="card-list-button">6</p>
                <h2 className="text-black text-xl md:text-3xl font-semibold">Informed Decision Making</h2>
              </div>
              <p className="text-gray-900 text-md md:text-lg mt-5">
                Access real-time reports to identify trends, optimize processes,
                and make data-driven decisions that improve your financial
                performance
              </p>
            </div>
            {/* 2part */}
            <div className="w-full md:w-[40%] mx-auto">
              <div>
                <Image src={SxthCard} alt="card image" width={400} height={200} />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="home-page">
        {/* dark info section */}
        <div className="dark-info-section max-w-[98%] mx-auto my-10 rounded-3xl pb-80 lg:pb-96">
          {/* shape and heading */}
          <div className="flex items-center justify-center">
            <div className="flex justify-center items-start">
              <Image src={dShapeLarge} alt="large shape" width={200} height={400} className="lg:mt-[-60px] md:mt-[-40px]" />
              <Image src={dShapSmall} alt="small shape" width={150} height={200} className="mt-5" />
            </div>
            <div className="lg:text-center md:mr-[130px] lg:pt-12">
              <h2 className="lg:text-5xl md:text-4xl font-semibold text-white lg:px-42">
                Our <span className="gradient-header">Product Capabilities</span>
              </h2>
            </div>
          </div>

          {/* dark card section */}
          <div className="max-w-6xl mx-auto flex flex-col  justify-center items-center lg:gap-32 py-6 lg:py-20 ">
            {/* cards container */}
            {/* card 1 */}
            <div className="flex md:flex-row flex-col justify-center items-center p-2">
              <div className="lg:w-[50%] w-full">
               <StatsCounter/>
              </div>
              {/* card contents */}
              <div className="lg:w-[50%] flex flex-col justify-center items-start gap-4">
                <div className="flex justify-center items-center gap-3">
                  <button className="dark-card-list-button">1.</button>
                  <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold">Smarter & Measurable Results</h2>
                </div>
                <p>
                  Experience 95% accuracy, 90% time saved, and up to 60% cost
                  reduction — all powered by Payraydoo. Our intelligent automation
                  turns everyday workflows into effortless wins. It's not just faster;
                  it's smarter.
                </p>
              </div>
            </div>
            {/* card 2 */}
            <div className="flex md:flex-row flex-col gap-5 justify-center items-center mt-12 lg:mt-22 p-3">
              <div className="lg:w-[50%] w-full">
                
                <Image src={Workflow} alt="workflow image" width={400} height={250} className="lg:w-[350px] md:w-[320px] h-80"/>

              </div>
              {/* card contents */}
              <div className="lg:w-[50%] flex flex-col justify-center items-start gap-4">
                <div className="flex justify-center items-center gap-3">
                  <button className="dark-card-list-button">2.</button>
                  <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold">Seamless Integrations</h2>
                </div>
                <p>
                  Payraydoo connects with your everyday tools — Outlook, Gmail,
                  Google Drive, Dropbox, OneDrive, and more — so you can automate
                  tasks, sync files, and manage accounts without switching tabs.

                  Everything works together. Just like it should.

                </p>
              </div>
            </div>
            {/* card 3 */}
            <div className="flex md:flex-row flex-col justify-center items-center gap-5 p-3">
              <div className="lg:w-[50%] flex flex-col gap-4 justify-start items-center">
               <div className="flex  md:flex-row items-end gap-3">
                <Image src={apBottleneck} alt="ap invoice bottleneck" className="md:w-[150px] w-[130px] "/>
                <Image src={ocr} alt="oct card image" className="md:w-[120px] lg:w-[150px] w-[110px] md:h-[170px]"/>
               </div>
               <div>
                <Image src={customChart} alt="custom chart image" className="md:w-[300px] md:h-[150px] w-[290px]"/>
               </div>


              </div>
              {/* card contents */}
              <div className="lg:w-[50%] flex flex-col justify-center items-start gap-4">
                <div className="flex justify-center items-center gap-3">
                  <button className="dark-card-list-button">3.</button>
                  <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold">Complete control. 0 guesswork</h2>
                </div>
                <p>
                  Gain end-to-end visibility on AP invoice delays with AI-powered
                  insights and customizable reports. Payraydoo helps you identify
                  bottlenecks, accelerate approvals, and make smarter decisions—
                  faster.
                </p>
              </div>
            </div>
            {/* card 4 */}
            <div className="flex md:flex-row flex-col justify-center items-center p-3">
              <div className="w-[50%]">
                <Image src={ERPIntegration} alt="ERP integration image" className="md:w-[320px] md:h-[200px]"/>

              </div>
              {/* card contents */}
              <div className="w-[60%] flex flex-col justify-center items-start gap-4">
                <div className="flex justify-center items-center gap-3">
                  <button className="dark-card-list-button">4.</button>
                  <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold">Fits into your ERP universe</h2>
                </div>
                <p>
                  Whether it’s SAP, Oracle, Sage, or others—Payraydoo integrates
                  effortlessly with your existing ERP systems. No disruptions. Just
                  smoother workflows, unified data, and faster processing from
                  day one.
                </p>
              </div>
            </div>
            {/* card 5 */}
            <div className="flex md:flex-row flex-col justify-center items-center p-3">
              <div className="w-[50%] flex flex-col md:gap-2 lg:gap-5">
                <div className="flex flex-col">
                  <Image src={APteams} alt="AP teams image" className="mb-5 md:w-[200px]"/>
                  <Image src={supportTeam} alt="support team image" className="lg:-mt-20 md:mt-[-60px] lg:ml-[130px] md:ml-[80px] md:w-[230px] md:h-[130px]"/>
                </div>
                <div>
                  <Image src={globalSupport} alt="global support image" className="md:w-[250px]"/>
                </div>


              </div>
              {/* card contents */}
              <div className="w-[60%] flex flex-col justify-center items-start gap-4">
                <div className="flex justify-center items-center gap-3">
                  <button className="dark-card-list-button">5.</button>
                  <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold">Built for global teams.
                    Backed by real support.</h2>
                </div>
                <p>
                  From UK to USA to India, Payraydoo supports diverse invoice
                  formats across borders. And behind the tech? A dedicated support
                  team that truly understands AP challenges—ready to help, every
                  step of the way.
                </p>
              </div>
            </div>

          </div>
        </div>


        <div className="Ap-footer lg:w-7xl  mx-auto rounded-3xl lg:mt-[-430px] md:mt-[-200px] ">
          {/* headings */}
          <div className="text-center text-white px-2 flex flex-col justify-center items-center pt-12 md:mb-22">
            <h2 className="text-4xl font-semibold mb-2">
              Ready To Spend Less On Invoice Processing?
            </h2>
            <h3 className="text-lg font-normal">
              Reduce errors, free up your team for strategic work, and gain valuable insights.
            </h3>
            <button className="ap-button-dark mt-8">
              Find Out How
            </button>
          </div>
          <div>
            <div className="flex flex-col gap-12 md:-mb-66 lg:-mb-80 md:ml-16 lg:ml-20">
              <Image src={firstStats} alt="Stats image" className="shadow-md lg:w-[300px] md:w-[250px] lg:h-[170px] z-10 rounded"/>
              <Image src={smallDash} alt="Small dashboard" className="z-10 rounded-xl shadow-md lg:w-[250px] w-[200px] lg:h-[220px]"/>
            </div>
            <Image src={bigDash} alt="big dashboard" className="z-0 lg:w-[850px] md:w-[650px] lg:h-[400px] lg:ml-[280px] md:ml-[180px] rounded-t-2xl"/>
          </div>
        </div>
      </div>

    </div>
  );
}