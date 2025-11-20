import Image from "next/image";
import shapeSmall from "../../../../public/logo/Shape 1.png";
import logo from "../../../../public/logo/logo-open-fileArtboard-5.png";
import shapeLarge from "../../../../public/logo/Shape 2.png";
import leftShape from "../../../../public/logo/Shape 3.png";
import firstStats from "../../../../public/logo/stats 1.png";
import bigDash from "../../../../public/images/4.png";
import smallDash from "../../../../public/images/3.png";
import FstCard from "../../../../public/images/card 1.png";
import SndCard from "../../../../public/images/card 2.png";
import TrdCard from "../../../../public/images/card 3.png";
import FthCard from "../../../../public/images/card 4.png";
import FfthCard from "../../../../public/images/card 5.png";
import SxthCard from "../../../../public/images/card 6.png";
import dShapeLarge from "../../../../public/images/Shape 21.png";
import dShapSmall from "../../../../public/images/Shape 22.png";
import StatsCounter from "../../../Components/StatsCounter";
import Workflow from "../../../../public/images/workflow.png";
import ocr from "../../../../public/images/ocr.png";
import apBottleneck from "../../../../public/images/ap bottleneck.png";
import customChart from "../../../../public/images/custom chart.png";
import ERPIntegration from "../../../../public/images/erp intre.png";
import APteams from "../../../../public/images/ap teams.png";
import supportTeam from "../../../../public/images/support team.png";
import globalSupport from "../../../../public/images/global support.png";
import CapabilitiesCard from "../../../Components/CapabilitiesCard";
import ProductDetailsCard from "../../../Components/ProductDetailsCard";

