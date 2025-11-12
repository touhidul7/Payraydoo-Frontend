import Image from "next/image";
import shapeSmall from '../../../public/logo/Shape 1.png';
import shapeLarge from '../../../public/logo/Shape 2.png';
import leftShape from '../../../public/logo/Shape 3.png'
import firstStats from '../../../public/logo/stats 1.png';
import bigDash from '../../../public/images/4.png';
import smallDash from '../../../public/images/3.png';
import mobileFront from '../../../public/images/ar mobile front.png';

import logo from "../../../public/logo/logo-open-fileArtboard-5.png";



export default function AR() {
  return (
    <div className='font-mont bg-white'>
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
            Processing AR Invoices
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
          <h2 className="text-center text-5xl text-gray-600 font-semibold px-32">
            <span className='gradient-header'>Accounts Receivable</span> Automation SaaS
            Product Features Content
          </h2>
        </div>

        {/* features section */}
        <div className="feature-parent w-[90%] mx-auto mb-16 ">
          <div className="grid grid-cols-3 grid-rows-5 gap-5">
            {/* grid 1 */}
            <div className="row-span-2 col-start-1 row-start-2 bg-white rounded-3xl text-black p-7 py-12">
              <div className="flex flex-col gap-3">
                <button className="card-list-button">1.</button>
                <h2 className="text-2xl font-semibold mt-12">
                  Invoice & Line Item Capture
                </h2>
                <p className="text-sm">Reduce manual data entry and human error with
                  AI based OCR and machine learning technology that
                  instantly captures and codes your invoice</p>
              </div>
            </div>
            {/* grid 2 */}
            <div className="row-span-2 col-start-1 row-start-4 bg-white rounded-3xl text-black p-8 py-12">
              <div className="flex flex-col gap-5">
                <button className="card-list-button">3.</button>
                <h2 className="text-2xl font-semibold mt-12">
                  Invoice & Line Item Capture
                </h2>
                <p className="text-sm">Reduce manual data entry and human error with
                  AI based OCR and machine learning technology that
                  instantly captures and codes your invoice</p>
              </div>
            </div>
            {/* grid 3 */}
            <div className="w-auto row-span-3 col-start-2 row-start-1 bg-[#a64dff] rounded-3xl text-black flex justify-center items-end ">
              <Image src={mobileFront} className="w-auto" />
            </div>
            {/* grid 4 */}
            <div className="row-span-2 col-start-2 row-start-4 bg-white rounded-3xl text-black p-8 py-12">
              <div className="flex flex-col gap-3">
                <button className="card-list-button">4.</button>
                <h2 className="text-2xl font-semibold mt-12">
                  Invoice & Line Item Capture
                </h2>
                <p className="text-sm">Reduce manual data entry and human error with
                  AI based OCR and machine learning technology that
                  instantly captures and codes your invoice</p>
              </div>
            </div>
            {/* grid 5 */}
            <div className="row-span-2 col-start-3 row-start-2 bg-white rounded-3xl text-black p-8 py-12">
              <div className="flex flex-col gap-3">
                <button className="card-list-button">2.</button>
                <h2 className="text-2xl font-semibold mt-12">
                  Invoice & Line Item Capture
                </h2>
                <p className="text-sm">Reduce manual data entry and human error with
                  AI based OCR and machine learning technology that
                  instantly captures and codes your invoice</p>
              </div>
            </div>
            {/* grid 6 */}
            <div className="row-span-2 row-start-4 bg-white rounded-3xl text-black p-8 py-12">
              <div className="flex flex-col gap-3">
                <button className="card-list-button">5.</button>
                <h2 className="text-2xl font-semibold mt-12">
                  Invoice & Line Item Capture
                </h2>
                <p className="text-sm">Reduce manual data entry and human error with
                  AI based OCR and machine learning technology that
                  instantly captures and codes your invoice</p>
              </div>
            </div>
          </div>

        </div>

        {/* dark section */}
        <div className="dark-info-section p-12 rounded-3xl mb-16 mt-32">
          <div>
            <h2 className="text-4xl font-semibold px-72 text-center mt-12"><span className="gradient-header">Accounts Receivable</span> Automation SaaS
              Product Features Content</h2>
          </div>

          <div className="p-3 flex flex-col md:flex-row gap-12 justify-center mt-16">
            {/* first column */}
            <div className="w-[25%]">
              <div className="flex flex-col gap-3 items-start p-8">
                <h2 className="text-xl font-semibold text-[#0ae2f7]">Slash DSO by 50%</h2>
                <p className="text-sm">Automate invoicing, reconciliation,
                  and collections to accelerate cash
                  flow and get paid faster.</p>
              </div>
              <div className="flex flex-col gap-3 items-start p-8">
                <h2 className="text-xl font-semibold text-[#0ae2f7]">Save 80% on
                  Manual Tasks</h2>
                <p className="text-sm">Eliminate repetitive work with
                  intelligent automation, freeing
                  finance teams for strategic focus.</p>
              </div>
              <div className="flex flex-col gap-3 items-start p-8">
                <h2 className="text-xl font-semibold text-[#0ae2f7]">AI-Driven Accuracy</h2>
                <p className="text-sm">OpenAI-powered transaction-invoice
                  matching with 85% confidence,
                  reducing errors and manual effort.</p>
              </div>
            </div>

            {/* second column */}
            <div className="w-[50%]">2</div>

            {/* third column */}
            <div className="w-[25%]">
              <div className="flex flex-col gap-3 items-start p-8">
                <h2 className="text-xl font-semibold text-[#0ae2f7]">Seamless Integrations</h2>
                <p className="text-sm">Connects effortlessly with Plaid for
                  banking, QuickBooks for ERP, and
                  SendGrid for emails.</p>
              </div>
              <div className="flex flex-col gap-3 items-start p-8">
                <h2 className="text-xl font-semibold text-[#0ae2f7]">Trusted Compliance</h2>
                <p className="text-sm">GDPR, PCI-DSS, and PSD2-compliant
                  for secure, reliable operations in UK and
                  USA markets.</p>
              </div>
            </div>

          </div>

        </div>


      </div>
    </div>
  )
}