export default function AP() {
   const capabilityCards = [
    {
      number: "1",
      title: "Invoice & Line Item Capture",
      description:
        "Reduce manual data entry and human error with AI based OCR and machine learning technology that instantly captures and codes your invoice",
      image: FstCard,
    },
    {
      number: "2",
      title: "Automatic Data Validation",
      description:
        "Automatically validate invoices against corresponding purchase orders, receipts, and invoice numbers using 2-way and 3-way matching for enhanced accuracy.",
      image: SndCard,
    },
    {
      number: "3",
      title: "Streamlined Approvals",
      description:
        "Accelerate invoice approvals with streamlined workflows, routing invoices to the right user based on custom built rules - no matter how complex they are",
      image: TrdCard,
    },
    {
      number: "4",
      title: "Accrual Automation",
      description:
        "Simplify month-end closing for AP Teams by generating accurate accrual entries to save time, reduce manual errors and gain cashflow visibility",
      image: FthCard,
    },
    {
      number: "5",
      title: "Manage Multiple Entities",
      description:
        "Effortlessly add & manage affiliated entities along with their invoices, and assign granular user roles for enhanced control and visibility",
      image: FfthCard,
    },
    {
      number: "6",
      title: "Informed Decision Making",
      description:
        "Access real-time reports to identify trends, optimize processes, and make data-driven decisions that improve your financial performance",
      image: SxthCard,
    },
  ];

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
      <div className="max-w-[98%] mx-auto my-5 bg-[#f7f9fc] rounded-3xl p-5 md:py-22">
        {/* heading section */}
        <div className="flex flex-col justify-center items-center gap-6 px-2 md-px-8 lg:px-10 py-5 md:py-14">
          <h2 className="text-center text-2xl md:text-4xl lg:text-5xl text-gray-600 font-semibold">
            Why automate your <span className="gradient-text">AP invoice</span>{" "}
            processing?
          </h2>
          <h3 className="md:text-2xl text-lg text-gray-600 font-normal px-3 lg:px-62 text-center">
            Free your AP teams from mundane processes to focus on strategic
            initiatives and better vendor relationships
          </h3>
        </div>
        {/* details card section */}
        <div className="flex flex-col justify-center items-center gap-10  md:gap-20 pb-20">
          {capabilityCards.map((card)=>(
            <ProductDetailsCard
              key={card.number}
              number={card.number}
              title={card.title}
              desription={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>

      <div className="home-page">
        {/* dark info section */}
        <div className="dark-info-section max-w-[98%] mx-auto my-10 rounded-3xl pb-80 lg:pb-96">
          {/* shape and heading */}
          <div className="flex items-center justify-center relative">
            <div className="hidden lg:flex justify-center items-start absolute left-0 pt-92">
              <Image
                src={dShapeLarge}
                alt="large shape"
                width={200}
                height={400}
                className="lg:mt-[-60px] md:-mt-10 "
              />
              <Image
                src={dShapSmall}
                alt="small shape"
                width={150}
                height={200}
                className="mt-5"
              />
            </div>
            <div className="text-center  pt-12">
              <h2 className="text-[35px] font-bold lg:text-4xl  lg:font-semibold text-white lg:px-42 ">
                Our{" "}
                <span className="gradient-header">Product Capabilities</span>
              </h2>
            </div>
          </div>

          {/* dark card section */}
          <div className="lg:max-w-6xl max-w-[90%] mx-auto flex flex-col  justify-center items-center lg:gap-32 py-6 lg:py-20 mlg:t-24">
            {/* cards container */}
            {/* card 1 */}
            <CapabilitiesCard
              component={<StatsCounter />}
              number={"1"}
              title={"Smarter & Measurable Results"}
              description={
                "Experience 95% accuracy, 90% time saved, and up to 60% cost reduction — all powered by Payraydoo. Our intelligent automation turns everyday workflows into effortless wins. It's not just faster; it's smarter."
              }
            />

            {/* card 2 */}
            <CapabilitiesCard
              image={Workflow}
              number={"2"}
              title={"Seamless Integrations"}
              description={
                "Payraydoo connects with your everyday tools — Outlook, Gmail, Google Drive, Dropbox, OneDrive, and more — so you can automate tasks, sync files, and manage accounts without switching tabs. Everything works together. Just like it should."
              }
            />
            {/* card 3 */}
            <CapabilitiesCard
              component={
                <div className="w-full flex flex-col gap-4 items-center  ">
                  <div className="flex w-full md:flex-row items-center justify-center gap-3  ">
                    <Image
                      src={apBottleneck}
                      alt="ap invoice bottleneck"
                      className="md:w-[150px] w-[130px] "
                    />
                    <Image
                      src={ocr}
                      alt="oct card image"
                      className="md:w-[120px] lg:w-[150px] w-[110px] md:h-[170px]"
                    />
                  </div>
                  <div className="w-full flex justify-center ">
                    <Image
                      src={customChart}
                      alt="custom chart image"
                      className="md:w-[300px] md:h-[150px] w-[290px]"
                    />
                  </div>
                </div>
              }
              number={"3"}
              title={"Complete control. 0 guesswork"}
              description={
                "Gain end-to-end visibility on AP invoice delays with AI-powered insights and customizable reports. Payraydoo helps you identify bottlenecks, accelerate approvals, and make smarter decisions— faster."
              }
            />
            {/* card 4 */}
            <CapabilitiesCard
              image={ERPIntegration}
              number={"4"}
              title={"Fits into your ERP universe"}
              description={
                "Whether it’s SAP, Oracle, Sage, or others—Payraydoo integrates effortlessly with your existing ERP systems. No disruptions. Just smoother workflows, unified data, and faster processing from day one."
              }
            />
            {/* card 5 */}
            <CapabilitiesCard
              component={
                <div className="w-full flex flex-col gap-4 items-center  ">
                  <div className="flex flex-col">
                    <Image
                      src={APteams}
                      alt="AP teams image"
                      className="mb-5 md:w-[200px]"
                    />
                    <Image
                      src={supportTeam}
                      alt="support team image"
                      className="lg:-mt-20 md:mt-[-60px] lg:ml-[130px] md:ml-20 md:w-[230px] md:h-[130px]"
                    />
                  </div>
                  <div>
                    <Image
                      src={globalSupport}
                      alt="global support image"
                      className="md:w-[250px]"
                    />
                  </div>
                </div>
              }
              number={"5"}
              title={"Built for global teams. Backed by real support."}
              description={
                "From UK to USA to India, Payraydoo supports diverse invoice formats across borders. And behind the tech? A dedicated support team that truly understands AP challenges—ready to help, every step of the way."
              }
            />
          </div>
        </div>

        <div className="Ap-footer lg:w-7xl  mx-auto rounded-3xl lg:mt-[-430px] md:mt-[-200px] lg:block hidden">
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
    </div>
  );
}
